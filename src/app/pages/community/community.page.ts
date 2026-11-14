import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { CotuferaService } from '../../services/cotufera.service';
import { CommentItem, MovieItem, UserProfile } from '../../models/cotufera.models';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonIcon],
  template: `
    <ion-content [fullscreen]="true">
      <div class="community-wrapper">

        <!-- CABECERA DEL CENTRO DE RESEÑAS (CRUD COMENTARIOS) -->
        <section class="hub-banner glass-panel">
          <div class="banner-left">
            <span class="eyebrow">PULSO CINEMATOGRÁFICO · CRUD DE COMENTARIOS</span>
            <h1 class="page-title font-display">Muro de Críticas y Opiniones</h1>
            <p class="page-desc">
              Explora, publica, edita o elimina reseñas con puntajes del 1 al 10. Cada cambio recalcula en tiempo real la brecha entre Críticos Especializados y Usuarios Normales.
            </p>
          </div>

          <div class="banner-stats">
            <div class="stat-pill gold">
              <span class="stat-num">{{ comments.length }}</span>
              <span class="stat-lbl">Reseñas Totales</span>
            </div>
            <div class="stat-pill crimson">
              <span class="stat-num">{{ globalCriticAvg }}</span>
              <span class="stat-lbl">Media Críticos</span>
            </div>
            <div class="stat-pill cyan">
              <span class="stat-num">{{ globalNormalAvg }}</span>
              <span class="stat-lbl">Media Usuarios</span>
            </div>
          </div>
        </section>

        <!-- BARRA DE CONTROL Y BOTÓN PARA ABRIR EL COMPOSITOR VISUAL -->
        <section class="controls-bar glass-panel">
          <div class="search-input-wrap">
            <ion-icon name="search-outline" class="search-ico"></ion-icon>
            <input
              type="text"
              maxlength="80"
              [(ngModel)]="searchQuery"
              placeholder="Buscar reseña por película, serie, autor o palabra clave..." />
          </div>

          <div class="role-tabs">
            <button
              type="button"
              class="r-tab"
              [class.active]="roleFilter === 'all'"
              (click)="roleFilter = 'all'">
              Todas ({{ comments.length }})
            </button>
            <button
              type="button"
              class="r-tab critic"
              [class.active]="roleFilter === 'critic'"
              (click)="roleFilter = 'critic'">
              Críticos
            </button>
            <button
              type="button"
              class="r-tab normal"
              [class.active]="roleFilter === 'normal'"
              (click)="roleFilter = 'normal'">
              Usuarios
            </button>
          </div>

          <button
            type="button"
            class="btn-compose-toggle"
            (click)="toggleComposer()">
            {{ showComposer ? 'Cerrar Estudio' : '+ Nueva Reseña / Opinión' }}
          </button>
        </section>

        <!-- ESTUDIO INTERACTIVO PARA CREAR O EDITAR COMENTARIO -->
        <section class="studio-drawer glass-panel" *ngIf="showComposer">
          <div class="studio-header">
            <div>
              <span class="eyebrow">{{ editingComment ? 'MODO EDICIÓN' : 'NUEVA VALORACIÓN' }}</span>
              <h3 class="studio-title font-display">
                {{ editingComment ? 'Editar Opinión y Puntaje' : 'Selecciona una Película o Serie y Califícala' }}
              </h3>
            </div>
            <span *ngIf="currentUser" [class]="currentUser.role === 'critic' ? 'badge-critic' : 'badge-audience'">
              Publicando como: {{ currentUser.name }} ({{ currentUser.role === 'critic' ? 'Crítico' : 'Usuario' }})
            </span>
          </div>

          <!-- Selector visual de película/serie con pósters -->
          <div class="movie-picker-carousel touch-carousel" *ngIf="!editingComment">
            <div
              class="mini-movie-tile"
              *ngFor="let m of movies"
              [class.selected]="selectedMovieTmdbId === m.tmdbId"
              (click)="selectedMovieTmdbId = m.tmdbId">
              <img [src]="m.coverUrl" [alt]="m.title" loading="lazy" />
              <span class="mini-title">{{ m.title }}</span>
            </div>
          </div>

          <!-- Selector interactivo 1-10 -->
          <div class="score-dial-box">
            <div class="dial-top">
              <span>Puntaje otorgado:</span>
              <strong>{{ form.score }} / 10 — {{ cotufera.getScoreLabel(form.score) }}</strong>
            </div>
            <div class="dial-row">
              <button
                type="button"
                *ngFor="let n of [1,2,3,4,5,6,7,8,9,10]"
                class="dial-btn"
                [class.active]="form.score === n"
                [class.critic]="currentUser?.role === 'critic' && form.score === n"
                (click)="form.score = n">
                {{ n }}
              </button>
            </div>
          </div>

          <div class="studio-fields">
            <div class="field-with-counter">
              <div class="field-meta-row">
                <label>Titular de la reseña (opcional)</label>
                <span class="char-count">{{ form.headline.length }} / {{ MAX_HEADLINE }}</span>
              </div>
              <input
                type="text"
                [maxLength]="MAX_HEADLINE"
                [(ngModel)]="form.headline"
                placeholder="Ej. Una joya imprescindible del género"
                class="studio-input" />
            </div>

            <div class="field-with-counter">
              <div class="field-meta-row">
                <label>Tu crítica u opinión</label>
                <span class="char-count">{{ form.text.length }} / {{ MAX_REVIEW_TEXT }}</span>
              </div>
              <textarea
                rows="4"
                [maxLength]="MAX_REVIEW_TEXT"
                [(ngModel)]="form.text"
                placeholder="Comparte tu opinión sobre la historia, actuaciones y puesta en escena (máx. 500 caracteres)..."
                class="studio-textarea"></textarea>
            </div>
          </div>

          <div class="studio-actions">
            <button type="button" class="btn-secondary" (click)="cancelStudio()">Cancelar</button>
            <button type="button" class="btn-save-gold" (click)="saveReview()">
              {{ editingComment ? 'Actualizar Comentario y Puntaje' : 'Publicar Comentario' }}
            </button>
          </div>
        </section>

        <div class="status-banner" *ngIf="statusMsg">
          <span>{{ statusMsg }}</span>
          <button type="button" (click)="statusMsg = ''">✕</button>
        </div>

        <!-- FEED VISUAL DE TARJETAS DE COMENTARIOS CON PÓSTER DE PELÍCULA -->
        <section class="reviews-masonry">
          <article
            class="review-showcase-card glass-panel"
            *ngFor="let item of filteredComments"
            [class.critic-card]="item.userId?.role === 'critic'">

            <div class="movie-side" (click)="openMovie(item.movieId?.tmdbId || item.tmdbId)" *ngIf="item.movieId">
              <img [src]="item.movieId.coverUrl" [alt]="item.movieId.title" class="mini-poster" loading="lazy" />
            </div>

            <div class="review-content-side">
              <div class="review-top-row">
                <div class="movie-badge-link" (click)="openMovie(item.movieId?.tmdbId || item.tmdbId)">
                  <span class="m-type">{{ item.movieId?.mediaType === 'tv' ? 'SERIE' : 'PELÍCULA' }}</span>
                  <span class="m-name">{{ item.movieId?.title || 'Título #' + item.tmdbId }}</span>
                </div>

                <div class="score-medal" [class.critic]="item.userId?.role === 'critic'">
                  {{ item.score }}<small>/10</small>
                </div>
              </div>

              <h4 class="r-headline" *ngIf="item.headline">“{{ item.headline }}”</h4>
              <p class="r-text">{{ item.text }}</p>

              <div class="review-bottom-row">
                <div class="r-user">
                  <span
                    class="u-ava"
                    [style.background]="cotufera.getAvatarPreset(item.userId?.avatar, item.userId?.role).gradient">
                    {{ cotufera.getUserInitials(item.userId?.name, item.userId?.role) }}
                  </span>
                  <div class="u-details">
                    <span class="u-name">{{ item.userId?.name || 'Cinéfilo' }}</span>
                    <span [class]="item.userId?.role === 'critic' ? 'badge-critic' : 'badge-audience'">
                      {{ item.userId?.role === 'critic' ? 'Crítico' : 'Usuario' }}
                    </span>
                  </div>
                </div>

                <div class="r-crud-actions" *ngIf="isMine(item)">
                  <button type="button" class="act-btn edit" (click)="startEdit(item)">Editar</button>
                  <button type="button" class="act-btn del" (click)="deleteItem(item)">Borrar</button>
                </div>
              </div>
            </div>
          </article>
        </section>

      </div>
    </ion-content>
  `,
  styles: [`
    .community-wrapper {
      max-width: 1240px;
      margin: 0 auto;
      padding: 82px 16px 115px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      min-width: 0;
    }

    .hub-banner {
      padding: 26px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .banner-left {
      max-width: 650px;
      min-width: 0;
    }

    .eyebrow {
      font-size: 0.68rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      color: #f5c518;
      display: block;
      margin-bottom: 6px;
    }

    .page-title {
      margin: 0 0 8px;
      font-size: clamp(1.5rem, 3vw, 2.1rem);
      font-weight: 800;
    }

    .page-desc {
      margin: 0;
      font-size: 0.9rem;
      color: #94a3b8;
      line-height: 1.55;
    }

    .banner-stats {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .stat-pill {
      padding: 12px 18px;
      border-radius: 18px;
      background: rgba(8, 9, 14, 0.72);
      border: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 115px;
    }

    .stat-pill.gold { border-color: rgba(245, 197, 24, 0.38); }
    .stat-pill.crimson { border-color: rgba(255, 51, 102, 0.4); }
    .stat-pill.cyan { border-color: rgba(0, 229, 255, 0.38); }

    .stat-num {
      font-size: 1.25rem;
      font-weight: 800;
      color: #fff;
    }

    .stat-lbl {
      font-size: 0.68rem;
      color: #94a3b8;
      font-weight: 700;
      margin-top: 2px;
    }

    .controls-bar {
      padding: 14px 18px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .search-input-wrap {
      flex: 1;
      min-width: 220px;
      display: flex;
      align-items: center;
      gap: 10px;
      background: rgba(8, 9, 14, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 14px;
      padding: 10px 14px;
    }

    .search-ico {
      color: #94a3b8;
      font-size: 1.05rem;
      flex-shrink: 0;
    }

    .search-input-wrap input {
      width: 100%;
      border: none;
      background: transparent;
      color: #fff;
      font-size: 0.88rem;
      outline: none;
    }

    .role-tabs {
      display: flex;
      gap: 6px;
      background: rgba(8, 9, 14, 0.6);
      padding: 4px;
      border-radius: 999px;
    }

    .r-tab {
      border: none;
      background: transparent;
      color: #94a3b8;
      font-size: 0.78rem;
      font-weight: 700;
      padding: 7px 14px;
      border-radius: 999px;
      cursor: pointer;
    }

    .r-tab.active {
      background: rgba(245, 197, 24, 0.2);
      color: #f5c518;
    }

    .r-tab.critic.active {
      background: rgba(255, 51, 102, 0.22);
      color: #ff5c85;
    }

    .r-tab.normal.active {
      background: rgba(0, 229, 255, 0.2);
      color: #38ecff;
    }

    .btn-compose-toggle {
      border: none;
      background: linear-gradient(135deg, #f5c518, #e09f00);
      color: #08090e;
      font-weight: 800;
      font-size: 0.84rem;
      padding: 11px 18px;
      border-radius: 14px;
      cursor: pointer;
    }

    /* STUDIO DRAWER */
    .studio-drawer {
      padding: 22px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      border-color: rgba(245, 197, 24, 0.35);
      min-width: 0;
      overflow: hidden;
    }

    .studio-header {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }

    .studio-title {
      margin: 0;
      font-size: 1.2rem;
    }

    .movie-picker-carousel {
      display: flex;
      gap: 12px;
      padding-bottom: 8px;
      width: 100%;
    }

    .mini-movie-tile {
      width: 105px;
      flex: 0 0 105px;
      scroll-snap-align: start;
      border-radius: 14px;
      overflow: hidden;
      border: 2px solid transparent;
      background: rgba(8, 9, 14, 0.8);
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .mini-movie-tile.selected {
      border-color: #f5c518;
      box-shadow: 0 8px 20px rgba(245, 197, 24, 0.3);
    }

    .mini-movie-tile img {
      width: 100%;
      height: 140px;
      object-fit: cover;
      display: block;
    }

    .mini-title {
      display: block;
      padding: 6px;
      font-size: 0.7rem;
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
    }

    .score-dial-box {
      background: rgba(8, 9, 14, 0.65);
      padding: 14px;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .dial-top {
      display: flex;
      justify-content: space-between;
      font-size: 0.84rem;
      gap: 8px;
      flex-wrap: wrap;
    }

    .dial-top strong {
      color: #f5c518;
    }

    .dial-row {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      gap: 6px;
    }

    .dial-btn {
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(255, 255, 255, 0.04);
      color: #cbd5e1;
      font-weight: 800;
      padding: 10px 0;
      border-radius: 10px;
      cursor: pointer;
    }

    .dial-btn.active {
      background: #00e5ff;
      color: #08090e;
      border-color: #00e5ff;
    }

    .dial-btn.critic.active {
      background: #ff3366;
      color: #fff;
      border-color: #ff3366;
    }

    .studio-fields {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .field-with-counter {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .field-meta-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.72rem;
      color: #94a3b8;
      font-weight: 700;
    }

    .char-count {
      font-variant-numeric: tabular-nums;
      color: #64748b;
    }

    .studio-input, .studio-textarea {
      width: 100%;
      background: rgba(8, 9, 14, 0.78);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 12px;
      padding: 12px 14px;
      color: #fff;
      font-family: inherit;
      font-size: 0.88rem;
      outline: none;
    }

    .studio-actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }

    .btn-secondary {
      border: 1px solid rgba(255, 255, 255, 0.16);
      background: transparent;
      color: #cbd5e1;
      font-weight: 700;
      padding: 10px 16px;
      border-radius: 12px;
      cursor: pointer;
    }

    .btn-save-gold {
      border: none;
      background: linear-gradient(135deg, #f5c518, #e09f00);
      color: #08090e;
      font-weight: 800;
      padding: 10px 20px;
      border-radius: 12px;
      cursor: pointer;
    }

    .status-banner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-radius: 14px;
      background: rgba(16, 185, 129, 0.16);
      border: 1px solid rgba(16, 185, 129, 0.35);
      color: #34d399;
      font-size: 0.85rem;
      font-weight: 700;
    }

    .status-banner button {
      border: none;
      background: transparent;
      color: #34d399;
      cursor: pointer;
    }

    /* MASONRY / GRID DE RESEÑAS - SIN DESBORDAMIENTO DE TEXTO */
    .reviews-masonry {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 360px), 1fr));
      gap: 18px;
      min-width: 0;
    }

    .review-showcase-card {
      padding: 16px;
      display: flex;
      gap: 16px;
      border-left: 4px solid #00e5ff;
      min-width: 0;
      max-width: 100%;
      overflow: hidden;
    }

    .review-showcase-card.critic-card {
      border-left-color: #ff3366;
    }

    .movie-side {
      width: 88px;
      flex-shrink: 0;
      cursor: pointer;
    }

    .mini-poster {
      width: 100%;
      height: 132px;
      object-fit: cover;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.12);
    }

    .review-content-side {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-width: 0;
      max-width: 100%;
    }

    .review-top-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 8px;
      min-width: 0;
    }

    .movie-badge-link {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      min-width: 0;
      flex: 1;
    }

    .m-type {
      font-size: 0.62rem;
      font-weight: 800;
      color: #94a3b8;
    }

    .m-name {
      font-size: 0.95rem;
      font-weight: 800;
      color: #f5c518;
      overflow-wrap: anywhere;
    }

    .score-medal {
      padding: 5px 10px;
      border-radius: 10px;
      font-size: 0.88rem;
      font-weight: 800;
      background: rgba(0, 229, 255, 0.15);
      color: #38ecff;
      flex-shrink: 0;
    }

    .score-medal.critic {
      background: rgba(255, 51, 102, 0.18);
      color: #ff5c85;
    }

    .r-headline {
      margin: 0;
      font-size: 0.88rem;
      font-weight: 800;
      color: #f8fafc;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .r-text {
      margin: 0;
      font-size: 0.83rem;
      color: #cbd5e1;
      line-height: 1.5;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .review-bottom-row {
      margin-top: auto;
      padding-top: 8px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      min-width: 0;
    }

    .r-user {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
    }

    .u-ava {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      font-weight: 800;
      color: #fff;
      flex-shrink: 0;
    }

    .u-details {
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;
    }

    .u-name {
      font-size: 0.75rem;
      font-weight: 700;
      overflow-wrap: anywhere;
    }

    .r-crud-actions {
      display: flex;
      gap: 6px;
      flex-shrink: 0;
    }

    .act-btn {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.04);
      color: #cbd5e1;
      font-size: 0.7rem;
      font-weight: 700;
      padding: 4px 9px;
      border-radius: 8px;
      cursor: pointer;
    }

    .act-btn.edit:hover { border-color: #f5c518; color: #f5c518; }
    .act-btn.del:hover { border-color: #ef4444; color: #f87171; }

    @media (max-width: 600px) {
      .community-wrapper {
        padding: calc(74px + env(safe-area-inset-top)) 12px calc(110px + env(safe-area-inset-bottom));
        gap: 14px;
      }
      .hub-banner { padding: 18px; }
      .banner-stats { width: 100%; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
      .stat-pill { min-width: 0; padding: 10px 6px; }
      .stat-num { font-size: 1rem; }
      .controls-bar { padding: 12px; }
      .search-input-wrap { min-width: 100%; }
      .search-input-wrap input, .studio-input, .studio-textarea { font-size: 16px; }
      .role-tabs { width: 100%; }
      .r-tab { flex: 1; padding: 8px 6px; }
      .btn-compose-toggle { width: 100%; padding: 13px; }
      .studio-drawer { padding: 16px; }
      .studio-actions { flex-direction: column-reverse; }
      .studio-actions button { width: 100%; padding: 13px; }
      .reviews-masonry {
        grid-template-columns: minmax(0, 1fr);
      }
      .review-showcase-card { padding: 12px; gap: 12px; }
      .movie-side { width: 70px; }
      .mini-poster { height: 104px; }
      .review-bottom-row { flex-wrap: wrap; }
      .dial-row {
        grid-template-columns: repeat(5, 1fr);
      }
    }
  `]
})
export class CommunityPage implements OnInit {
  readonly MAX_HEADLINE = 90;
  readonly MAX_REVIEW_TEXT = 500;

