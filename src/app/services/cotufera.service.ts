import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import {
  AvatarPreset,
  CatalogMeta,
  CommentItem,
  MovieFilters,
  MovieItem,
  UserProfile
} from '../models/cotufera.models';

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class CotuferaService {
  // En navegador usa el host actual; en APK Android usa la IP guardada o autodescubierta en el Wi-Fi
  private readonly defaultLanIp = '192.168.10.5';
  private readonly HOST_KEY = 'cotufera_api_host_v1';
  private readonly TOKEN_KEY = 'cotufera_session_token_v2';
  private readonly USER_KEY = 'cotufera_session_user_v2';

  private apiHostSubject = new BehaviorSubject<string>(this.resolveInitialHost());
  public apiHost$ = this.apiHostSubject.asObservable();
  private discovering = false;

  get apiHost(): string {
    return this.apiHostSubject.value;
  }

  get apiUrl(): string {
    return `http://${this.apiHostSubject.value}:3000/api`;
  }

  private resolveInitialHost(): string {
    const saved = (localStorage.getItem(this.HOST_KEY) || '').trim();
    if (saved) return saved;
    const host = window.location.hostname;
    const isAndroidDevice = /android/i.test(navigator.userAgent || '');
    if (isAndroidDevice && (!host || host === 'localhost' || host === '127.0.0.1')) {
      return this.defaultLanIp;
    }
    return host || 'localhost';
  }

  setApiHost(newHost: string): void {
    const cleaned = (newHost || '')
      .trim()
      .replace(/^https?:\/\//i, '')
      .replace(/:\d+.*$/, '')
      .replace(/\/.*$/, '');
    if (!cleaned) return;
    localStorage.setItem(this.HOST_KEY, cleaned);
    this.apiHostSubject.next(cleaned);
    this.restoreSession();
  }

  private async probeHost(ip: string, timeoutMs = 950): Promise<string | null> {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeoutMs);
    try {
      const res = await fetch(`http://${ip}:3000/api/health`, { signal: ctrl.signal });
      if (!res.ok) return null;
      const json = await res.json();
      if (json && json.success && String(json.message || '').includes('Cotufera')) {
        return ip;
      }
      return null;
    } catch {
      return null;
    } finally {
      clearTimeout(timer);
    }
  }

  /**
   * Busca automaticamente que laptop/PC de la red Wi-Fi tiene encendido el backend de Cotufera (puerto 3000).
   */
  async autoDiscoverServer(): Promise<string | null> {
    if (this.discovering) return null;
    this.discovering = true;
    try {
      // 1) Probar primero el host actual, localhost y emulador Android
      const quickCandidates = Array.from(new Set([
        this.apiHost,
        this.defaultLanIp,
        'localhost',
        '10.0.2.2'
      ]));
      for (const candidate of quickCandidates) {
        const hit = await this.probeHost(candidate, 800);
        if (hit) {
          this.setApiHost(hit);
          return hit;
        }
      }

      // 2) Escanear subredes Wi-Fi domesticas y hotspots comunes
      const currentPrefix = this.apiHost.split('.').slice(0, 3).join('.');
      const prefixes = Array.from(new Set([
        ...(currentPrefix.split('.').length === 3 ? [currentPrefix] : []),
        '192.168.10',
        '192.168.1',
        '192.168.0',
        '192.168.100',
        '192.168.43',
        '172.20.10'
      ]));

      for (const prefix of prefixes) {
        const ips: string[] = [];
        for (let i = 1; i <= 254; i++) {
          ips.push(`${prefix}.${i}`);
        }
        const batchSize = 45;
        for (let i = 0; i < ips.length; i += batchSize) {
          const batch = ips.slice(i, i + batchSize);
          const results = await Promise.all(batch.map(ip => this.probeHost(ip, 750)));
          const found = results.find(Boolean);
          if (found) {
            this.setApiHost(found);
            return found;
          }
        }
      }
      return null;
    } finally {
      this.discovering = false;
    }
  }

  private currentUserSubject = new BehaviorSubject<UserProfile | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  readonly avatarPresets: AvatarPreset[] = [
    {
      id: 'critic-crimson',
      label: 'Pluma de Oro',
      emoji: 'CR',
      gradient: 'linear-gradient(135deg, #ff3366 0%, #9b1c48 100%)',
      accent: '#ff3366'
    },
    {
      id: 'critic-gold',
      label: 'Lente de Autor',
      emoji: 'LA',
      gradient: 'linear-gradient(135deg, #f5c518 0%, #c27803 100%)',
      accent: '#f5c518'
    },
    {
      id: 'critic-violet',
      label: 'Prensa VIP',
      emoji: 'PR',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #4c1d95 100%)',
      accent: '#8b5cf6'
    },
    {
      id: 'popcorn-gold',
      label: 'Sala Clásica',
      emoji: 'AU',
      gradient: 'linear-gradient(135deg, #fbbf24 0%, #ea580c 100%)',
      accent: '#fbbf24'
    },
    {
      id: 'popcorn-cyan',
      label: 'Cinéfilo Sci-Fi',
      emoji: 'SF',
      gradient: 'linear-gradient(135deg, #00e5ff 0%, #0284c7 100%)',
      accent: '#00e5ff'
    },
    {
      id: 'popcorn-emerald',
      label: 'Maratonista',
      emoji: 'MR',
      gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
      accent: '#10b981'
    }
  ];

  constructor(private http: HttpClient) {
    // Limpia sesiones antiguas de versiones previas (auto-login de pruebas)
    localStorage.removeItem('cotufera_jwt_token');
    localStorage.removeItem('cotufera_active_user');
    this.restoreSession();
  }

  /** Restaura la sesion guardada (si el usuario inicio sesion antes) y la valida contra el servidor. */
  private restoreSession(): void {
    const stored = this.loadStoredUser();
    const token = this.token;
    if (!stored || !token) {
      this.clearSession();
      return;
    }
    this.currentUserSubject.next(stored);
    this.http
      .get<ApiResponse<UserProfile>>(`${this.apiUrl}/users/me`, { headers: this.getAuthHeaders() })
      .subscribe({
        next: res => {
          localStorage.setItem(this.USER_KEY, JSON.stringify(res.data));
          this.currentUserSubject.next(res.data);
        },
        error: err => {
          // Solo se cierra sesion si el servidor rechaza el token o el usuario ya no existe
          if (err.status === 401 || err.status === 404) this.clearSession();
        }
      });
  }

  get isLoggedIn(): boolean {
    return !!this.currentUser && !!this.token;
  }


  private loadStoredUser(): UserProfile | null {
    try {
      const raw = localStorage.getItem(this.USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  get currentUser(): UserProfile | null {
    return this.currentUserSubject.value;
  }

  get token(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private getAuthHeaders(): HttpHeaders {
    const t = this.token;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (t) {
      headers = headers.set('Authorization', `Bearer ${t}`);
    }
    return headers;
  }

  setSession(user: UserProfile, token: string): void {
    const { reviews, ...lightUser } = user as any; // evita guardar listas largas en localStorage
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(lightUser));
    this.currentUserSubject.next(lightUser as UserProfile);
  }

  clearSession(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
  }

  getAvatarPreset(avatarId?: string, role?: string): AvatarPreset {
    const found = this.avatarPresets.find(a => a.id === avatarId);
    if (found) return found;
    return role === 'critic' ? this.avatarPresets[0] : this.avatarPresets[3];
  }

  getUserInitials(name?: string, fallbackRole?: string): string {
    if (!name || !name.trim()) {
      return fallbackRole === 'critic' ? 'CR' : 'AU';
    }
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0].slice(0, 2).toUpperCase();
  }

  getScoreLabel(score: number): string {
    if (score >= 10) return 'Obra Maestra Absoluta';
    if (score >= 9) return 'Imprescindible';
    if (score >= 8) return 'Excelente';
    if (score >= 7) return 'Muy Buena';
    if (score >= 6) return 'Entretenida';
    if (score >= 5) return 'Regular';
    if (score >= 3) return 'Floja';
    return 'Decepcionante';
  }

  // ==================== AUTH & CRUD USUARIOS ====================

  login(email: string, password: string): Observable<{ user: UserProfile; token: string }> {
    return this.http
      .post<ApiResponse<{ user: UserProfile; token: string }>>(`${this.apiUrl}/auth/login`, { email, password })
      .pipe(
        map(res => res.data),
        tap(data => {
          if (data?.user && data?.token) {
            this.setSession(data.user, data.token);
          }
        })
      );
  }

  register(payload: Partial<UserProfile> & { password?: string }): Observable<{ user: UserProfile; token: string }> {
    return this.http
      .post<ApiResponse<any>>(`${this.apiUrl}/auth/register`, payload)
      .pipe(
        map(res => {
          const user = res.data.user || res.data;
          const token = res.data.token || '';
          return { user, token };
        }),
        tap(data => {
          if (data?.user && data?.token) {
            this.setSession(data.user, data.token);
          }
        })
      );
  }

  getUserById(userId: string): Observable<UserProfile> {
    return this.http
      .get<ApiResponse<UserProfile>>(`${this.apiUrl}/users/${userId}`)
      .pipe(map(res => res.data));
  }

  getMyProfile(): Observable<UserProfile> {
    return this.http
      .get<ApiResponse<UserProfile>>(`${this.apiUrl}/users/me`, { headers: this.getAuthHeaders() })
      .pipe(
        map(res => res.data),
        tap(user => {
          localStorage.setItem(this.USER_KEY, JSON.stringify(user));
          this.currentUserSubject.next(user);
        })
      );
  }

  updateUser(userId: string, payload: Partial<UserProfile> & { password?: string }): Observable<{ user: UserProfile; token: string }> {
    return this.http
      .put<ApiResponse<{ user: UserProfile; token: string }>>(`${this.apiUrl}/users/${userId}`, payload, {
        headers: this.getAuthHeaders()
      })
      .pipe(
        map(res => res.data),
        tap(data => {
          if (this.currentUser && String(this.currentUser._id) === String(userId) && data?.user) {
            this.setSession(data.user, data.token || this.token || '');
          }
        })
      );
  }

  deleteUser(userId: string): Observable<{ deletedId: string; deletedComments: number }> {
    return this.http
      .delete<ApiResponse<{ deletedId: string; deletedComments: number }>>(`${this.apiUrl}/users/${userId}`, {
        headers: this.getAuthHeaders()
      })
      .pipe(
        map(res => res.data),
        tap(() => {
          if (this.currentUser && String(this.currentUser._id) === String(userId)) {
            this.clearSession();
          }
        })
      );
  }

  // ==================== PELICULAS & SERIES (FILTROS, SORTING, TMDB) ====================

  getMovies(filters: MovieFilters = {}): Observable<MovieItem[]> {
    let params = new HttpParams();
    if (filters.title) params = params.set('title', filters.title);
    if (filters.category && filters.category !== 'Todas') params = params.set('category', filters.category);
    if (filters.mediaType && filters.mediaType !== 'all') params = params.set('mediaType', filters.mediaType);
    if (filters.year && filters.year !== 'Todos') params = params.set('year', filters.year);
    if (filters.dateFrom) params = params.set('dateFrom', filters.dateFrom);
    if (filters.dateTo) params = params.set('dateTo', filters.dateTo);
    if (filters.minScore && filters.minScore > 0) params = params.set('minScore', String(filters.minScore));
    if (filters.scoreType) params = params.set('scoreType', filters.scoreType);
    if (filters.sortBy) params = params.set('sortBy', filters.sortBy);
    if (filters.sortOrder) params = params.set('sortOrder', filters.sortOrder);
    if (filters.external) params = params.set('external', 'true');

    return this.http
      .get<ApiResponse<MovieItem[]>>(`${this.apiUrl}/movies`, { params })
      .pipe(map(res => res.data));
  }

  getCatalogMeta(): Observable<CatalogMeta> {
    return this.http
      .get<ApiResponse<CatalogMeta>>(`${this.apiUrl}/movies/meta/catalog`)
      .pipe(map(res => res.data));
  }

  discoverExternal(query: string, type: string = 'multi'): Observable<MovieItem[]> {
    const params = new HttpParams().set('q', query).set('type', type);
    return this.http
      .get<ApiResponse<MovieItem[]>>(`${this.apiUrl}/movies/discover/external`, { params })
      .pipe(map(res => res.data));
  }

  getMovieById(tmdbId: number, type: string = 'movie'): Observable<MovieItem> {
    const params = new HttpParams().set('type', type);
    return this.http
      .get<ApiResponse<MovieItem>>(`${this.apiUrl}/movies/${tmdbId}`, { params })
      .pipe(map(res => res.data));
  }

  // ==================== CRUD COMENTARIOS ====================

  getAllComments(): Observable<CommentItem[]> {
    return this.http
      .get<ApiResponse<CommentItem[]>>(`${this.apiUrl}/comments`)
      .pipe(map(res => res.data));
  }

  getMovieComments(tmdbId: number, role: 'all' | 'critic' | 'normal' = 'all'): Observable<CommentItem[]> {
    const params = new HttpParams().set('role', role);
    return this.http
      .get<ApiResponse<CommentItem[]>>(`${this.apiUrl}/comments/${tmdbId}`, { params })
      .pipe(map(res => res.data));
  }

  getUserComments(userId: string): Observable<CommentItem[]> {
    return this.http
      .get<ApiResponse<CommentItem[]>>(`${this.apiUrl}/comments/user/${userId}`)
      .pipe(map(res => res.data));
  }

  createComment(
    tmdbId: number,
    payload: { text: string; score: number; headline?: string; containsSpoilers?: boolean; mediaType?: string }
  ): Observable<{ comment: CommentItem; movieStats: any }> {
    return this.http
      .post<ApiResponse<{ comment: CommentItem; movieStats: any }>>(
        `${this.apiUrl}/comments/${tmdbId}`,
        payload,
        { headers: this.getAuthHeaders() }
      )
      .pipe(map(res => res.data));
  }

  updateComment(
    commentId: string,
    payload: { text?: string; score?: number; headline?: string; containsSpoilers?: boolean }
  ): Observable<{ comment: CommentItem; movieStats: any }> {
    return this.http
      .put<ApiResponse<{ comment: CommentItem; movieStats: any }>>(
        `${this.apiUrl}/comments/${commentId}`,
        payload,
        { headers: this.getAuthHeaders() }
      )
      .pipe(map(res => res.data));
  }

  deleteComment(commentId: string): Observable<{ deletedId: string; movieStats: any }> {
    return this.http
      .delete<ApiResponse<{ deletedId: string; movieStats: any }>>(
        `${this.apiUrl}/comments/${commentId}`,
        { headers: this.getAuthHeaders() }
      )
      .pipe(map(res => res.data));
  }
}

