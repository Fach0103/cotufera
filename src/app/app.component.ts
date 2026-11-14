import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { IonApp, IonRouterOutlet, IonIcon } from '@ionic/angular/standalone';
import { CotuferaService } from './services/cotufera.service';
import { UserProfile } from './models/cotufera.models';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, IonApp, IonRouterOutlet, IonIcon, RouterLink, RouterLinkActive],
  template: `
    <ion-app>
      <header class="top-cinema-bar">
        <div class="top-bar-inner">
          <a routerLink="/explorar" class="brand-logo">
            <span class="logo-mark">
              <ion-icon name="film-outline"></ion-icon>
            </span>
            <div class="logo-text">
              <span class="brand-name font-display">COTUFERA</span>
              <span class="brand-sub">CINE · SERIES · CRÍTICA</span>
            </div>
          </a>

          <div class="top-right-actions">
            <button
              type="button"
              class="server-pill-btn"
              (click)="toggleServerModal()"
              title="Conexión con el servidor">
              <ion-icon name="wifi-outline"></ion-icon>
            </button>

            <a routerLink="/perfil" class="active-user-pill" *ngIf="currentUser; else guestPill">
              <span
                class="avatar-dot"
                [style.background]="cotufera.getAvatarPreset(currentUser.avatar, currentUser.role).gradient">
                {{ cotufera.getUserInitials(currentUser.name, currentUser.role) }}
              </span>
              <div class="user-meta">
                <span class="user-name">{{ currentUser.name }}</span>
                <span class="user-role-tag" [class.critic]="currentUser.role === 'critic'">
                  {{ currentUser.role === 'critic' ? 'Crítico' : 'Audiencia' }}
                </span>
              </div>
            </a>

            <ng-template #guestPill>
              <a routerLink="/perfil" class="login-pill-btn">
                <ion-icon name="log-in-outline"></ion-icon>
                <span>Iniciar sesión</span>
              </a>
            </ng-template>
          </div>
        </div>

        <div class="server-config-bar glass-panel" *ngIf="showServerModal">
          <div class="srv-head">
            <span>Servidor Backend (puerto 3000)</span>
            <button type="button" class="srv-close" (click)="showServerModal = false">✕</button>
          </div>
          <div class="srv-row">
            <input
              type="text"
              [(ngModel)]="hostInput"
              maxlength="45"
              placeholder="Ej. 192.168.10.5"
              class="srv-input" />
            <button type="button" class="srv-save" (click)="saveServerHost()">Guardar IP</button>
          </div>
          <div class="srv-actions">
            <button type="button" class="srv-scan" [disabled]="scanningServer" (click)="scanServer()">
              <ion-icon name="sync-outline"></ion-icon>
              <span>{{ scanningServer ? 'Buscando laptop en el Wi-Fi...' : 'Buscar servidor automáticamente' }}</span>
            </button>
            <span class="srv-msg" *ngIf="serverStatusMsg">{{ serverStatusMsg }}</span>
          </div>
        </div>
      </header>

      <ion-router-outlet></ion-router-outlet>

      <nav class="floating-glass-dock">
        <a
          routerLink="/explorar"
          routerLinkActive="active-tab"
          [class.active-tab]="currentUrl.startsWith('/pelicula')"
          class="dock-item">
          <ion-icon name="film-outline" class="dock-icon"></ion-icon>
          <span class="dock-label">Catálogo</span>
        </a>
        <a
          routerLink="/comunidad"
          routerLinkActive="active-tab"
          class="dock-item">
          <ion-icon name="chatbubbles-outline" class="dock-icon"></ion-icon>
          <span class="dock-label">Reseñas</span>
        </a>
        <a
          routerLink="/perfil"
          routerLinkActive="active-tab"
          class="dock-item">
          <ion-icon [name]="currentUser ? 'person-outline' : 'log-in-outline'" class="dock-icon"></ion-icon>
          <span class="dock-label">{{ currentUser ? 'Perfil' : 'Entrar' }}</span>
        </a>
      </nav>
    </ion-app>
  `,
  styles: [`
    .top-cinema-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: env(safe-area-inset-top) 14px 0;
      background: rgba(8, 9, 14, 0.9);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .top-bar-inner {
      height: 60px;
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }

    .top-right-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
    }

    .server-pill-btn {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.14);
      background: rgba(255, 255, 255, 0.06);
      color: #cbd5e1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.05rem;
      cursor: pointer;
      flex-shrink: 0;
    }

    .server-config-bar {
      max-width: 480px;
      margin: 0 auto 10px;
      padding: 12px 14px;
      border-radius: 16px;
      background: rgba(13, 16, 26, 0.98);
      border: 1px solid rgba(245, 197, 24, 0.35);
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .srv-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.74rem;
      font-weight: 800;
      color: #f5c518;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .srv-close {
      border: none;
      background: transparent;
      color: #94a3b8;
      font-size: 0.95rem;
      cursor: pointer;
    }

    .srv-row {
      display: flex;
      gap: 8px;
    }

    .srv-input {
      flex: 1;
      min-width: 0;
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.14);
      background: rgba(8, 9, 14, 0.85);
      color: #fff;
      padding: 8px 10px;
      font-size: 16px;
      outline: none;
    }

    .srv-save {
      border: none;
      border-radius: 10px;
      background: linear-gradient(135deg, #f5c518, #e09f00);
      color: #08090e;
      font-weight: 800;
      font-size: 0.78rem;
      padding: 8px 12px;
      cursor: pointer;
      white-space: nowrap;
    }

    .srv-actions {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .srv-scan {
      border: 1px solid rgba(0, 229, 255, 0.35);
      background: rgba(0, 229, 255, 0.1);
      color: #38ecff;
      border-radius: 10px;
      padding: 8px 12px;
      font-size: 0.78rem;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      cursor: pointer;
    }

    .srv-msg {
      font-size: 0.74rem;
      color: #cbd5e1;
      text-align: center;
    }

    .brand-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: #fff;
      min-width: 0;
    }

    .logo-mark {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      flex-shrink: 0;
      background: linear-gradient(135deg, rgba(245, 197, 24, 0.25), rgba(255, 51, 102, 0.2));
      border: 1px solid rgba(245, 197, 24, 0.45);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #f5c518;
      font-size: 1.15rem;
    }

    .logo-text {
      display: flex;
      flex-direction: column;
    }

    .brand-name {
      font-size: 1rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      line-height: 1.1;
      background: linear-gradient(90deg, #ffffff 0%, #f5c518 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .brand-sub {
      font-size: 0.55rem;
      letter-spacing: 0.12em;
      color: #94a3b8;
      font-weight: 700;
      white-space: nowrap;
    }

    .active-user-pill {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
      padding: 4px 12px 4px 4px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      text-decoration: none;
      color: #f8fafc;
    }

    .avatar-dot {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.72rem;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: 0.03em;
      flex-shrink: 0;
    }

    .user-meta {
      display: flex;
      flex-direction: column;
      line-height: 1.15;
      min-width: 0;
    }

    .user-name {
      font-size: 0.76rem;
      font-weight: 700;
      max-width: 96px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .user-role-tag {
      font-size: 0.62rem;
      font-weight: 700;
      color: #38ecff;
    }

    .user-role-tag.critic {
      color: #ff5c85;
    }

    .login-pill-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      flex-shrink: 0;
      padding: 9px 14px;
      border-radius: 999px;
      background: linear-gradient(135deg, #f5c518, #e09f00);
      color: #090a0f;
      font-weight: 800;
      font-size: 0.78rem;
      text-decoration: none;
    }

    .floating-glass-dock {
      position: fixed;
      bottom: calc(12px + env(safe-area-inset-bottom));
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 6px;
      border-radius: 999px;
      background: rgba(16, 19, 30, 0.92);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      box-shadow: 0 14px 36px rgba(0, 0, 0, 0.65);
      max-width: calc(100vw - 20px);
    }

    .dock-item {
      display: flex;
      align-items: center;
      gap: 7px;
      padding: 10px 16px;
      border-radius: 999px;
      text-decoration: none;
      color: #94a3b8;
      font-weight: 700;
      font-size: 0.8rem;
      white-space: nowrap;
      -webkit-tap-highlight-color: transparent;
    }

    .dock-item.active-tab {
      background: linear-gradient(135deg, rgba(245, 197, 24, 0.24), rgba(245, 197, 24, 0.08));
      color: #f5c518;
      border: 1px solid rgba(245, 197, 24, 0.38);
      padding: 9px 15px;
    }

    .dock-icon {
      font-size: 1.05rem;
    }

    @media (max-width: 380px) {
      .brand-sub { display: none; }
      .user-meta { display: none; }
      .active-user-pill { padding: 4px; }
      .dock-item { padding: 10px 12px; }
      .dock-item:not(.active-tab) .dock-label { display: none; }
    }
  `]
})
export class AppComponent implements OnInit {
  currentUser: UserProfile | null = null;
  currentUrl = '/explorar';
  showServerModal = false;
  hostInput = '';
  scanningServer = false;
  serverStatusMsg = '';

