import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { CotuferaService } from '../../services/cotufera.service';
import { CommentItem, MovieItem, UserProfile } from '../../models/cotufera.models';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonIcon],
  template: `
    <ion-content [fullscreen]="true">
      <div class="detail-wrapper" *ngIf="movie; else loadingTpl">

        <!-- CABECERA PANORÁMICA CON IMAGEN DE FONDO Y CARÁTULA -->
        <section
          class="backdrop-hero"
          [style.backgroundImage]="'linear-gradient(180deg, rgba(8,9,14,0.35) 0%, rgba(8,9,14,0.88) 70%, #08090e 100%), url(' + (selectedBackdrop || movie.backdropUrl || movie.coverUrl) + ')'">

          <div class="top-nav-row">
            <button type="button" class="back-glass-btn" (click)="goBack()">
              <ion-icon name="arrow-back-outline"></ion-icon>
              <span>Volver al Catálogo</span>
            </button>
            <span class="db-saved-pill">
              Guardada en Base de Datos Local · TMDB #{{ movie.tmdbId }}
            </span>
          </div>

          <div class="hero-main-grid">
            <!-- Carátula Principal -->
            <div class="poster-column">
              <div class="poster-frame">
                <img [src]="movie.coverUrl" [alt]="movie.title" class="main-cover-img" />
                <span class="media-ribbon" [class.series]="movie.mediaType === 'tv'">
                  {{ movie.mediaType === 'tv' ? 'SERIE DE TV' : 'PELÍCULA' }}
                </span>
              </div>
            </div>

            <!-- Información Principal de la Película / Serie -->
            <div class="info-column">
              <div class="genre-tags-row">
                <span class="cert-badge">{{ movie.certification || '+13' }}</span>
                <span class="genre-tag" *ngFor="let g of movie.genres">{{ g }}</span>
              </div>

              <h1 class="detail-title font-display">{{ movie.title }}</h1>
              <p class="original-title" *ngIf="movie.originalTitle && movie.originalTitle !== movie.title">
                Título original: <strong>{{ movie.originalTitle }}</strong>
              </p>
              <p class="tagline" *ngIf="movie.tagline">“{{ movie.tagline }}”</p>

              <!-- Ficha de Datos Relevantes -->
              <div class="quick-specs-grid">
                <div class="spec-item">
                  <span class="spec-label">Fecha de Publicación</span>
                  <span class="spec-value">{{ movie.releaseDate || 'No disponible' }}</span>
                </div>
                <div class="spec-item">
                  <span class="spec-label">Duración / Formato</span>
                  <span class="spec-value">
                    {{ movie.mediaType === 'tv'
                      ? (movie.seasons || 1) + ' Temp · ' + (movie.runtime || 50) + 'm/ep'
                      : (movie.runtime || 120) + ' minutos' }}
                  </span>
                </div>
                <div class="spec-item">
                  <span class="spec-label">Dirección / Creación</span>
                  <span class="spec-value">{{ movie.director || 'Dirección Internacional' }}</span>
                </div>
                <div class="spec-item">
                  <span class="spec-label">Estudio / Estado</span>
                  <span class="spec-value">{{ movie.studio }} · {{ movie.status || 'Estrenada' }}</span>
                </div>
                <div class="spec-item">
                  <span class="spec-label">Idioma / TMDB Global</span>
                  <span class="spec-value">{{ movie.originalLanguage || 'EN' }} · {{ movie.tmdbScore || 7.5 }}/10 TMDB</span>
                </div>
              </div>

              <!-- Sinopsis -->
              <div class="synopsis-card glass-panel">
                <h3 class="section-subtitle">Sinopsis</h3>
                <p class="synopsis-text">{{ movie.synopsis }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- COMPARATIVA VISUAL: DIFERENCIA ENTRE RATING DE USUARIOS NORMALES Y CRÍTICOS -->
        <section class="ratings-comparison-section glass-panel">
          <div class="comp-header">
            <div>
              <span class="comp-eyebrow">TERMÓMETRO DE CALIFICACIONES COTUFERA</span>
              <h2 class="comp-title font-display">Diferencia: Críticos Especializados vs. Usuarios Normales</h2>
            </div>
            <div class="verdict-pill">
              {{ getComparisonVerdict() }}
            </div>
          </div>

          <div class="comp-cards-grid">
            <!-- Promedio General -->
            <div class="meter-card general">
              <div class="meter-top">
                <span class="meter-badge gold">PROMEDIO GENERAL</span>
                <span class="meter-count">{{ movie.stats?.totalReviews || 0 }} opiniones totales</span>
              </div>
              <div class="meter-score-row">
                <span class="big-score gold">{{ movie.stats?.averageScore || '0.0' }}</span>
                <span class="out-of">/ 10</span>
              </div>
              <div class="progress-track">
                <div class="progress-fill gold" [style.width.%]="(movie.stats?.averageScore || 0) * 10"></div>
              </div>
              <p class="meter-desc">Calificación global ponderando todas las reseñas registradas en Cotufera.</p>
            </div>

            <!-- Rating de Críticos -->
            <div class="meter-card critic">
              <div class="meter-top">
                <span class="meter-badge crimson">RATING CRÍTICOS</span>
                <span class="meter-count">{{ movie.stats?.criticCount || 0 }} reseñas de críticos</span>
              </div>
              <div class="meter-score-row">
                <span class="big-score crimson">{{ movie.stats?.criticScore || '0.0' }}</span>
                <span class="out-of">/ 10</span>
              </div>
              <div class="progress-track">
                <div class="progress-fill crimson" [style.width.%]="(movie.stats?.criticScore || 0) * 10"></div>
              </div>
              <p class="meter-desc">Evaluación técnica de dirección, narrativa, fotografía y montaje por críticos.</p>
            </div>

            <!-- Rating de Usuarios Normales -->
            <div class="meter-card normal">
              <div class="meter-top">
                <span class="meter-badge cyan">RATING USUARIOS NORMALES</span>
                <span class="meter-count">{{ movie.stats?.normalCount || 0 }} reseñas del público</span>
              </div>
              <div class="meter-score-row">
                <span class="big-score cyan">{{ movie.stats?.normalScore || '0.0' }}</span>
                <span class="out-of">/ 10</span>
              </div>
              <div class="progress-track">
                <div class="progress-fill cyan" [style.width.%]="(movie.stats?.normalScore || 0) * 10"></div>
              </div>
              <p class="meter-desc">Satisfacción, entretenimiento e impacto emocional calificado por la audiencia general.</p>
            </div>
          </div>
        </section>

        <!-- REPARTO / ACTORES E IMÁGENES ADICIONALES -->
        <section class="media-and-cast-grid">
          <!-- Actores -->
          <div class="cast-panel glass-panel">
            <div class="panel-header">
              <div class="panel-title-wrap">
                <h3 class="section-subtitle">Reparto Principal ({{ (movie.castDetails?.length || movie.actors?.length || 0) }})</h3>
                <span class="sub-hint">{{ showAllActorsGrid ? 'Mostrando todos los actores' : 'Desliza horizontalmente o cambia a vista cuadrícula' }}</span>
              </div>

              <div class="cast-controls" *ngIf="movie.castDetails && movie.castDetails.length > 0">
                <div class="carousel-nav-btns" *ngIf="!showAllActorsGrid">
                  <button type="button" class="nav-arrow-btn" (click)="scrollActors(-1)" aria-label="Anterior">
                    <ion-icon name="chevron-back-outline"></ion-icon>
                  </button>
                  <button type="button" class="nav-arrow-btn" (click)="scrollActors(1)" aria-label="Siguiente">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </button>
                </div>

                <button type="button" class="toggle-cast-view-btn" (click)="showAllActorsGrid = !showAllActorsGrid">
                  <ion-icon [name]="showAllActorsGrid ? 'albums-outline' : 'grid-outline'"></ion-icon>
                  <span>{{ showAllActorsGrid ? 'Ver carrusel' : 'Ver todos (' + movie.castDetails.length + ')' }}</span>
                </button>
              </div>
            </div>

            <ng-container *ngIf="movie.castDetails && movie.castDetails.length > 0; else simpleActors">
              <!-- Modo Carrusel Táctil -->
              <div
                #actorsCarousel
                class="actors-scroll touch-carousel"
                *ngIf="!showAllActorsGrid">
                <div class="actor-card" *ngFor="let actor of movie.castDetails">
                  <img [src]="actor.photoUrl" [alt]="actor.name" class="actor-photo" loading="lazy" />
                  <div class="actor-name">{{ actor.name }}</div>
                  <div class="actor-char">{{ actor.character }}</div>
                </div>
              </div>

              <!-- Modo Cuadrícula Completa (Ideal para ver todos los actores de un vistazo en móvil) -->
              <div class="actors-full-grid" *ngIf="showAllActorsGrid">
                <div class="actor-card grid-mode" *ngFor="let actor of movie.castDetails">
                  <img [src]="actor.photoUrl" [alt]="actor.name" class="actor-photo" loading="lazy" />
                  <div class="actor-text">
                    <div class="actor-name">{{ actor.name }}</div>
                    <div class="actor-char">{{ actor.character }}</div>
                  </div>
                </div>
              </div>
            </ng-container>

            <ng-template #simpleActors>
              <div class="simple-actors-list">
                <span class="actor-chip" *ngFor="let actorName of movie.actors">{{ actorName }}</span>
              </div>
            </ng-template>
          </div>

          <!-- Galería de Imágenes / Carátulas -->
          <div class="gallery-panel glass-panel" *ngIf="movie.gallery && movie.gallery.length > 0">
            <div class="panel-header">
              <div class="panel-title-wrap">
                <h3 class="section-subtitle">Galería Visual e Imágenes</h3>
                <span class="sub-hint">Toca una imagen para previsualizarla en la cabecera</span>
              </div>
            </div>
            <div class="gallery-thumbs touch-carousel">
              <div
                class="thumb-item"
                *ngFor="let img of movie.gallery"
                [class.active]="selectedBackdrop === img"
                (click)="selectedBackdrop = img">
                <img [src]="img" alt="Fotograma de la película" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <!-- CRUD DE COMENTARIOS: ESTUDIO INTERACTIVO DE OPINIÓN + PUNTAJE -->
        <section class="reviews-hub-section">
          <!-- Invitado: puede ver todo, pero para opinar debe iniciar sesión -->
          <div class="guest-cta glass-panel" *ngIf="!currentUser">
            <ion-icon name="log-in-outline" class="cta-icon"></ion-icon>
            <div class="cta-text">
              <h3>¿Quieres dejar tu opinión y puntaje?</h3>
              <p>Inicia sesión o regístrate para publicar reseñas. Puedes seguir viendo toda la información del catálogo sin cuenta.</p>
            </div>
            <button type="button" class="btn-submit-review" (click)="goLogin()">Iniciar sesión / Registrarme</button>
          </div>

          <div class="composer-card glass-panel" *ngIf="currentUser">
            <div class="composer-top">
              <div>
                <span class="comp-eyebrow">
                  {{ editingCommentId ? 'EDITANDO RESEÑA EXISTENTE' : 'PUBLICAR OPINIÓN Y PUNTAJE' }}
                </span>
                <h2 class="comp-title font-display">
                  {{ editingCommentId ? 'Actualizar tu Calificación y Comentario' : '¿Qué te pareció ' + movie.title + '?' }}
                </h2>
              </div>

              <!-- Indicador del rol con el que se calificará -->
              <div class="active-role-indicator" *ngIf="currentUser">
                <span class="role-badge-live" [class.critic]="currentUser.role === 'critic'">
                  {{ currentUser.role === 'critic' ? 'Calificando como Crítico' : 'Calificando como Usuario' }}
                </span>
              </div>
            </div>

            <!-- Selector Interactivo de Puntaje 1 al 10 -->
            <div class="interactive-score-picker">
              <div class="picker-header">
                <span class="picker-title">Selecciona tu Puntaje (1 al 10):</span>
                <span class="picker-dynamic-badge" [class.critic]="currentUser?.role === 'critic'">
                  {{ reviewForm.score }}/10 — {{ cotufera.getScoreLabel(reviewForm.score) }}
                </span>
              </div>

              <div class="score-buttons-row">
                <button
                  type="button"
                  *ngFor="let num of [1,2,3,4,5,6,7,8,9,10]"
                  class="score-tile"
                  [class.selected]="reviewForm.score === num"
                  [class.high]="num >= 8 && reviewForm.score >= num"
                  [class.critic-mode]="currentUser?.role === 'critic' && reviewForm.score >= num"
                  (click)="reviewForm.score = num">
                  <span class="tile-num">{{ num }}</span>
                </button>
              </div>
            </div>

            <!-- Chips de inspiración rápida -->
            <div class="inspiration-chips">
              <span class="chips-label">Ideas rápidas:</span>
              <button
                type="button"
                class="idea-chip"
                *ngFor="let phrase of quickPhrases"
                (click)="reviewForm.headline = phrase">
                + {{ phrase }}
              </button>
            </div>

            <!-- Campos estilizados con límite de caracteres y contador en vivo -->
            <div class="editorial-inputs">
              <div class="input-with-counter">
                <div class="field-top-bar">
                  <label>Titular breve (opcional)</label>
                  <span class="char-counter" [class.near-limit]="reviewForm.headline.length >= 80">
                    {{ reviewForm.headline.length }} / {{ MAX_HEADLINE }}
                  </span>
                </div>
                <input
                  type="text"
                  [maxLength]="MAX_HEADLINE"
                  [(ngModel)]="reviewForm.headline"
                  placeholder="Ej. Una obra maestra de principio a fin"
                  class="editorial-headline-input" />
              </div>

              <div class="input-with-counter">
                <div class="field-top-bar">
                  <label>Tu opinión detallada</label>
                  <span class="char-counter" [class.near-limit]="reviewForm.text.length >= 450">
                    {{ reviewForm.text.length }} / {{ MAX_REVIEW_TEXT }}
                  </span>
                </div>
                <textarea
                  rows="4"
                  [maxLength]="MAX_REVIEW_TEXT"
                  [(ngModel)]="reviewForm.text"
                  placeholder="Escribe tu opinión sobre la trama, actuaciones, dirección o entretenimiento (máx. 500 caracteres)..."
                  class="editorial-textarea"></textarea>
              </div>
            </div>

            <div class="composer-footer">
              <label class="spoiler-toggle" (click)="reviewForm.containsSpoilers = !reviewForm.containsSpoilers">
                <span class="toggle-box" [class.checked]="reviewForm.containsSpoilers">
                  {{ reviewForm.containsSpoilers ? '✓' : '' }}
                </span>
                <span>Contiene spoilers de la trama</span>
              </label>

              <div class="composer-btns">
                <button
                  *ngIf="editingCommentId"
                  type="button"
                  class="btn-cancel-edit"
                  (click)="cancelEdit()">
                  Cancelar edición
                </button>

                <button
                  type="button"
                  class="btn-submit-review"
                  [class.critic-btn]="currentUser?.role === 'critic'"
                  [disabled]="submittingReview"
                  (click)="submitReview()">
                  {{ submittingReview
                    ? 'Guardando...'
                    : (editingCommentId ? 'Guardar Cambios en Reseña' : 'Publicar Opinión y Puntaje (' + reviewForm.score + '/10)') }}
                </button>
              </div>
            </div>

            <div class="feedback-toast" *ngIf="feedbackMsg" [class.error]="feedbackError">
              {{ feedbackMsg }}
            </div>
          </div>

          <!-- LISTADO Y FILTRO DE COMENTARIOS (TODOS / CRÍTICOS / USUARIOS NORMALES) -->
          <div class="comments-feed-header">
            <h3 class="feed-title font-display">
              Opiniones de la Comunidad ({{ filteredComments.length }})
            </h3>

            <div class="feed-filter-tabs">
              <button
                type="button"
                class="feed-tab"
                [class.active]="commentRoleFilter === 'all'"
                (click)="setCommentFilter('all')">
                Todas ({{ comments.length }})
              </button>
              <button
                type="button"
                class="feed-tab critic"
                [class.active]="commentRoleFilter === 'critic'"
                (click)="setCommentFilter('critic')">
                Críticos ({{ criticCommentsCount }})
              </button>
              <button
                type="button"
                class="feed-tab normal"
                [class.active]="commentRoleFilter === 'normal'"
                (click)="setCommentFilter('normal')">
                Usuarios ({{ normalCommentsCount }})
              </button>
            </div>
          </div>

          <div class="empty-comments glass-panel" *ngIf="filteredComments.length === 0">
            <p>Aún no hay reseñas en esta categoría. Sé el primero en compartir tu opinión y puntaje.</p>
          </div>

          <div class="comments-list">
            <article
              class="comment-card glass-panel"
              *ngFor="let c of filteredComments"
              [class.critic-border]="c.userId?.role === 'critic'"
              [class.normal-border]="c.userId?.role !== 'critic'">

              <div class="comment-card-top">
                <div class="author-block">
                  <div
                    class="author-avatar"
                    [style.background]="cotufera.getAvatarPreset(c.userId?.avatar, c.userId?.role).gradient">
                    {{ cotufera.getUserInitials(c.userId?.name, c.userId?.role) }}
                  </div>
                  <div class="author-info">
                    <div class="author-name-row">
                      <span class="author-name">{{ c.userId?.name || 'Usuario Cotufera' }}</span>
                      <span
                        [class]="c.userId?.role === 'critic' ? 'badge-critic' : 'badge-audience'">
                        {{ c.userId?.role === 'critic' ? 'Crítico' : 'Usuario' }}
                      </span>
                    </div>
                    <span class="author-sub">
                      {{ c.userId?.specialty || (c.userId?.role === 'critic' ? 'Crítica Especializada' : 'Audiencia General') }}
                      · {{ c.createdAt | date:'mediumDate' }}
                    </span>
                  </div>
                </div>

                <div class="comment-score-pill" [class.critic]="c.userId?.role === 'critic'">
                  <span class="score-num">{{ c.score }}</span>
                  <span class="score-ten">/10</span>
                </div>
              </div>

              <h4 class="comment-headline" *ngIf="c.headline">“{{ c.headline }}”</h4>

              <div class="spoiler-warning" *ngIf="c.containsSpoilers && !revealedSpoilers[c._id]">
                <span>Esta reseña contiene spoilers de la trama.</span>
                <button type="button" (click)="revealedSpoilers[c._id] = true">Mostrar reseña</button>
              </div>

              <p class="comment-body" *ngIf="!c.containsSpoilers || revealedSpoilers[c._id]">{{ c.text }}</p>

              <!-- Acciones CRUD del comentario (Editar y Eliminar) -->
              <div class="comment-actions-bar">
                <span class="sentiment-tag">{{ cotufera.getScoreLabel(c.score) }}</span>
                <div class="crud-btns" *ngIf="isMine(c)">
                  <button
                    type="button"
                    class="crud-action-btn edit"
                    (click)="startEditComment(c)">
                    Editar
                  </button>
                  <button
                    type="button"
                    class="crud-action-btn delete"
                    (click)="removeComment(c)">
                    Eliminar
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

      </div>

      <ng-template #loadingTpl>
        <div class="loading-detail">
          <p>Cargando información de la película y reseñas desde Cotufera...</p>
        </div>
      </ng-template>
    </ion-content>
  `,
  styles: [`
    .detail-wrapper {
      max-width: 1240px;
      margin: 0 auto;
      padding: 66px 16px 120px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      min-width: 0;
    }

    .backdrop-hero {
      border-radius: 0 0 32px 32px;
      background-size: cover;
      background-position: center top;
      padding: 24px 28px 34px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);
      min-width: 0;
    }

    .top-nav-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 24px;
    }

    .back-glass-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      background: rgba(8, 9, 14, 0.72);
      color: #f8fafc;
      font-weight: 700;
      font-size: 0.82rem;
      padding: 9px 16px;
      border-radius: 999px;
      cursor: pointer;
      backdrop-filter: blur(12px);
    }

    .db-saved-pill {
      padding: 6px 13px;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 700;
      background: rgba(16, 185, 129, 0.16);
      color: #34d399;
      border: 1px solid rgba(16, 185, 129, 0.35);
      backdrop-filter: blur(10px);
    }

    .hero-main-grid {
      display: grid;
      grid-template-columns: 260px minmax(0, 1fr);
      gap: 32px;
      align-items: start;
    }

    .poster-frame {
      position: relative;
      border-radius: 22px;
      overflow: hidden;
      border: 2px solid rgba(255, 255, 255, 0.16);
      box-shadow: 0 24px 50px rgba(0, 0, 0, 0.85);
    }

    .main-cover-img {
      width: 100%;
      display: block;
    }

    .media-ribbon {
      position: absolute;
      bottom: 12px;
      left: 12px;
      right: 12px;
      text-align: center;
      padding: 6px;
      border-radius: 10px;
      font-size: 0.72rem;
      font-weight: 800;
      background: rgba(8, 9, 14, 0.88);
      color: #f5c518;
      border: 1px solid rgba(245, 197, 24, 0.4);
      backdrop-filter: blur(8px);
    }

    .media-ribbon.series {
      color: #38ecff;
      border-color: rgba(0, 229, 255, 0.4);
    }

    .info-column {
      display: flex;
      flex-direction: column;
      gap: 14px;
      min-width: 0;
    }

    .genre-tags-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
    }

    .cert-badge {
      padding: 4px 10px;
      border-radius: 8px;
      font-size: 0.72rem;
      font-weight: 800;
      background: rgba(245, 197, 24, 0.22);
      color: #f5c518;
      border: 1px solid rgba(245, 197, 24, 0.4);
    }

    .genre-tag {
      padding: 5px 12px;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 700;
      background: rgba(255, 255, 255, 0.1);
      color: #f1f5f9;
      backdrop-filter: blur(8px);
    }

    .detail-title {
      font-size: clamp(1.8rem, 4vw, 2.9rem);
      font-weight: 800;
      margin: 0;
      line-height: 1.1;
      overflow-wrap: anywhere;
    }

    .original-title {
      margin: 0;
      font-size: 0.85rem;
      color: #94a3b8;
    }

    .tagline {
      margin: 0;
      font-size: 1rem;
      font-style: italic;
      color: #f5c518;
      font-weight: 600;
    }

    .quick-specs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
      gap: 10px;
      margin-top: 4px;
    }

    .spec-item {
      background: rgba(12, 14, 22, 0.78);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      padding: 10px 14px;
      display: flex;
      flex-direction: column;
      gap: 3px;
      min-width: 0;
    }

    .spec-label {
      font-size: 0.68rem;
      color: #94a3b8;
      font-weight: 700;
      text-transform: uppercase;
    }

    .spec-value {
      font-size: 0.85rem;
      font-weight: 700;
      color: #f8fafc;
    }

    .synopsis-card {
      padding: 18px 20px;
      margin-top: 4px;
    }

    .section-subtitle {
      margin: 0;
      font-size: 0.98rem;
      font-weight: 800;
      color: #f8fafc;
    }

    .synopsis-text {
      margin: 8px 0 0;
      font-size: 0.94rem;
      line-height: 1.65;
      color: #cbd5e1;
      overflow-wrap: anywhere;
    }

    /* COMPARATIVA CRÍTICOS VS USUARIOS */
    .ratings-comparison-section {
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .comp-header {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .comp-eyebrow {
      font-size: 0.68rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      color: #f5c518;
      display: block;
      margin-bottom: 4px;
    }

    .comp-title {
      margin: 0;
      font-size: 1.35rem;
      font-weight: 800;
    }

    .verdict-pill {
      padding: 8px 16px;
      border-radius: 999px;
      background: rgba(245, 197, 24, 0.14);
      border: 1px solid rgba(245, 197, 24, 0.38);
      color: #f5c518;
      font-size: 0.82rem;
      font-weight: 800;
    }

    .comp-cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 18px;
    }

    .meter-card {
      padding: 20px;
      border-radius: 20px;
      background: rgba(10, 12, 20, 0.72);
      border: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      flex-direction: column;
      gap: 12px;
      min-width: 0;
    }

    .meter-card.general {
      border-color: rgba(245, 197, 24, 0.35);
    }

    .meter-card.critic {
      border-color: rgba(255, 51, 102, 0.4);
      background: linear-gradient(180deg, rgba(255, 51, 102, 0.08) 0%, rgba(10, 12, 20, 0.75) 100%);
    }

    .meter-card.normal {
      border-color: rgba(0, 229, 255, 0.38);
      background: linear-gradient(180deg, rgba(0, 229, 255, 0.08) 0%, rgba(10, 12, 20, 0.75) 100%);
    }

    .meter-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
    }

    .meter-badge {
      font-size: 0.68rem;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: 999px;
    }

    .meter-badge.gold {
      background: rgba(245, 197, 24, 0.18);
      color: #f5c518;
    }

    .meter-badge.crimson {
      background: rgba(255, 51, 102, 0.2);
      color: #ff5c85;
    }

    .meter-badge.cyan {
      background: rgba(0, 229, 255, 0.18);
      color: #38ecff;
    }

    .meter-count {
      font-size: 0.74rem;
      color: #94a3b8;
      font-weight: 600;
    }

    .meter-score-row {
      display: flex;
      align-items: baseline;
      gap: 6px;
    }

    .big-score {
      font-size: 2.5rem;
      font-weight: 800;
      line-height: 1;
    }

    .big-score.gold { color: #f5c518; }
    .big-score.crimson { color: #ff5c85; }
    .big-score.cyan { color: #38ecff; }

    .out-of {
      font-size: 1rem;
      color: #64748b;
      font-weight: 700;
    }

    .progress-track {
      width: 100%;
      height: 10px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.07);
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      border-radius: 999px;
      transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .progress-fill.gold { background: linear-gradient(90deg, #f5c518, #fb923c); }
    .progress-fill.crimson { background: linear-gradient(90deg, #ff3366, #fb7185); }
    .progress-fill.cyan { background: linear-gradient(90deg, #00e5ff, #38bdf8); }

    .meter-desc {
      margin: 0;
      font-size: 0.78rem;
      color: #94a3b8;
      line-height: 1.45;
    }

    /* ACTORES Y GALERÍA - CORREGIDO PARA MÓVIL SIN DESBORDAMIENTO */
    .media-and-cast-grid {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 20px;
      min-width: 0;
      width: 100%;
    }

    .cast-panel, .gallery-panel {
      padding: 20px;
      min-width: 0;
      width: 100%;
      overflow: hidden;
    }

    .panel-header {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 14px;
    }

    .panel-title-wrap {
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;
    }

    .sub-hint {
      font-size: 0.74rem;
      color: #94a3b8;
    }

    .cast-controls {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .carousel-nav-btns {
      display: flex;
      gap: 6px;
    }

    .nav-arrow-btn {
      width: 34px;
      height: 34px;
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.14);
      background: rgba(8, 9, 14, 0.75);
      color: #f8fafc;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .nav-arrow-btn:hover {
      border-color: #f5c518;
      color: #f5c518;
    }

    .toggle-cast-view-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 12px;
      border-radius: 10px;
      border: 1px solid rgba(245, 197, 24, 0.35);
      background: rgba(245, 197, 24, 0.12);
      color: #f5c518;
      font-size: 0.75rem;
      font-weight: 800;
      cursor: pointer;
    }

    .actors-scroll {
      display: flex;
      gap: 12px;
      padding-bottom: 10px;
      width: 100%;
    }

    .actor-card {
      width: 132px;
      flex: 0 0 132px;
      scroll-snap-align: start;
      background: rgba(10, 12, 20, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 12px 10px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      min-width: 0;
    }

    .actors-full-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 12px;
      width: 100%;
    }

    .actor-card.grid-mode {
      width: 100%;
      flex: initial;
    }

    .actor-photo {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid rgba(245, 197, 24, 0.35);
      flex-shrink: 0;
    }

    .actor-name {
      font-size: 0.8rem;
      font-weight: 800;
      color: #f8fafc;
      line-height: 1.25;
      width: 100%;
      overflow-wrap: anywhere;
    }

    .actor-char {
      font-size: 0.7rem;
      color: #94a3b8;
      line-height: 1.25;
      width: 100%;
      overflow-wrap: anywhere;
    }

    .simple-actors-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .actor-chip {
      padding: 7px 14px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.06);
      font-size: 0.82rem;
      font-weight: 600;
    }

    .gallery-thumbs {
      display: flex;
      gap: 12px;
      padding-bottom: 8px;
      width: 100%;
    }

    .thumb-item {
      flex: 0 0 220px;
      scroll-snap-align: start;
      border-radius: 14px;
      overflow: hidden;
      border: 2px solid transparent;
      cursor: pointer;
      aspect-ratio: 16 / 9;
    }

    .thumb-item.active, .thumb-item:hover {
      border-color: #f5c518;
    }

    .thumb-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    /* COMPOSER DE RESEÑAS */
    .reviews-hub-section {
      display: flex;
      flex-direction: column;
      gap: 20px;
      min-width: 0;
    }

    .guest-cta {
      padding: 22px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 10px;
      border-color: rgba(245, 197, 24, 0.3);
    }

    .cta-icon {
      font-size: 2.2rem;
      color: #f5c518;
    }

    .guest-cta h3 { margin: 0; font-size: 1.05rem; }
    .guest-cta p { margin: 0; font-size: 0.84rem; color: #94a3b8; line-height: 1.5; }

    .composer-card {
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 18px;
      border: 1px solid rgba(245, 197, 24, 0.22);
    }

    .composer-top {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .role-badge-live {
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 800;
      background: rgba(0, 229, 255, 0.16);
      color: #38ecff;
      border: 1px solid rgba(0, 229, 255, 0.35);
    }

    .role-badge-live.critic {
      background: rgba(255, 51, 102, 0.18);
      color: #ff5c85;
      border-color: rgba(255, 51, 102, 0.4);
    }

    .interactive-score-picker {
      background: rgba(8, 9, 14, 0.65);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 18px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .picker-header {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .picker-title {
      font-size: 0.84rem;
      font-weight: 700;
      color: #cbd5e1;
    }

    .picker-dynamic-badge {
      font-size: 0.86rem;
      font-weight: 800;
      color: #38ecff;
    }

    .picker-dynamic-badge.critic {
      color: #ff5c85;
    }

    .score-buttons-row {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      gap: 8px;
    }

    .score-tile {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.04);
      color: #94a3b8;
      border-radius: 12px;
      padding: 11px 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.18s ease;
    }

    .score-tile.selected {
      background: linear-gradient(135deg, #00e5ff, #0284c7);
      color: #08090e;
      border-color: #00e5ff;
      box-shadow: 0 6px 18px rgba(0, 229, 255, 0.35);
    }

    .score-tile.critic-mode.selected {
      background: linear-gradient(135deg, #ff3366, #be123c);
      color: #ffffff;
      border-color: #ff3366;
      box-shadow: 0 6px 18px rgba(255, 51, 102, 0.4);
    }

    .tile-num {
      font-size: 0.98rem;
      font-weight: 800;
    }

    .inspiration-chips {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 7px;
    }

    .chips-label {
      font-size: 0.74rem;
      color: #94a3b8;
      font-weight: 700;
    }

    .idea-chip {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.04);
      color: #cbd5e1;
      font-size: 0.73rem;
      font-weight: 600;
      padding: 5px 11px;
      border-radius: 999px;
      cursor: pointer;
    }

    .editorial-inputs {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .input-with-counter {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .field-top-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.73rem;
      color: #94a3b8;
      font-weight: 700;
    }

    .char-counter {
      font-variant-numeric: tabular-nums;
      color: #64748b;
    }

    .char-counter.near-limit {
      color: #f59e0b;
    }

    .editorial-headline-input, .editorial-textarea {
      width: 100%;
      background: rgba(8, 9, 14, 0.72);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 14px;
      padding: 12px 15px;
      color: #f8fafc;
      font-family: inherit;
      font-size: 0.9rem;
      outline: none;
      resize: vertical;
    }

    .editorial-headline-input:focus, .editorial-textarea:focus {
      border-color: #f5c518;
    }

    .composer-footer {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .spoiler-toggle {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      font-size: 0.82rem;
      color: #cbd5e1;
      user-select: none;
    }

    .toggle-box {
      width: 20px;
      height: 20px;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 800;
    }

    .toggle-box.checked {
      background: #f5c518;
      color: #08090e;
      border-color: #f5c518;
    }

    .composer-btns {
      display: flex;
      gap: 10px;
    }

    .btn-cancel-edit {
      border: 1px solid rgba(255, 255, 255, 0.16);
      background: transparent;
      color: #cbd5e1;
      font-weight: 700;
      padding: 11px 16px;
      border-radius: 12px;
      cursor: pointer;
    }

    .btn-submit-review {
      border: none;
      background: linear-gradient(135deg, #00e5ff 0%, #0284c7 100%);
      color: #08090e;
      font-weight: 800;
      font-size: 0.86rem;
      padding: 12px 22px;
      border-radius: 14px;
      cursor: pointer;
      box-shadow: 0 8px 20px rgba(0, 229, 255, 0.25);
    }

    .btn-submit-review.critic-btn {
      background: linear-gradient(135deg, #ff3366 0%, #be123c 100%);
      color: #ffffff;
      box-shadow: 0 8px 20px rgba(255, 51, 102, 0.3);
    }

    .feedback-toast {
      padding: 10px 14px;
      border-radius: 12px;
      background: rgba(16, 185, 129, 0.16);
      border: 1px solid rgba(16, 185, 129, 0.35);
      color: #34d399;
      font-size: 0.84rem;
      font-weight: 600;
    }

    .feedback-toast.error {
      background: rgba(239, 68, 68, 0.16);
      border-color: rgba(239, 68, 68, 0.35);
      color: #f87171;
    }

    /* LISTADO DE COMENTARIOS - PROTECCIÓN TOTAL CONTRA DESBORDAMIENTO DE TEXTO */
    .comments-feed-header {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .feed-title {
      margin: 0;
      font-size: 1.2rem;
    }

    .feed-filter-tabs {
      display: flex;
      gap: 6px;
      background: rgba(16, 19, 30, 0.8);
      padding: 4px;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .feed-tab {
      border: none;
      background: transparent;
      color: #94a3b8;
      font-size: 0.78rem;
      font-weight: 700;
      padding: 7px 14px;
      border-radius: 999px;
      cursor: pointer;
    }

    .feed-tab.active {
      background: rgba(245, 197, 24, 0.2);
      color: #f5c518;
    }

    .feed-tab.critic.active {
      background: rgba(255, 51, 102, 0.22);
      color: #ff5c85;
    }

    .feed-tab.normal.active {
      background: rgba(0, 229, 255, 0.18);
      color: #38ecff;
    }

    .comments-list {
      display: flex;
      flex-direction: column;
      gap: 14px;
      min-width: 0;
    }

    .comment-card {
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      border-left: 4px solid transparent;
      min-width: 0;
      max-width: 100%;
      overflow: hidden;
    }

    .comment-card.critic-border {
      border-left-color: #ff3366;
    }

    .comment-card.normal-border {
      border-left-color: #00e5ff;
    }

    .comment-card-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
      min-width: 0;
    }

    .author-block {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
      flex: 1;
    }

    .author-avatar {
      width: 42px;
      height: 42px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.85rem;
      font-weight: 800;
      color: #fff;
      flex-shrink: 0;
    }

    .author-info {
      min-width: 0;
      flex: 1;
    }

    .author-name-row {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .author-name {
      font-size: 0.94rem;
      font-weight: 800;
      color: #f8fafc;
      overflow-wrap: anywhere;
    }

    .author-sub {
      font-size: 0.73rem;
      color: #94a3b8;
      display: block;
      overflow-wrap: anywhere;
    }

    .comment-score-pill {
      display: flex;
      align-items: baseline;
      gap: 2px;
      padding: 7px 12px;
      border-radius: 12px;
      background: rgba(0, 229, 255, 0.14);
      border: 1px solid rgba(0, 229, 255, 0.35);
      color: #38ecff;
      flex-shrink: 0;
    }

    .comment-score-pill.critic {
      background: rgba(255, 51, 102, 0.16);
      border-color: rgba(255, 51, 102, 0.4);
      color: #ff5c85;
    }

    .score-num {
      font-size: 1.15rem;
      font-weight: 800;
    }

    .score-ten {
      font-size: 0.72rem;
      opacity: 0.75;
    }

    .comment-headline {
      margin: 0;
      font-size: 0.98rem;
      font-weight: 800;
      color: #f5c518;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .comment-body {
      margin: 0;
      font-size: 0.91rem;
      line-height: 1.6;
      color: #e2e8f0;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
      word-break: break-word;
    }

    .spoiler-warning {
      padding: 12px;
      border-radius: 12px;
      background: rgba(245, 158, 11, 0.14);
      border: 1px solid rgba(245, 158, 11, 0.35);
      color: #fbbf24;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      font-size: 0.82rem;
    }

    .spoiler-warning button {
      border: none;
      background: #fbbf24;
      color: #08090e;
      font-weight: 800;
      padding: 6px 12px;
      border-radius: 8px;
      cursor: pointer;
      flex-shrink: 0;
    }

    .comment-actions-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding-top: 8px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
    }

    .sentiment-tag {
      font-size: 0.74rem;
      color: #94a3b8;
      font-weight: 600;
    }

    .crud-btns {
      display: flex;
      gap: 8px;
    }

    .crud-action-btn {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.04);
      color: #cbd5e1;
      font-size: 0.74rem;
      font-weight: 700;
      padding: 5px 12px;
      border-radius: 8px;
      cursor: pointer;
    }

    .crud-action-btn.edit:hover {
      border-color: #f5c518;
      color: #f5c518;
    }

    .crud-action-btn.delete:hover {
      border-color: #ef4444;
      color: #f87171;
    }

    .loading-detail {
      padding: 150px 20px;
      text-align: center;
      color: #94a3b8;
    }

    @media (max-width: 768px) {
      .detail-wrapper {
        padding: calc(60px + env(safe-area-inset-top)) 12px calc(110px + env(safe-area-inset-bottom));
        gap: 16px;
      }
      .backdrop-hero { padding: 16px 14px 22px; border-radius: 0 0 24px 24px; }
      .top-nav-row { margin-bottom: 16px; }
      .db-saved-pill { display: none; }
      .hero-main-grid { grid-template-columns: minmax(0, 1fr); gap: 18px; }
      .poster-column { max-width: 190px; margin: 0 auto; }
      .detail-title { font-size: 1.65rem; text-align: center; }
      .original-title, .tagline { text-align: center; }
      .genre-tags-row { justify-content: center; }
      .quick-specs-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .ratings-comparison-section, .cast-panel, .gallery-panel, .composer-card { padding: 15px; }
      .comp-title { font-size: 1.1rem; }
      .comp-cards-grid { grid-template-columns: minmax(0, 1fr); gap: 12px; }
      .big-score { font-size: 2.1rem; }
      .actor-card { width: 118px; flex: 0 0 118px; padding: 10px 8px; }
      .actors-full-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
      .thumb-item { flex: 0 0 190px; }
      .score-buttons-row { grid-template-columns: repeat(5, 1fr); }
      .composer-footer { flex-direction: column; align-items: stretch; }
      .composer-btns { flex-direction: column; }
      .btn-submit-review, .btn-cancel-edit { width: 100%; padding: 14px; }
      .editorial-headline-input, .editorial-textarea { font-size: 16px; }
      .feed-filter-tabs { width: 100%; overflow-x: auto; }
      .feed-tab { flex: 1; white-space: nowrap; padding: 8px 10px; }
      .comment-card { padding: 14px; }
      .author-avatar { width: 36px; height: 36px; font-size: 0.78rem; }
    }

    @media (max-width: 420px) {
      .quick-specs-grid { grid-template-columns: minmax(0, 1fr); }
    }
  `]
})
export class MovieDetailPage implements OnInit {
  @ViewChild('actorsCarousel') actorsCarousel?: ElementRef<HTMLDivElement>;

