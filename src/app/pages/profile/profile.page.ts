import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { CotuferaService } from '../../services/cotufera.service';
import { CommentItem, UserProfile, UserRole } from '../../models/cotufera.models';

type AuthTab = 'login' | 'register';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonIcon],
  template: `
    <ion-content [fullscreen]="true">
      <div class="profile-wrapper">

        <div class="toast" *ngIf="feedback" [class.error]="feedbackError">
          <span>{{ feedback }}</span>
          <button type="button" (click)="feedback = ''">✕</button>
        </div>

        <!-- ===================== INVITADO: LOGIN / REGISTRO ===================== -->
        <ng-container *ngIf="!user">
          <section class="welcome-card glass-panel">
            <div class="welcome-badge">
              <ion-icon name="person-circle-outline"></ion-icon>
            </div>
            <h1 class="welcome-title font-display">Tu cuenta en Cotufera</h1>
            <p class="welcome-sub">
              Puedes explorar películas y series sin cuenta. Inicia sesión o regístrate para publicar reseñas y puntajes.
            </p>

            <div class="auth-switch">
              <button type="button" [class.active]="authTab === 'login'" (click)="setTab('login')">Iniciar sesión</button>
              <button type="button" [class.active]="authTab === 'register'" (click)="setTab('register')">Registrarme</button>
            </div>

            <!-- LOGIN -->
            <div class="auth-form" *ngIf="authTab === 'login'">
              <div class="field">
                <label>Correo electrónico</label>
                <input type="email" inputmode="email" autocomplete="email" autocapitalize="none"
                  [attr.maxlength]="MAX_EMAIL"
                  [(ngModel)]="loginForm.email" placeholder="tucorreo@ejemplo.com" />
              </div>
              <div class="field">
                <label>Contraseña</label>
                <input type="password" autocomplete="current-password"
                  [attr.maxlength]="64"
                  [(ngModel)]="loginForm.password" placeholder="••••••••"
                  (keyup.enter)="submitLogin()" />
              </div>
              <button type="button" class="btn-gold" [disabled]="busy" (click)="submitLogin()">
                {{ busy ? 'Entrando...' : 'Entrar a Cotufera' }}
              </button>
              <p class="switch-hint">¿No tienes cuenta? <a (click)="setTab('register')">Regístrate</a></p>
            </div>

            <!-- REGISTRO -->
            <div class="auth-form" *ngIf="authTab === 'register'">
              <span class="block-label">¿Cómo vas a calificar?</span>
              <div class="role-cards">
                <div class="role-card normal" [class.selected]="registerForm.role === 'normal'" (click)="selectRole(registerForm, 'normal')">
                  <span class="role-ico"><ion-icon name="people"></ion-icon></span>
                  <div>
                    <h4>Usuario</h4>
                    <p>Rating de público</p>
                  </div>
                </div>
                <div class="role-card critic" [class.selected]="registerForm.role === 'critic'" (click)="selectRole(registerForm, 'critic')">
                  <span class="role-ico"><ion-icon name="ribbon"></ion-icon></span>
                  <div>
                    <h4>Crítico</h4>
                    <p>Rating de críticos</p>
                  </div>
                </div>
              </div>

              <span class="block-label">Elige tu insignia</span>
              <div class="avatar-row">
                <button type="button" *ngFor="let p of presetsFor(registerForm.role)"
                  class="avatar-choice" [class.selected]="registerForm.avatar === p.id"
                  (click)="registerForm.avatar = p.id">
                  <span class="ava-circle" [style.background]="p.gradient">{{ p.emoji }}</span>
                </button>
              </div>

              <div class="field">
                <div class="field-top">
                  <label>Nombre o seudónimo</label>
                  <span class="char-counter">{{ registerForm.name.length }}/{{ MAX_NAME }}</span>
                </div>
                <input type="text" autocomplete="name" [attr.maxlength]="MAX_NAME"
                  [(ngModel)]="registerForm.name" placeholder="Ej. Sofía Alarcón" />
              </div>
              <div class="field">
                <div class="field-top">
                  <label>Correo electrónico</label>
                  <span class="char-counter">{{ registerForm.email.length }}/{{ MAX_EMAIL }}</span>
                </div>
                <input type="email" inputmode="email" autocomplete="email" autocapitalize="none"
                  [attr.maxlength]="MAX_EMAIL"
                  [(ngModel)]="registerForm.email" placeholder="tucorreo@ejemplo.com" />
              </div>
              <div class="field">
                <label>Contraseña (mínimo 6 caracteres)</label>
                <input type="password" autocomplete="new-password" [attr.maxlength]="64"
                  [(ngModel)]="registerForm.password" placeholder="••••••••" />
              </div>
              <div class="field">
                <div class="field-top">
                  <label>Biografía (opcional)</label>
                  <span class="char-counter">{{ registerForm.bio.length }}/{{ MAX_BIO }}</span>
                </div>
                <textarea rows="2" [attr.maxlength]="MAX_BIO"
                  [(ngModel)]="registerForm.bio" placeholder="¿Qué buscas en una buena película?"></textarea>
              </div>

              <button type="button" class="btn-gold" [disabled]="busy" (click)="submitRegister()">
                {{ busy ? 'Creando cuenta...' : 'Crear mi cuenta' }}
              </button>
              <p class="switch-hint">¿Ya tienes cuenta? <a (click)="setTab('login')">Inicia sesión</a></p>
            </div>
          </section>
        </ng-container>

        <!-- ===================== USUARIO CON SESIÓN ===================== -->
        <ng-container *ngIf="user">
          <section class="me-card glass-panel" [class.critic]="user.role === 'critic'">
            <div class="me-avatar" [style.background]="cotufera.getAvatarPreset(user.avatar, user.role).gradient">
              {{ cotufera.getUserInitials(user.name, user.role) }}
            </div>
            <span [class]="user.role === 'critic' ? 'badge-critic' : 'badge-audience'">
              <ion-icon [name]="user.role === 'critic' ? 'ribbon' : 'people'"></ion-icon>
              {{ user.role === 'critic' ? 'Crítico' : 'Usuario' }}
            </span>
            <h1 class="me-name font-display">{{ user.name }}</h1>
            <span class="me-email">{{ user.email }}</span>
            <p class="me-bio" *ngIf="user.bio">{{ user.bio }}</p>
            <div class="me-genres" *ngIf="user.favoriteGenres?.length">
              <span class="g-pill" *ngFor="let g of user.favoriteGenres">{{ g }}</span>
            </div>

            <div class="me-stats">
              <div><strong>{{ user.stats?.reviewsCount ?? myReviews.length }}</strong><span>Reseñas</span></div>
              <div><strong>★ {{ user.stats?.averageScoreGiven || '—' }}</strong><span>Promedio dado</span></div>
            </div>

            <div class="me-actions">
              <button type="button" class="btn-ghost" (click)="openEdit()">
                <ion-icon name="create-outline"></ion-icon> Editar perfil
              </button>
              <button type="button" class="btn-ghost" (click)="logout()">
                <ion-icon name="log-out-outline"></ion-icon> Cerrar sesión
              </button>
            </div>
          </section>

          <!-- EDITAR PERFIL -->
          <section class="edit-card glass-panel" *ngIf="editing">
            <div class="edit-head">
              <h2 class="font-display">Editar mi perfil</h2>
              <button type="button" class="x-btn" (click)="editing = false">✕</button>
            </div>

            <span class="block-label">Tipo de cuenta</span>
            <div class="role-cards">
              <div class="role-card normal" [class.selected]="editForm.role === 'normal'" (click)="selectRole(editForm, 'normal')">
                <span class="role-ico"><ion-icon name="people"></ion-icon></span>
                <div><h4>Usuario</h4><p>Rating de público</p></div>
              </div>
              <div class="role-card critic" [class.selected]="editForm.role === 'critic'" (click)="selectRole(editForm, 'critic')">
                <span class="role-ico"><ion-icon name="ribbon"></ion-icon></span>
                <div><h4>Crítico</h4><p>Rating de críticos</p></div>
              </div>
            </div>

            <span class="block-label">Insignia</span>
            <div class="avatar-row">
              <button type="button" *ngFor="let p of presetsFor(editForm.role)"
                class="avatar-choice" [class.selected]="editForm.avatar === p.id"
                (click)="editForm.avatar = p.id">
                <span class="ava-circle" [style.background]="p.gradient">{{ p.emoji }}</span>
              </button>
            </div>

            <div class="field">
              <div class="field-top">
                <label>Nombre</label>
                <span class="char-counter">{{ editForm.name.length }}/{{ MAX_NAME }}</span>
              </div>
              <input type="text" [attr.maxlength]="MAX_NAME" [(ngModel)]="editForm.name" />
            </div>
            <div class="field">
              <div class="field-top">
                <label>Correo electrónico</label>
                <span class="char-counter">{{ editForm.email.length }}/{{ MAX_EMAIL }}</span>
              </div>
              <input type="email" inputmode="email" autocapitalize="none" [attr.maxlength]="MAX_EMAIL" [(ngModel)]="editForm.email" />
            </div>
            <div class="field">
              <label>Nueva contraseña (opcional)</label>
              <input type="password" autocomplete="new-password" [attr.maxlength]="64" [(ngModel)]="editForm.password" placeholder="Déjalo vacío para mantener la actual" />
            </div>
            <div class="field">
              <div class="field-top">
                <label>{{ editForm.role === 'critic' ? 'Medio / Especialidad' : 'Estilo de espectador' }}</label>
                <span class="char-counter">{{ editForm.specialty.length }}/{{ MAX_SPECIALTY }}</span>
              </div>
              <input type="text" [attr.maxlength]="MAX_SPECIALTY" [(ngModel)]="editForm.specialty" />
            </div>
            <div class="field">
              <div class="field-top">
                <label>Biografía</label>
                <span class="char-counter">{{ editForm.bio.length }}/{{ MAX_BIO }}</span>
              </div>
              <textarea rows="3" [attr.maxlength]="MAX_BIO" [(ngModel)]="editForm.bio"></textarea>
            </div>

            <span class="block-label">Géneros favoritos</span>
            <div class="chips">
              <button type="button" *ngFor="let g of allGenres" class="chip"
                [class.active]="editForm.favoriteGenres.includes(g)" (click)="toggleGenre(g)">
                {{ g }}
              </button>
            </div>

            <div class="edit-footer">
              <button type="button" class="btn-ghost" (click)="editing = false">Cancelar</button>
              <button type="button" class="btn-gold" [disabled]="busy" (click)="saveProfile()">
                {{ busy ? 'Guardando...' : 'Guardar cambios' }}
              </button>
            </div>
          </section>

          <!-- MIS RESEÑAS -->
          <section class="my-reviews">
            <h2 class="section-title font-display">
              <ion-icon name="chatbubbles-outline"></ion-icon> Mis reseñas ({{ myReviews.length }})
            </h2>
            <div class="empty glass-panel" *ngIf="myReviews.length === 0">
              Aún no has publicado reseñas. Entra a una película o serie y cuéntanos qué te pareció.
            </div>
            <article class="review-row glass-panel" *ngFor="let r of myReviews" (click)="openMovie(r)">
              <img *ngIf="r.movieId?.coverUrl" [src]="r.movieId.coverUrl" [alt]="r.movieId.title" />
              <div class="review-info">
                <strong>{{ r.movieId?.title || 'Título' }}</strong>
                <span class="headline" *ngIf="r.headline">“{{ r.headline }}”</span>
                <span class="snippet">{{ r.text }}</span>
              </div>
              <span class="score" [class.critic]="user.role === 'critic'">★ {{ r.score }}</span>
            </article>
          </section>

          <!-- ZONA DE PELIGRO: ELIMINAR CUENTA -->
          <section class="danger-zone glass-panel">
            <h3>Zona de peligro</h3>
            <p>Si eliminas tu cuenta también se borrarán tus reseñas y los puntajes de las películas se recalcularán. Esta acción no se puede deshacer.</p>
            <button type="button" class="btn-danger" *ngIf="!confirmDelete" (click)="confirmDelete = true">
              <ion-icon name="trash-outline"></ion-icon> Eliminar mi cuenta
            </button>
            <div class="confirm-box" *ngIf="confirmDelete">
              <strong>¿Seguro que quieres eliminar tu cuenta?</strong>
              <div class="confirm-btns">
                <button type="button" class="btn-ghost" (click)="confirmDelete = false">No, mantenerla</button>
                <button type="button" class="btn-danger solid" [disabled]="busy" (click)="deleteAccount()">Sí, eliminar</button>
              </div>
            </div>
          </section>
        </ng-container>

      </div>
    </ion-content>
  `,
  styles: [`
    .profile-wrapper {
      max-width: 640px;
      margin: 0 auto;
      padding: calc(76px + env(safe-area-inset-top)) 14px calc(110px + env(safe-area-inset-bottom));
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .toast {
      display: flex; align-items: center; justify-content: space-between; gap: 10px;
      padding: 12px 14px; border-radius: 14px; font-size: 0.85rem; font-weight: 700;
      background: rgba(16,185,129,.16); border: 1px solid rgba(16,185,129,.35); color: #34d399;
      overflow-wrap: anywhere; word-break: break-word;
    }
    .toast.error { background: rgba(239,68,68,.16); border-color: rgba(239,68,68,.35); color: #f87171; }
    .toast button { border: none; background: transparent; color: inherit; font-size: 1rem; flex-shrink: 0; }

    .welcome-card { padding: 24px 18px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 10px; border-color: rgba(245,197,24,.3); }
    .welcome-badge {
      width: 56px; height: 56px; border-radius: 18px;
      background: rgba(245,197,24,.14); border: 1px solid rgba(245,197,24,.35);
      color: #f5c518; display: flex; align-items: center; justify-content: center; font-size: 1.9rem;
    }
    .welcome-title { margin: 0; font-size: 1.5rem; font-weight: 800; }
    .welcome-sub { margin: 0; font-size: 0.86rem; color: #94a3b8; line-height: 1.5; }

    .auth-switch { display: flex; width: 100%; background: rgba(8,9,14,.7); border-radius: 999px; padding: 4px; margin-top: 6px; }
    .auth-switch button { flex: 1; border: none; background: transparent; color: #94a3b8; font-weight: 800; font-size: .85rem; padding: 11px 8px; border-radius: 999px; }
    .auth-switch button.active { background: linear-gradient(135deg,#f5c518,#e09f00); color: #08090e; }

    .auth-form { width: 100%; display: flex; flex-direction: column; gap: 12px; text-align: left; margin-top: 6px; }

    .field { background: rgba(8,9,14,.72); border: 1px solid rgba(255,255,255,.1); border-radius: 14px; padding: 9px 14px; display: flex; flex-direction: column; gap: 3px; min-width: 0; }
    .field:focus-within { border-color: #f5c518; }
    .field-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
    .field label { font-size: .68rem; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: .04em; }
    .char-counter { font-size: .68rem; font-weight: 700; color: #64748b; }
    .field input, .field textarea {
      border: none; background: transparent; color: #fff; font-family: inherit;
      font-size: 16px; /* evita el zoom automatico en iOS */
      outline: none; width: 100%; resize: none; padding: 2px 0;
      overflow-wrap: anywhere; word-break: break-word;
    }

    .block-label { font-size: .72rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: .05em; }

    .role-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .role-card { position: relative; display: flex; align-items: center; gap: 10px; padding: 12px; border-radius: 16px; background: rgba(8,9,14,.7); border: 2px solid rgba(255,255,255,.08); min-width: 0; }
    .role-card h4 { margin: 0; font-size: .9rem; font-weight: 800; }
    .role-card p { margin: 0; font-size: .7rem; color: #94a3b8; }
    .role-ico {
      width: 38px; height: 38px; border-radius: 12px; background: rgba(255,255,255,.06);
      display: flex; align-items: center; justify-content: center; font-size: 1.25rem; flex-shrink: 0; color: #e2e8f0;
    }
    .role-card.normal.selected { border-color: #00e5ff; background: rgba(0,229,255,.1); }
    .role-card.normal.selected .role-ico { color: #38ecff; background: rgba(0,229,255,.18); }
    .role-card.critic.selected { border-color: #ff3366; background: rgba(255,51,102,.1); }
    .role-card.critic.selected .role-ico { color: #ff5c85; background: rgba(255,51,102,.18); }

    .avatar-row { display: flex; gap: 10px; flex-wrap: wrap; }
    .avatar-choice { border: 2px solid transparent; background: transparent; padding: 3px; border-radius: 50%; }
    .avatar-choice.selected { border-color: #f5c518; }
    .ava-circle { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 800; color: #08090e; letter-spacing: 0.03em; }

    .btn-gold { border: none; background: linear-gradient(135deg,#f5c518,#e09f00); color: #08090e; font-weight: 800; font-size: .95rem; padding: 14px 20px; border-radius: 14px; box-shadow: 0 8px 20px rgba(245,197,24,.25); }
    .btn-gold:disabled { opacity: .6; }
    .btn-ghost { border: 1px solid rgba(255,255,255,.16); background: rgba(255,255,255,.06); color: #f8fafc; font-weight: 700; font-size: .85rem; padding: 12px 14px; border-radius: 14px; display: inline-flex; align-items: center; justify-content: center; gap: 6px; }
    .switch-hint { margin: 0; text-align: center; font-size: .82rem; color: #94a3b8; }
    .switch-hint a { color: #f5c518; font-weight: 800; }

    /* PERFIL */
    .me-card { padding: 24px 18px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px; border-top: 3px solid #00e5ff; overflow: hidden; }
    .me-card.critic { border-top-color: #ff3366; }
    .me-avatar { width: 84px; height: 84px; border-radius: 26px; display: flex; align-items: center; justify-content: center; font-size: 1.75rem; font-weight: 800; color: #08090e; box-shadow: 0 12px 28px rgba(0,0,0,.45); }
    .me-name { margin: 4px 0 0; font-size: 1.5rem; font-weight: 800; max-width: 100%; overflow-wrap: anywhere; word-break: break-word; }
    .me-email { font-size: .8rem; color: #94a3b8; max-width: 100%; overflow-wrap: anywhere; word-break: break-word; }
    .me-bio { margin: 4px 0 0; font-size: .88rem; color: #cbd5e1; line-height: 1.5; max-width: 100%; overflow-wrap: anywhere; word-break: break-word; }
    .me-genres { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; }
    .g-pill { padding: 3px 10px; border-radius: 999px; font-size: .7rem; font-weight: 700; background: rgba(255,255,255,.07); color: #e2e8f0; }
    .me-stats { display: flex; width: 100%; gap: 10px; margin-top: 8px; }
    .me-stats div { flex: 1; background: rgba(8,9,14,.65); border-radius: 14px; padding: 10px; display: flex; flex-direction: column; }
    .me-stats strong { font-size: 1.05rem; font-weight: 800; }
    .me-stats span { font-size: .68rem; color: #94a3b8; }
    .me-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%; margin-top: 6px; }

    .edit-card { padding: 20px 16px; display: flex; flex-direction: column; gap: 12px; border-color: rgba(245,197,24,.4); }
    .edit-head { display: flex; align-items: center; justify-content: space-between; }
    .edit-head h2 { margin: 0; font-size: 1.2rem; }
    .x-btn { border: none; background: rgba(255,255,255,.08); color: #cbd5e1; width: 34px; height: 34px; border-radius: 50%; }
    .chips { display: flex; flex-wrap: wrap; gap: 8px; }
    .chip { border: 1px solid rgba(255,255,255,.12); background: rgba(255,255,255,.04); color: #cbd5e1; font-size: .78rem; font-weight: 700; padding: 8px 13px; border-radius: 999px; }
    .chip.active { background: rgba(245,197,24,.22); border-color: #f5c518; color: #f5c518; }
    .edit-footer { display: grid; grid-template-columns: 1fr 1.4fr; gap: 10px; margin-top: 4px; }

    .section-title { margin: 6px 0 0; font-size: 1.15rem; display: flex; align-items: center; gap: 8px; }
    .empty { padding: 20px; text-align: center; font-size: .85rem; color: #94a3b8; }
    .my-reviews { display: flex; flex-direction: column; gap: 10px; }
    .review-row { display: flex; align-items: center; gap: 12px; padding: 10px; overflow: hidden; }
    .review-row img { width: 52px; height: 76px; object-fit: cover; border-radius: 10px; flex-shrink: 0; }
    .review-info { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
    .review-info strong { font-size: .92rem; color: #f5c518; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .headline { font-size: .78rem; font-weight: 700; overflow-wrap: anywhere; word-break: break-word; }
    .snippet { font-size: .76rem; color: #94a3b8; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; overflow-wrap: anywhere; word-break: break-word; }
    .score { padding: 6px 10px; border-radius: 10px; font-weight: 800; background: rgba(0,229,255,.15); color: #38ecff; font-size: .85rem; flex-shrink: 0; }
    .score.critic { background: rgba(255,51,102,.18); color: #ff5c85; }

    .danger-zone { padding: 18px; border-color: rgba(239,68,68,.3); display: flex; flex-direction: column; gap: 10px; }
    .danger-zone h3 { margin: 0; color: #f87171; font-size: 1rem; }
    .danger-zone p { margin: 0; font-size: .8rem; color: #94a3b8; line-height: 1.5; }
    .btn-danger { border: 1px solid rgba(239,68,68,.5); background: rgba(239,68,68,.1); color: #f87171; font-weight: 800; padding: 12px 14px; border-radius: 14px; font-size: .88rem; display: inline-flex; align-items: center; justify-content: center; gap: 6px; }
    .btn-danger.solid { background: #ef4444; color: #fff; border-color: #ef4444; }
    .confirm-box { display: flex; flex-direction: column; gap: 10px; font-size: .88rem; }
    .confirm-btns { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  `]
})
export class ProfilePage implements OnInit {
  readonly MAX_NAME = 45;
  readonly MAX_EMAIL = 80;
  readonly MAX_SPECIALTY = 60;
  readonly MAX_BIO = 220;