  comments: CommentItem[] = [];
  movies: MovieItem[] = [];
  currentUser: UserProfile | null = null;

  searchQuery = '';
  roleFilter: 'all' | 'critic' | 'normal' = 'all';
  showComposer = false;
  editingComment: CommentItem | null = null;
  selectedMovieTmdbId = 693134;
  statusMsg = '';

  form = {
    score: 9,
    headline: '',
    text: ''
  };

  constructor(
    public cotufera: CotuferaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cotufera.currentUser$.subscribe(u => (this.currentUser = u));
    this.loadData();
  }

  ionViewWillEnter(): void {
    this.loadData();
  }

  loadData(): void {
    this.cotufera.getAllComments().subscribe(list => (this.comments = list));
    this.cotufera.getMovies({}).subscribe(mList => {
      this.movies = mList;
      if (mList.length > 0 && !this.selectedMovieTmdbId) {
        this.selectedMovieTmdbId = mList[0].tmdbId;
      }
    });
  }

  get globalCriticAvg(): string {
    const critics = this.comments.filter(c => c.userId?.role === 'critic');
    if (!critics.length) return '0.0';
    const sum = critics.reduce((a, b) => a + Number(b.score || 0), 0);
    return (sum / critics.length).toFixed(1);
  }

  get globalNormalAvg(): string {
    const normals = this.comments.filter(c => c.userId?.role !== 'critic');
    if (!normals.length) return '0.0';
    const sum = normals.reduce((a, b) => a + Number(b.score || 0), 0);
    return (sum / normals.length).toFixed(1);
  }