  readonly MAX_HEADLINE = 90;
  readonly MAX_REVIEW_TEXT = 500;

  movie: MovieItem | null = null;
  comments: CommentItem[] = [];
  commentRoleFilter: 'all' | 'critic' | 'normal' = 'all';
  selectedBackdrop = '';
  currentUser: UserProfile | null = null;
  showAllActorsGrid = false;

  editingCommentId: string | null = null;
  submittingReview = false;
  feedbackMsg = '';
  feedbackError = false;
  revealedSpoilers: Record<string, boolean> = {};

  reviewForm = {
    score: 9,
    headline: '',
    text: '',
    containsSpoilers: false
  };

  quickPhrases = [
    'Obra maestra visual y narrativa',
    'Entretenimiento puro de principio a fin',
    'Actuaciones memorables y gran guion',
    'Visualmente impecable pero ritmo denso',
    'Superó todas mis expectativas'
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public cotufera: CotuferaService
  ) {}

  ngOnInit(): void {
    this.cotufera.currentUser$.subscribe(u => {
      this.currentUser = u;
    });

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      const type = this.route.snapshot.queryParamMap.get('type') || 'movie';
      if (id) {
        this.loadMovieAndComments(id, type);
      }
    });
  }

  get filteredComments(): CommentItem[] {
    if (this.commentRoleFilter === 'all') return this.comments;
    return this.comments.filter(c => (c.userId?.role || 'normal') === this.commentRoleFilter);
  }

  get criticCommentsCount(): number {
    return this.comments.filter(c => c.userId?.role === 'critic').length;
  }

  get normalCommentsCount(): number {
    return this.comments.filter(c => c.userId?.role !== 'critic').length;
  }

  scrollActors(direction: -1 | 1): void {
    const el = this.actorsCarousel?.nativeElement;
    if (!el) return;
    el.scrollBy({ left: direction * 260, behavior: 'smooth' });
  }

  loadMovieAndComments(tmdbId: number, type: string): void {
    this.cotufera.getMovieById(tmdbId, type).subscribe({
      next: m => {
        this.movie = m;
        this.selectedBackdrop = m.backdropUrl || m.coverUrl;
      }
    });

    this.loadComments(tmdbId);
  }

  loadComments(tmdbId: number): void {
    this.cotufera.getMovieComments(tmdbId, 'all').subscribe({
      next: list => {
        this.comments = list;
      }
    });
  }

  setCommentFilter(role: 'all' | 'critic' | 'normal'): void {
    this.commentRoleFilter = role;
  }

  getComparisonVerdict(): string {
    if (!this.movie?.stats) return 'Sin suficientes calificaciones aún';
    const c = this.movie.stats.criticScore || 0;
    const n = this.movie.stats.normalScore || 0;
    if (!c && !n) return 'Sé el primero en inaugurar el marcador';
    if (c > 0 && n === 0) return 'Calificada por Críticos · Esperando audiencia';
    if (n > 0 && c === 0) return 'Calificada por Usuarios · Esperando críticos';

    const diff = Number((c - n).toFixed(1));
    if (Math.abs(diff) <= 0.8) {
      return `Consenso Unánime (Diferencia de ${Math.abs(diff)} pts)`;
    }
    if (diff > 0) {
      return `Preferida por los Críticos (+${diff} pts sobre Usuarios)`;
    }
    return `Favorita de los Usuarios Normales (+${Math.abs(diff)} pts sobre Críticos)`;
  }

  isMine(comment: CommentItem): boolean {
    const authorId = comment.userId?._id || comment.userId;
    return !!this.currentUser && String(authorId) === String(this.currentUser._id);
  }

  goLogin(): void {
    this.router.navigate(['/perfil']);
  }

  submitReview(): void {
    if (!this.movie) return;
    const cleanText = this.reviewForm.text.trim();
    if (!cleanText) {
      this.feedbackError = true;
      this.feedbackMsg = 'Por favor escribe tu opinión antes de publicar.';
      return;
    }
    if (cleanText.length > this.MAX_REVIEW_TEXT) {
      this.feedbackError = true;
      this.feedbackMsg = `Tu reseña no puede superar los ${this.MAX_REVIEW_TEXT} caracteres.`;
      return;
    }

    this.submittingReview = true;
    this.feedbackMsg = '';
    this.feedbackError = false;

    const cleanHeadline = this.reviewForm.headline.trim().slice(0, this.MAX_HEADLINE);

    if (this.editingCommentId) {
      this.cotufera
        .updateComment(this.editingCommentId, {
          score: this.reviewForm.score,
          headline: cleanHeadline,
          text: cleanText,
          containsSpoilers: this.reviewForm.containsSpoilers
        })
        .subscribe({
          next: res => {
            this.submittingReview = false;
            this.editingCommentId = null;
            if (res.movieStats && this.movie) {
              this.movie.stats = res.movieStats;
            }
            this.resetForm();
            this.loadComments(this.movie!.tmdbId);
            this.feedbackMsg = 'Reseña actualizada y promedios recalculados al instante.';
          },
          error: err => {
            this.submittingReview = false;
            this.feedbackError = true;
            this.feedbackMsg = err.error?.message || 'No se pudo actualizar la reseña.';
          }
        });
    } else {
      this.cotufera
        .createComment(this.movie.tmdbId, {
          score: this.reviewForm.score,
          headline: cleanHeadline,
          text: cleanText,
          containsSpoilers: this.reviewForm.containsSpoilers,
          mediaType: this.movie.mediaType
        })
        .subscribe({
          next: res => {
            this.submittingReview = false;
            if (res.movieStats && this.movie) {
              this.movie.stats = res.movieStats;
            }
            this.resetForm();
            this.loadComments(this.movie!.tmdbId);
            this.feedbackMsg = 'Tu reseña y puntaje se han publicado. Los promedios de Críticos y Usuarios se actualizaron.';
          },
          error: err => {
            this.submittingReview = false;
            this.feedbackError = true;
            this.feedbackMsg = err.error?.message || 'Error publicando la reseña.';
          }
        });
    }
  }

  startEditComment(comment: CommentItem): void {
    this.editingCommentId = comment._id;
    this.reviewForm = {
      score: comment.score,
      headline: (comment.headline || '').slice(0, this.MAX_HEADLINE),
      text: (comment.text || '').slice(0, this.MAX_REVIEW_TEXT),
      containsSpoilers: Boolean(comment.containsSpoilers)
    };
    this.feedbackMsg = 'Editando reseña seleccionada. Modifica el puntaje o texto y guarda los cambios.';
    this.feedbackError = false;
  }

  cancelEdit(): void {
    this.editingCommentId = null;
    this.resetForm();
    this.feedbackMsg = '';
  }

  removeComment(comment: CommentItem): void {
    this.cotufera.deleteComment(comment._id).subscribe({
      next: res => {
        if (res.movieStats && this.movie) {
          this.movie.stats = res.movieStats;
        }
        this.comments = this.comments.filter(c => c._id !== comment._id);
        this.feedbackError = false;
        this.feedbackMsg = 'Reseña eliminada y promedios recalculados.';
      }
    });
  }

  private resetForm(): void {
    this.reviewForm = {
      score: 9,
      headline: '',
      text: '',
      containsSpoilers: false
    };
  }

  goBack(): void {
    this.router.navigate(['/explorar']);
  }
}