  user: UserProfile | null = null;
  myReviews: CommentItem[] = [];

  authTab: AuthTab = 'login';
  busy = false;
  editing = false;
  confirmDelete = false;
  feedback = '';
  feedbackError = false;

  loginForm = { email: '', password: '' };

  registerForm = this.blankForm();
  editForm = this.blankForm();

  allGenres = ['Acción', 'Drama', 'Misterio', 'Ciencia ficción', 'Comedia', 'Thriller', 'Crimen', 'Animación', 'Terror', 'Aventura', 'Fantasía'];

  constructor(
    public cotufera: CotuferaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cotufera.currentUser$.subscribe(u => {
      const changedUser = (u?._id || null) !== (this.user?._id || null);
      this.user = u;
      if (u && changedUser) this.loadProfileData();
      if (!u) {
        this.myReviews = [];
        this.editing = false;
        this.confirmDelete = false;
      }
    });
  }

  ionViewWillEnter(): void {
    if (this.user) this.loadProfileData();
  }

  private blankForm() {
    return {
      name: '',
      email: '',
      password: '',
      role: 'normal' as UserRole,
      avatar: 'popcorn-gold',
      specialty: '',
      bio: '',
      favoriteGenres: [] as string[]
    };
  }

  presetsFor(role: UserRole) {
    const prefix = role === 'critic' ? 'critic' : 'popcorn';
    return this.cotufera.avatarPresets.filter(p => p.id.startsWith(prefix));
  }

