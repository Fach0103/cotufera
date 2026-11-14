import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { CotuferaService } from '../../services/cotufera.service';
import { CatalogMeta, MovieFilters, MovieItem } from '../../models/cotufera.models';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonIcon],
  template: `
    <ion-content [fullscreen]="true">
      <div class="explore-wrapper">

        <!-- HERO BANNER CINEMATOGRÁFICO -->
        <section class="hero-showcase" *ngIf="featuredMovie"
          [style.backgroundImage]="'linear-gradient(90deg, rgba(8,9,14,0.96) 0%, rgba(8,9,14,0.78) 52%, rgba(8,9,14,0.35) 100%), linear-gradient(180deg, rgba(8,9,14,0.2) 0%, #08090e 100%), url(' + (featuredMovie.backdropUrl || featuredMovie.coverUrl) + ')'">

          <div class="hero-content">
            <div class="hero-badges">
              <span class="media-pill" [class.tv]="featuredMovie.mediaType === 'tv'">
                <ion-icon [name]="featuredMovie.mediaType === 'tv' ? 'tv-outline' : 'film-outline'"></ion-icon>
                <span>{{ featuredMovie.mediaType === 'tv' ? 'SERIE DESTACADA' : 'PELÍCULA DESTACADA' }}</span>
              </span>
              <span class="year-pill">{{ featuredMovie.releaseDate | slice:0:4 }}</span>
              <span class="genre-pill" *ngFor="let g of featuredMovie.genres.slice(0, 3)">{{ g }}</span>
            </div>

            <h1 class="hero-title font-display">{{ featuredMovie.title }}</h1>
            <p class="hero-synopsis">{{ featuredMovie.synopsis }}</p>

            <!-- Comparativa destacada Críticos vs Usuarios Normales en el Hero -->
            <div class="hero-rating-split">
              <div class="split-box total">
                <span class="split-tag gold">GENERAL</span>
                <div>
                  <div class="split-val">{{ featuredMovie.stats?.averageScore || 'S/C' }}<small>/10</small></div>
                  <div class="split-lbl">{{ featuredMovie.stats?.totalReviews || 0 }} reseñas</div>
                </div>
              </div>

              <div class="split-box critic">
                <span class="split-tag crimson">CRÍTICOS</span>
                <div>
                  <div class="split-val">{{ featuredMovie.stats?.criticScore || '—' }}<small>/10</small></div>
                  <div class="split-lbl">{{ featuredMovie.stats?.criticCount || 0 }} críticos</div>
                </div>
              </div>

              <div class="split-box normal">
                <span class="split-tag cyan">USUARIOS</span>
                <div>
                  <div class="split-val">{{ featuredMovie.stats?.normalScore || '—' }}<small>/10</small></div>
                  <div class="split-lbl">{{ featuredMovie.stats?.normalCount || 0 }} usuarios</div>
                </div>
              </div>
            </div>

            <div class="hero-actions">
              <button type="button" class="btn-primary-gold" (click)="openMovie(featuredMovie)">
                <span>Ver Ficha, Reparto y Reseñas</span>
              </button>
              <button type="button" class="btn-glass-cycle" (click)="nextFeatured()" *ngIf="movies.length > 1">
                <span>Siguiente destacada</span>
              </button>
            </div>
          </div>

          <div class="hero-poster-preview" (click)="openMovie(featuredMovie)">
            <img [src]="featuredMovie.coverUrl" [alt]="featuredMovie.title" />
          </div>
        </section>

        <!-- PANEL DE BÚSQUEDA, CONEXIÓN TMDB, FILTROS Y SORTING -->
        <section class="control-hub glass-panel">
          <div class="search-row">
            <div class="search-box">
              <ion-icon name="search-outline" class="search-icon"></ion-icon>
              <input
                type="text"
                maxlength="80"
                [(ngModel)]="filters.title"
                (keyup.enter)="applyFilters()"
                (ngModelChange)="onSearchInput()"
                placeholder="Buscar película, serie, actor o director..."
                class="search-input" />
              <button
                *ngIf="filters.title"
                type="button"
                class="clear-search-btn"
                (click)="clearSearch()">✕</button>
            </div>

            <button
              type="button"
              class="tmdb-sync-btn"
              [disabled]="syncingTmdb"
              (click)="syncFromTmdb()">
              <ion-icon name="cloud-download-outline"></ion-icon>
              <span>{{ syncingTmdb ? 'Sincronizando...' : 'Importar de TMDB' }}</span>
            </button>

            <button
              type="button"
              class="filter-toggle-btn"
              [class.active]="showAdvancedFilters"
              (click)="showAdvancedFilters = !showAdvancedFilters">
              <ion-icon name="options-outline"></ion-icon>
              <span>Filtros Avanzados</span>
              <span class="filter-count-dot" *ngIf="activeFilterCount > 0">{{ activeFilterCount }}</span>
            </button>
          </div>

          <!-- Notificación de sincronización con TMDB -->
          <div class="sync-banner" *ngIf="syncFeedback">
            <span>{{ syncFeedback }}</span>
            <button type="button" (click)="syncFeedback = ''">✕</button>
          </div>

          <!-- Selector de Tipo (Todos / Películas / Series) + Ordenamiento (Sorting por Puntaje o Fecha) -->
          <div class="primary-controls-row">
            <div class="type-pills">
              <button
                type="button"
                class="type-pill"
                [class.selected]="filters.mediaType === 'all'"
                (click)="setMediaType('all')">
                Todo ({{ meta?.totalCatalog || movies.length }})
              </button>
              <button
                type="button"
                class="type-pill"
                [class.selected]="filters.mediaType === 'movie'"
                (click)="setMediaType('movie')">
                Películas
              </button>
              <button
                type="button"
                class="type-pill"
                [class.selected]="filters.mediaType === 'tv'"
                (click)="setMediaType('tv')">
                Series
              </button>
            </div>

            <!-- SORTING: El usuario elige ordenar entre Puntaje o Fecha -->
            <div class="sorting-bar">
              <span class="sort-label">Ordenar por:</span>
              <div class="sort-pills touch-carousel">
                <button
                  type="button"
                  class="sort-pill"
                  [class.active]="filters.sortBy === 'score'"
                  (click)="setSortBy('score')">
                  Puntaje General
                </button>
                <button
                  type="button"
                  class="sort-pill critic-sort"
                  [class.active]="filters.sortBy === 'criticScore'"
                  (click)="setSortBy('criticScore')">
                  Puntaje Críticos
                </button>
                <button
                  type="button"
                  class="sort-pill normal-sort"
                  [class.active]="filters.sortBy === 'normalScore'"
                  (click)="setSortBy('normalScore')">
                  Puntaje Usuarios
                </button>
                <button
                  type="button"
                  class="sort-pill"
                  [class.active]="filters.sortBy === 'date'"
                  (click)="setSortBy('date')">
                  Fecha Estreno
                </button>
                <button
                  type="button"
                  class="sort-direction-btn"
                  (click)="toggleSortOrder()"
                  [title]="filters.sortOrder === 'desc' ? 'Descendente (Mayor a menor)' : 'Ascendente (Menor a mayor)'">
                  {{ filters.sortOrder === 'desc' ? 'Descendente' : 'Ascendente' }}
                </button>
              </div>
            </div>
          </div>

          <!-- Carrusel horizontal de Categorías / Géneros (Acción, Drama, Misterio, etc.) -->
          <div class="category-carousel touch-carousel">
            <button
              type="button"
              *ngFor="let cat of categories"
              class="cat-chip"
              [class.active]="filters.category === cat.value"
              (click)="setCategory(cat.value)">
              <span>{{ cat.label }}</span>
            </button>
          </div>

          <!-- Panel desplegable de Filtros por Fecha/Año y Puntuación Mínima -->
          <div class="advanced-filters-drawer" *ngIf="showAdvancedFilters">
            <div class="adv-group">
              <label class="adv-title">Filtrar por Año de Publicación</label>
              <div class="pill-group">
                <button
                  type="button"
                  class="mini-pill"
                  [class.active]="!filters.year || filters.year === 'Todos'"
                  (click)="setYear('Todos')">
                  Todos
                </button>
                <button
                  type="button"
                  *ngFor="let y of availableYears"
                  class="mini-pill"
                  [class.active]="filters.year === y"
                  (click)="setYear(y)">
                  {{ y }}
                </button>
              </div>
            </div>

            <div class="adv-group">
              <label class="adv-title">Puntuación Mínima Requerida</label>
              <div class="pill-group">
                <button
                  type="button"
                  *ngFor="let s of scoreThresholds"
                  class="mini-pill"
                  [class.active]="(filters.minScore || 0) === s.value"
                  (click)="setMinScore(s.value)">
                  {{ s.label }}
                </button>
              </div>
            </div>

            <div class="adv-group">
              <label class="adv-title">Aplicar Filtro de Puntaje Sobre</label>
              <div class="pill-group">
                <button
                  type="button"
                  class="mini-pill"
                  [class.active]="filters.scoreType === 'average'"
                  (click)="setScoreType('average')">
                  Promedio General
                </button>
                <button
                  type="button"
                  class="mini-pill critic"
                  [class.active]="filters.scoreType === 'critic'"
                  (click)="setScoreType('critic')">
                  Solo Críticos
                </button>
                <button
                  type="button"
                  class="mini-pill normal"
                  [class.active]="filters.scoreType === 'normal'"
                  (click)="setScoreType('normal')">
                  Solo Usuarios Normales
                </button>
              </div>
            </div>

            <div class="adv-footer">
              <span class="results-counter">Mostrando {{ movies.length }} títulos en catálogo</span>
              <button type="button" class="reset-filters-btn" (click)="resetFilters()">
                Limpiar todos los filtros
              </button>
            </div>
          </div>
        </section>

        <!-- ESTADO DE CARGA -->
        <div class="loading-grid" *ngIf="loading">
          <div class="skeleton-card" *ngFor="let i of [1,2,3,4,5,6,7,8]"></div>
        </div>

        <!-- ESTADO SIN RESULTADOS + IMPORTACIÓN DIRECTA DE TMDB -->
        <div class="empty-catalog glass-panel" *ngIf="!loading && movies.length === 0">
          <ion-icon name="film-outline" class="empty-icon"></ion-icon>
          <h3>No encontramos títulos con esos filtros</h3>
          <p>Puedes buscar cualquier película o serie real en TMDB para agregarla automáticamente a la base de datos o limpiar los filtros activos.</p>
          <div class="empty-actions">
            <button
              *ngIf="filters.title"
              type="button"
              class="btn-primary-gold"
              (click)="syncFromTmdb()">
              Buscar "{{ filters.title }}" en TMDB y Guardar
            </button>
            <button type="button" class="btn-glass-cycle" (click)="resetFilters()">
              Ver todo el catálogo
            </button>
          </div>
        </div>

        <!-- CATÁLOGO VISUAL DE PELÍCULAS Y SERIES -->
        <section class="movies-grid" *ngIf="!loading && movies.length > 0">
          <article
            class="movie-card"
            *ngFor="let movie of movies"
            (click)="openMovie(movie)">

            <div class="poster-container">
              <img [src]="movie.coverUrl" [alt]="movie.title" loading="lazy" class="poster-img" />
              <div class="poster-overlay">
                <span class="view-cta">Ver Detalles y Opiniones</span>
              </div>

              <span class="card-type-badge" [class.series]="movie.mediaType === 'tv'">
                {{ movie.mediaType === 'tv' ? 'SERIE' : 'PELÍCULA' }}
              </span>

              <span class="card-total-score">
                <ion-icon name="star"></ion-icon>
                <span>{{ movie.stats?.averageScore ? movie.stats.averageScore : 'S/C' }}</span>
              </span>
            </div>

            <div class="card-body">
              <div class="card-meta-top">
                <span class="card-year">{{ movie.releaseDate | slice:0:4 }}</span>
                <span class="card-dot">•</span>
                <span class="card-genres">{{ movie.genres.slice(0, 2).join(' / ') }}</span>
              </div>

              <h3 class="card-title" [title]="movie.title">{{ movie.title }}</h3>

              <!-- Barra dual de comparación: Críticos vs Usuarios Normales -->
              <div class="dual-score-strip">
                <div class="score-chip critic" title="Promedio de Críticos Especializados">
                  <div class="chip-info">
                    <span class="chip-role">Críticos</span>
                    <span class="chip-num">{{ movie.stats?.criticScore ? movie.stats.criticScore + '/10' : 'S/C' }}</span>
                  </div>
                </div>

                <div class="score-divider"></div>

                <div class="score-chip normal" title="Promedio de Usuarios Normales">
                  <div class="chip-info">
                    <span class="chip-role">Usuarios</span>
                    <span class="chip-num">{{ movie.stats?.normalScore ? movie.stats.normalScore + '/10' : 'S/C' }}</span>
                  </div>
                </div>
              </div>

              <div class="card-footer-info">
                <span class="reviews-count">{{ movie.stats?.totalReviews || 0 }} reseñas</span>
                <span class="consensus-indicator" *ngIf="movie.stats?.criticCount && movie.stats?.normalCount">
                  {{ getGapBadge(movie) }}
                </span>
              </div>
            </div>
          </article>
        </section>

      </div>
    </ion-content>
  `,
  styles: [`
    .explore-wrapper {
      max-width: 1240px;
      margin: 0 auto;
      padding: 82px 16px 110px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      min-width: 0;
    }

    /* HERO SHOWCASE */
    .hero-showcase {
      position: relative;
      border-radius: 28px;
      overflow: hidden;
      min-height: 390px;
      background-size: cover;
      background-position: center;
      border: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 34px;
      gap: 28px;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
    }

    .hero-content {
      max-width: 680px;
      min-width: 0;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .hero-badges {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
    }

    .media-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 12px;
      border-radius: 999px;
      font-size: 0.7rem;
      font-weight: 800;
      letter-spacing: 0.06em;
      background: rgba(245, 197, 24, 0.2);
      color: #f5c518;
      border: 1px solid rgba(245, 197, 24, 0.4);
    }

    .media-pill.tv {
      background: rgba(0, 229, 255, 0.18);
      color: #38ecff;
      border-color: rgba(0, 229, 255, 0.4);
    }

    .year-pill, .genre-pill {
      padding: 4px 11px;
      border-radius: 999px;
      font-size: 0.72rem;
      font-weight: 600;
      background: rgba(255, 255, 255, 0.09);
      color: #e2e8f0;
      backdrop-filter: blur(8px);
    }

    .hero-title {
      font-size: clamp(1.7rem, 3.5vw, 2.7rem);
      font-weight: 800;
      margin: 0;
      line-height: 1.08;
      color: #ffffff;
      text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
    }

    .hero-synopsis {
      margin: 0;
      font-size: 0.94rem;
      line-height: 1.55;
      color: #cbd5e1;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .hero-rating-split {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 4px;
    }

    .split-box {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 10px 16px;
      border-radius: 16px;
      background: rgba(15, 18, 28, 0.82);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      min-width: 118px;
    }

    .split-box.total {
      border-color: rgba(245, 197, 24, 0.4);
    }

    .split-box.critic {
      border-color: rgba(255, 51, 102, 0.42);
      background: rgba(255, 51, 102, 0.1);
    }

    .split-box.normal {
      border-color: rgba(0, 229, 255, 0.38);
      background: rgba(0, 229, 255, 0.09);
    }

    .split-tag {
      font-size: 0.62rem;
      font-weight: 800;
      letter-spacing: 0.08em;
    }

    .split-tag.gold { color: #f5c518; }
    .split-tag.crimson { color: #ff5c85; }
    .split-tag.cyan { color: #38ecff; }

    .split-val {
      font-size: 1.2rem;
      font-weight: 800;
      color: #fff;
      line-height: 1.1;
    }

    .split-val small {
      font-size: 0.72rem;
      font-weight: 600;
      opacity: 0.7;
    }

    .split-lbl {
      font-size: 0.68rem;
      color: #94a3b8;
      font-weight: 600;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 6px;
    }

    .btn-primary-gold {
      border: none;
      background: linear-gradient(135deg, #f5c518 0%, #e09f00 100%);
      color: #08090e;
      font-weight: 800;
      font-size: 0.88rem;
      padding: 12px 22px;
      border-radius: 14px;
      cursor: pointer;
      box-shadow: 0 8px 24px rgba(245, 197, 24, 0.3);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .btn-glass-cycle {
      border: 1px solid rgba(255, 255, 255, 0.18);
      background: rgba(255, 255, 255, 0.07);
      color: #f8fafc;
      font-weight: 700;
      font-size: 0.85rem;
      padding: 12px 18px;
      border-radius: 14px;
      cursor: pointer;
      backdrop-filter: blur(10px);
    }

    .hero-poster-preview {
      width: 195px;
      flex-shrink: 0;
      border-radius: 18px;
      overflow: hidden;
      border: 2px solid rgba(255, 255, 255, 0.16);
      box-shadow: 0 20px 44px rgba(0, 0, 0, 0.75);
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .hero-poster-preview img {
      width: 100%;
      display: block;
    }

    /* CONTROL HUB */
    .control-hub {
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      min-width: 0;
    }

    .search-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .search-box {
      flex: 1;
      min-width: 240px;
      position: relative;
      display: flex;
      align-items: center;
      background: rgba(8, 9, 14, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 16px;
      padding: 0 14px;
    }

    .search-box:focus-within {
      border-color: #f5c518;
      box-shadow: 0 0 0 3px rgba(245, 197, 24, 0.15);
    }

    .search-icon {
      font-size: 1.1rem;
      color: #94a3b8;
      margin-right: 10px;
      flex-shrink: 0;
    }

    .search-input {
      width: 100%;
      border: none;
      background: transparent;
      color: #f8fafc;
      font-size: 0.9rem;
      padding: 13px 0;
      outline: none;
    }

    .clear-search-btn {
      border: none;
      background: rgba(255, 255, 255, 0.1);
      color: #cbd5e1;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 0.75rem;
      flex-shrink: 0;
    }

    .tmdb-sync-btn {
      border: 1px solid rgba(0, 229, 255, 0.38);
      background: linear-gradient(135deg, rgba(0, 229, 255, 0.18), rgba(0, 229, 255, 0.06));
      color: #38ecff;
      font-weight: 700;
      font-size: 0.82rem;
      padding: 12px 16px;
      border-radius: 16px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .filter-toggle-btn {
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(255, 255, 255, 0.05);
      color: #e2e8f0;
      font-weight: 700;
      font-size: 0.82rem;
      padding: 12px 16px;
      border-radius: 16px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .filter-toggle-btn.active {
      border-color: #f5c518;
      color: #f5c518;
      background: rgba(245, 197, 24, 0.12);
    }

    .filter-count-dot {
      background: #f5c518;
      color: #090a0f;
      font-size: 0.7rem;
      font-weight: 800;
      padding: 2px 7px;
      border-radius: 999px;
    }

    .sync-banner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 10px 16px;
      border-radius: 12px;
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid rgba(16, 185, 129, 0.35);
      color: #34d399;
      font-size: 0.84rem;
      font-weight: 600;
    }

    .sync-banner button {
      background: transparent;
      border: none;
      color: #34d399;
      cursor: pointer;
    }

    .primary-controls-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      min-width: 0;
    }

    .type-pills {
      display: flex;
      gap: 6px;
      background: rgba(8, 9, 14, 0.6);
      padding: 4px;
      border-radius: 14px;
      border: 1px solid rgba(255, 255, 255, 0.07);
    }

    .type-pill {
      border: none;
      background: transparent;
      color: #94a3b8;
      font-weight: 700;
      font-size: 0.8rem;
      padding: 8px 14px;
      border-radius: 10px;
      cursor: pointer;
    }

    .type-pill.selected {
      background: rgba(245, 197, 24, 0.2);
      color: #f5c518;
    }

    .sorting-bar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      min-width: 0;
      max-width: 100%;
    }

    .sort-label {
      font-size: 0.78rem;
      color: #94a3b8;
      font-weight: 700;
    }

    .sort-pills {
      display: flex;
      gap: 6px;
      padding-bottom: 4px;
    }

    .sort-pill {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.04);
      color: #cbd5e1;
      font-size: 0.76rem;
      font-weight: 700;
      padding: 7px 13px;
      border-radius: 999px;
      cursor: pointer;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .sort-pill.active {
      background: rgba(245, 197, 24, 0.22);
      border-color: #f5c518;
      color: #f5c518;
    }

    .sort-pill.critic-sort.active {
      background: rgba(255, 51, 102, 0.22);
      border-color: #ff3366;
      color: #ff6b93;
    }

    .sort-pill.normal-sort.active {
      background: rgba(0, 229, 255, 0.2);
      border-color: #00e5ff;
      color: #38ecff;
    }

    .sort-direction-btn {
      border: 1px solid rgba(245, 197, 24, 0.32);
      background: rgba(245, 197, 24, 0.1);
      color: #f5c518;
      font-size: 0.75rem;
      font-weight: 800;
      padding: 7px 13px;
      border-radius: 999px;
      cursor: pointer;
      white-space: nowrap;
      flex-shrink: 0;
    }

    /* CARRUSEL DE CATEGORÍAS */
    .category-carousel {
      display: flex;
      gap: 8px;
      padding-bottom: 6px;
    }

    .cat-chip {
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      padding: 8px 15px;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.09);
      background: rgba(255, 255, 255, 0.04);
      color: #cbd5e1;
      font-size: 0.8rem;
      font-weight: 700;
      cursor: pointer;
      scroll-snap-align: start;
    }

    .cat-chip.active {
      background: linear-gradient(135deg, #f5c518 0%, #d99b00 100%);
      color: #090a0f;
      border-color: #f5c518;
      box-shadow: 0 4px 14px rgba(245, 197, 24, 0.3);
    }

    /* ADVANCED FILTERS DRAWER */
    .advanced-filters-drawer {
      padding-top: 14px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .adv-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .adv-title {
      font-size: 0.74rem;
      font-weight: 700;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .pill-group {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
    }

    .mini-pill {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.04);
      color: #cbd5e1;
      font-size: 0.76rem;
      font-weight: 700;
      padding: 6px 12px;
      border-radius: 10px;
      cursor: pointer;
    }

    .mini-pill.active {
      background: rgba(245, 197, 24, 0.2);
      border-color: #f5c518;
      color: #f5c518;
    }

    .mini-pill.critic.active {
      background: rgba(255, 51, 102, 0.22);
      border-color: #ff3366;
      color: #ff6b93;
    }

    .mini-pill.normal.active {
      background: rgba(0, 229, 255, 0.2);
      border-color: #00e5ff;
      color: #38ecff;
    }

    .adv-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 6px;
    }

    .results-counter {
      font-size: 0.8rem;
      color: #94a3b8;
      font-weight: 600;
    }

    .reset-filters-btn {
      border: none;
      background: transparent;
      color: #ff5c85;
      font-size: 0.8rem;
      font-weight: 700;
      cursor: pointer;
      text-decoration: underline;
    }

    /* GRID DE PELÍCULAS Y SERIES */
    .movies-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
      gap: 22px;
    }

    .movie-card {
      background: rgba(18, 21, 34, 0.82);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 22px;
      overflow: hidden;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      min-width: 0;
      transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.28s ease;
    }

    .movie-card:hover {
      transform: translateY(-5px);
      border-color: rgba(245, 197, 24, 0.45);
    }

    .poster-container {
      position: relative;
      aspect-ratio: 2 / 3;
      width: 100%;
      overflow: hidden;
      background: #121521;
    }

    .poster-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .poster-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 50%, rgba(8, 9, 14, 0.92) 100%);
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding: 16px;
      opacity: 0;
      transition: opacity 0.25s ease;
    }

    .movie-card:hover .poster-overlay {
      opacity: 1;
    }

    .view-cta {
      font-size: 0.76rem;
      font-weight: 800;
      color: #f5c518;
      background: rgba(8, 9, 14, 0.88);
      padding: 7px 14px;
      border-radius: 999px;
      border: 1px solid rgba(245, 197, 24, 0.4);
    }

    .card-type-badge {
      position: absolute;
      top: 10px;
      left: 10px;
      padding: 4px 9px;
      border-radius: 8px;
      font-size: 0.63rem;
      font-weight: 800;
      letter-spacing: 0.06em;
      background: rgba(8, 9, 14, 0.84);
      color: #f5c518;
      backdrop-filter: blur(8px);
      border: 1px solid rgba(245, 197, 24, 0.35);
    }

    .card-type-badge.series {
      color: #38ecff;
      border-color: rgba(0, 229, 255, 0.35);
    }

    .card-total-score {
      position: absolute;
      top: 10px;
      right: 10px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 9px;
      border-radius: 10px;
      font-size: 0.76rem;
      font-weight: 800;
      background: rgba(8, 9, 14, 0.86);
      color: #f5c518;
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.15);
    }

    .card-body {
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 9px;
      flex: 1;
      min-width: 0;
    }

    .card-meta-top {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.72rem;
      color: #94a3b8;
      font-weight: 600;
      min-width: 0;
    }

    .card-genres {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .card-title {
      margin: 0;
      font-size: 0.96rem;
      font-weight: 800;
      color: #f8fafc;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 1.25;
    }

    .dual-score-strip {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(8, 9, 14, 0.65);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: 12px;
      padding: 8px 10px;
      margin-top: auto;
    }

    .score-chip {
      display: flex;
      align-items: center;
    }

    .chip-info {
      display: flex;
      flex-direction: column;
      line-height: 1.15;
    }

    .chip-role {
      font-size: 0.6rem;
      color: #94a3b8;
      font-weight: 700;
      text-transform: uppercase;
    }

    .score-chip.critic .chip-num {
      font-size: 0.8rem;
      font-weight: 800;
      color: #ff5c85;
    }

    .score-chip.normal .chip-num {
      font-size: 0.8rem;
      font-weight: 800;
      color: #38ecff;
    }

    .score-divider {
      width: 1px;
      height: 22px;
      background: rgba(255, 255, 255, 0.08);
    }

    .card-footer-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.7rem;
      color: #64748b;
      font-weight: 600;
    }

    .consensus-indicator {
      color: #f5c518;
      font-weight: 700;
    }

    .loading-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
      gap: 22px;
    }

    .skeleton-card {
      height: 410px;
      border-radius: 22px;
      background: linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }

    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    .empty-catalog {
      padding: 44px 22px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .empty-icon {
      font-size: 2.6rem;
      color: #f5c518;
    }

    .empty-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 8px;
    }

    @media (max-width: 768px) {
      .explore-wrapper {
        padding: calc(74px + env(safe-area-inset-top)) 12px calc(110px + env(safe-area-inset-bottom));
        gap: 16px;
      }
      .hero-poster-preview {
        display: none;
      }
      .hero-showcase {
        padding: 18px;
        min-height: 0;
        border-radius: 22px;
      }
      .hero-title { font-size: 1.55rem; }
      .hero-synopsis { font-size: 0.85rem; -webkit-line-clamp: 3; }
      .hero-rating-split { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
      .split-box { padding: 8px; min-width: 0; text-align: center; border-radius: 14px; }
      .split-val { font-size: 1rem; }
      .split-lbl { font-size: 0.6rem; }
      .hero-actions { flex-direction: column; }
      .hero-actions button { width: 100%; padding: 13px; }
      .btn-glass-cycle { display: none; }

      .control-hub { padding: 14px; gap: 12px; border-radius: 20px; }
      .search-row { flex-direction: column; }
      .search-box { min-width: 0; width: 100%; }
      .search-input { font-size: 16px; }
      .tmdb-sync-btn, .filter-toggle-btn { width: 100%; justify-content: center; }
      .primary-controls-row { flex-direction: column; align-items: stretch; }
      .type-pills { width: 100%; }
      .type-pill { flex: 1; padding: 9px 6px; }
      .sorting-bar { flex-direction: column; align-items: stretch; }
      .sort-pills { width: 100%; }
      .adv-footer { flex-direction: column; align-items: flex-start; gap: 8px; }

      .movies-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
      }
      .movie-card { border-radius: 18px; }
      .card-body { padding: 10px; gap: 8px; }
      .card-title { font-size: 0.86rem; }
      .card-type-badge { top: 8px; left: 8px; font-size: 0.58rem; padding: 3px 7px; }
      .card-total-score { top: 8px; right: 8px; font-size: 0.7rem; padding: 4px 7px; }
      .dual-score-strip { padding: 6px 8px; }
      .chip-role { font-size: 0.55rem; }
      .score-chip.critic .chip-num, .score-chip.normal .chip-num { font-size: 0.74rem; }
      .card-footer-info { flex-direction: column; align-items: flex-start; gap: 2px; font-size: 0.64rem; }
      .poster-overlay { display: none; }
      .loading-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
      .skeleton-card { height: 290px; }
    }
  `]
})
export class ExplorePage implements OnInit {
  movies: MovieItem[] = [];
  featuredMovie: MovieItem | null = null;
  featuredIndex = 0;
  meta: CatalogMeta | null = null;
  loading = true;
  syncingTmdb = false;
  syncFeedback = '';
  showAdvancedFilters = false;
  private searchTimer: any = null;