  get filteredComments(): CommentItem[] {
    return this.comments.filter(c => {
      if (this.roleFilter !== 'all' && (c.userId?.role || 'normal') !== this.roleFilter) {
        return false;
      }
      if (this.searchQuery.trim()) {
        const q = this.searchQuery.toLowerCase();
        const inMovie = (c.movieId?.title || '').toLowerCase().includes(q);
        const inUser = (c.userId?.name || '').toLowerCase().includes(q);
        const inText = (c.text || '').toLowerCase().includes(q) || (c.headline || '').toLowerCase().includes(q);
        if (!inMovie && !inUser && !inText) return false;
      }
      return true;
    });
  }

  toggleComposer(): void {
    if (!this.currentUser) {
      this.router.navigate(['/perfil']);
      return;
    }
    this.editingComment = null;
    this.form = { score: 9, headline: '', text: '' };
    this.showComposer = !this.showComposer;
  }

  isMine(item: CommentItem): boolean {
    const authorId = item.userId?._id || item.userId;
    return !!this.currentUser && String(authorId) === String(this.currentUser._id);
  }

  startEdit(item: CommentItem): void {
    this.editingComment = item;
    this.form = {
      score: item.score,
      headline: (item.headline || '').slice(0, this.MAX_HEADLINE),
      text: (item.text || '').slice(0, this.MAX_REVIEW_TEXT)
    };
    this.showComposer = true;
  }