  selectRole(form: { role: UserRole; avatar: string }, role: UserRole): void {
    form.role = role;
    const valid = this.presetsFor(role).some(p => p.id === form.avatar);
    if (!valid) form.avatar = this.presetsFor(role)[0].id;
  }

  setTab(tab: AuthTab): void {
    this.authTab = tab;
    this.feedback = '';
  }

  private notify(msg: string, error = false): void {
    this.feedback = msg;
    this.feedbackError = error;
  }

  private loadProfileData(): void {
    if (!this.user) return;
    this.cotufera.getMyProfile().subscribe({ error: () => {} });
    this.cotufera.getUserComments(this.user._id).subscribe({
      next: list => (this.myReviews = list)
    });
  }

  // ---------- Autenticación ----------
  submitLogin(): void {
    if (!this.loginForm.email.trim() || !this.loginForm.password) {
      this.notify('Ingresa tu correo y contraseña.', true);
      return;
    }
    this.busy = true;
    this.cotufera.login(this.loginForm.email, this.loginForm.password).subscribe({
      next: res => {
        this.busy = false;
        this.loginForm = { email: '', password: '' };
        this.notify(`Bienvenido, ${res.user.name}.`);
      },
      error: err => {
        this.busy = false;
        this.notify(err.status === 0 ? 'No se pudo conectar con el servidor.' : (err.error?.message || 'Credenciales inválidas.'), true);
      }
    });
  }