  filters: MovieFilters = {
    title: '',
    category: 'Todas',
    mediaType: 'all',
    year: 'Todos',
    minScore: 0,
    scoreType: 'average',
    sortBy: 'score',
    sortOrder: 'desc'
  };

  categories = [
    { label: 'Todas', value: 'Todas' },
    { label: 'Acción', value: 'Acción' },
    { label: 'Drama', value: 'Drama' },
    { label: 'Misterio', value: 'Misterio' },
    { label: 'Ciencia Ficción', value: 'Ciencia ficción' },
    { label: 'Comedia', value: 'Comedia' },
    { label: 'Thriller', value: 'Thriller' },
    { label: 'Crimen', value: 'Crimen' },
    { label: 'Animación', value: 'Animación' },
    { label: 'Aventura', value: 'Aventura' },
    { label: 'Terror', value: 'Terror' }
  ];

  availableYears = ['2024', '2023', '2022', '2021', '2019', '2017', '2014', '2008'];

  scoreThresholds = [
    { label: 'Todos los puntajes', value: 0 },
    { label: '6.0+ Buena', value: 6 },
    { label: '7.5+ Notable', value: 7.5 },
    { label: '8.5+ Aclamada', value: 8.5 },
    { label: '9.0+ Obra Maestra', value: 9 }
  ];