  constructor(
    public cotufera: CotuferaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hostInput = this.cotufera.apiHost;
    this.cotufera.apiHost$.subscribe(h => (this.hostInput = h));
    this.cotufera.currentUser$.subscribe(u => (this.currentUser = u));
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.currentUrl = e.urlAfterRedirects || e.url || '/explorar';
      });
  }

  toggleServerModal(): void {
    this.showServerModal = !this.showServerModal;
    this.hostInput = this.cotufera.apiHost;
    this.serverStatusMsg = '';
  }

  saveServerHost(): void {
    if (!this.hostInput.trim()) return;
    this.cotufera.setApiHost(this.hostInput);
    this.serverStatusMsg = `Conectado a ${this.cotufera.apiHost}:3000`;
    setTimeout(() => (this.showServerModal = false), 700);
  }

  async scanServer(): Promise<void> {
    this.scanningServer = true;
    this.serverStatusMsg = '';
    const found = await this.cotufera.autoDiscoverServer();
    this.scanningServer = false;
    if (found) {
      this.hostInput = found;
      this.serverStatusMsg = `Servidor encontrado en ${found}:3000`;
      setTimeout(() => (this.showServerModal = false), 900);
    } else {
      this.serverStatusMsg = 'No se detectó automáticamente. Escribe la IP que muestra el backend.';
    }
  }
}