  submitRegister(): void {
    const f = this.registerForm;
    if (!f.name.trim() || !f.email.trim() || !f.password) {
      this.notify('Nombre, correo y contraseña son obligatorios.', true);
      return;
    }
    if (f.password.length < 6) {
      this.notify('La contraseña debe tener al menos 6 caracteres.', true);
      return;
    }
    this.busy = true;
    this.cotufera.register({
      name: f.name.trim().slice(0, this.MAX_NAME),
      email: f.email.trim().slice(0, this.MAX_EMAIL),
      password: f.password,
      role: f.role,
      avatar: f.avatar,
      bio: f.bio.trim().slice(0, this.MAX_BIO)
    }).subscribe({
      next: res => {
        this.busy = false;
        this.registerForm = this.blankForm();
        this.notify(`Cuenta creada. Bienvenido a Cotufera, ${res.user.name}.`);
      },
      error: err => {
        this.busy = false;
        this.notify(err.status === 0 ? 'No se pudo conectar con el servidor.' : (err.error?.message || 'No se pudo crear la cuenta.'), true);
      }
    });
  }

  logout(): void {
    this.cotufera.clearSession();
    this.authTab = 'login';
    this.notify('Sesión cerrada.');
  }

  // ---------- Editar perfil ----------
  openEdit(): void {
    if (!this.user) return;
    this.editForm = {
      name: this.user.name,
      email: this.user.email,
      password: '',
      role: this.user.role,
      avatar: this.user.avatar || this.presetsFor(this.user.role)[0].id,
      specialty: this.user.specialty || '',
      bio: this.user.bio || '',
      favoriteGenres: [...(this.user.favoriteGenres || [])]
    };
    this.editing = true;
  }