  constructor(
    private cotufera: CotuferaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cotufera.apiHost$.subscribe(() => {
      this.loadMeta();
      this.applyFilters(false);
    });
    this.loadMeta();
    this.applyFilters();
  }

  ionViewWillEnter(): void {
    this.applyFilters(false);
  }

  get activeFilterCount(): number {
    let count = 0;
    if (this.filters.category && this.filters.category !== 'Todas') count++;
    if (this.filters.mediaType && this.filters.mediaType !== 'all') count++;
    if (this.filters.year && this.filters.year !== 'Todos') count++;
    if (this.filters.minScore && this.filters.minScore > 0) count++;
    return count;
  }

  loadMeta(): void {
    this.cotufera.getCatalogMeta().subscribe({
      next: meta => {
        this.meta = meta;
        if (meta.years && meta.years.length > 0) {
          this.availableYears = meta.years;
        }
      }
    });
  }

  applyFilters(showSpinner = true): void {
    if (showSpinner) this.loading = true;
    this.cotufera.getMovies(this.filters).subscribe({
      next: list => {
        this.movies = list;
        if (this.movies.length > 0) {
          this.featuredIndex = 0;
          this.featuredMovie = this.movies[0];
        } else {
          this.featuredMovie = null;
        }
        this.loading = false;
      },
      error: async () => {
        const foundIp = await this.cotufera.autoDiscoverServer();
        if (!foundIp) {
          this.loading = false;
        }
      }
    });
  }