  cancelStudio(): void {
    this.showComposer = false;
    this.editingComment = null;
  }

  saveReview(): void {
    const cleanText = this.form.text.trim().slice(0, this.MAX_REVIEW_TEXT);
    const cleanHeadline = this.form.headline.trim().slice(0, this.MAX_HEADLINE);
    if (!cleanText) return;

    if (this.editingComment) {
      this.cotufera
        .updateComment(this.editingComment._id, {
          score: this.form.score,
          headline: cleanHeadline,
          text: cleanText
        })
        .subscribe(() => {
          this.statusMsg = 'Reseña actualizada y promedios de la película recalculados.';
          this.showComposer = false;
          this.editingComment = null;
          this.loadData();
        });
    } else {
      const picked = this.movies.find(m => m.tmdbId === this.selectedMovieTmdbId);
      this.cotufera
        .createComment(this.selectedMovieTmdbId, {
          score: this.form.score,
          headline: cleanHeadline,
          text: cleanText,
          mediaType: picked?.mediaType || 'movie'
        })
        .subscribe(() => {
          this.statusMsg = 'Nueva reseña publicada con éxito.';
          this.showComposer = false;
          this.loadData();
        });
    }
  }

  deleteItem(item: CommentItem): void {
    this.cotufera.deleteComment(item._id).subscribe(() => {
      this.statusMsg = 'Reseña eliminada y estadísticas recalculadas.';
      this.comments = this.comments.filter(c => c._id !== item._id);
    });
  }

  openMovie(tmdbId?: number): void {
    if (!tmdbId) return;
    this.router.navigate(['/pelicula', tmdbId]);
  }
}