  toggleGenre(g: string): void {
    const i = this.editForm.favoriteGenres.indexOf(g);
    if (i >= 0) this.editForm.favoriteGenres.splice(i, 1);
    else this.editForm.favoriteGenres.push(g);
  }

  saveProfile(): void {
    if (!this.user) return;
    const f = this.editForm;
    if (!f.name.trim() || !f.email.trim()) {
      this.notify('El nombre y el correo son obligatorios.', true);
      return;
    }
    if (f.password && f.password.length < 6) {
      this.notify('La nueva contraseña debe tener al menos 6 caracteres.', true);
      return;
    }
    const payload: any = {
      ...f,
      name: f.name.trim().slice(0, this.MAX_NAME),
      email: f.email.trim().slice(0, this.MAX_EMAIL),
      specialty: f.specialty.trim().slice(0, this.MAX_SPECIALTY),
      bio: f.bio.trim().slice(0, this.MAX_BIO)
    };
    if (!payload.password) delete payload.password;

    this.busy = true;
    this.cotufera.updateUser(this.user._id, payload).subscribe({
      next: () => {
        this.busy = false;
        this.editing = false;
        this.notify('Perfil actualizado correctamente.');
        this.loadProfileData();
      },
      error: err => {
        this.busy = false;
        this.notify(err.error?.message || 'No se pudo actualizar el perfil.', true);
      }
    });
  }

  // ---------- Eliminar cuenta ----------
  deleteAccount(): void {
    if (!this.user) return;
    this.busy = true;
    this.cotufera.deleteUser(this.user._id).subscribe({
      next: () => {
        this.busy = false;
        this.confirmDelete = false;
        this.notify('Tu cuenta fue eliminada.');
      },
      error: err => {
        this.busy = false;
        this.notify(err.error?.message || 'No se pudo eliminar la cuenta.', true);
      }
    });
  }

  openMovie(review: CommentItem): void {
    const id = review.movieId?.tmdbId || review.tmdbId;
    if (id) {
      this.router.navigate(['/pelicula', id], { queryParams: { type: review.movieId?.mediaType || 'movie' } });
    }
  }
}