  onSearchInput(): void {
    if (this.searchTimer) clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.applyFilters(false);
    }, 350);
  }

  clearSearch(): void {
    this.filters.title = '';
    this.applyFilters();
  }

  syncFromTmdb(): void {
    const q = (this.filters.title || '').trim();
    if (!q) {
      this.syncFeedback = 'Escribe el nombre de una película o serie en el buscador para importarla desde TMDB.';
      return;
    }
    this.syncingTmdb = true;
    this.syncFeedback = '';
    const type = this.filters.mediaType === 'all' ? 'multi' : (this.filters.mediaType || 'multi');
    this.cotufera.discoverExternal(q, type).subscribe({
      next: imported => {
        this.syncingTmdb = false;
        this.syncFeedback = `Se sincronizaron y guardaron ${imported.length} títulos reales desde TMDB en la base de datos local.`;
        this.loadMeta();
        this.applyFilters(false);
      },
      error: () => {
        this.syncingTmdb = false;
      }
    });
  }

  setMediaType(type: 'all' | 'movie' | 'tv'): void {
    this.filters.mediaType = type;
    this.applyFilters();
  }

  setCategory(cat: string): void {
    this.filters.category = cat;
    this.applyFilters();
  }

  setSortBy(sort: 'date' | 'score' | 'criticScore' | 'normalScore'): void {
    this.filters.sortBy = sort;
    this.applyFilters(false);
  }

  toggleSortOrder(): void {
    this.filters.sortOrder = this.filters.sortOrder === 'desc' ? 'asc' : 'desc';
    this.applyFilters(false);
  }

  setYear(year: string): void {
    this.filters.year = year;
    this.applyFilters();
  }

  setMinScore(score: number): void {
    this.filters.minScore = score;
    this.applyFilters();
  }

  setScoreType(type: 'average' | 'critic' | 'normal'): void {
    this.filters.scoreType = type;
    this.applyFilters();
  }

  resetFilters(): void {
    this.filters = {
      title: '',
      category: 'Todas',
      mediaType: 'all',
      year: 'Todos',
      minScore: 0,
      scoreType: 'average',
      sortBy: 'score',
      sortOrder: 'desc'
    };
    this.applyFilters();
  }

  nextFeatured(): void {
    if (this.movies.length <= 1) return;
    this.featuredIndex = (this.featuredIndex + 1) % Math.min(this.movies.length, 6);
    this.featuredMovie = this.movies[this.featuredIndex];
  }

  getGapBadge(movie: MovieItem): string {
    const c = movie.stats?.criticScore || 0;
    const n = movie.stats?.normalScore || 0;
    const diff = Math.abs(c - n);
    if (diff <= 0.8) return 'Consenso';
    if (c > n) return `+${(c - n).toFixed(1)} Crítica`;
    return `+${(n - c).toFixed(1)} Público`;
  }

  openMovie(movie: MovieItem): void {
    this.router.navigate(['/pelicula', movie.tmdbId], {
      queryParams: { type: movie.mediaType || 'movie' }
    });
  }
}
