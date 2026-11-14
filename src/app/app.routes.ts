import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'explorar',
    pathMatch: 'full'
  },
  {
    path: 'explorar',
    loadComponent: () => import('./pages/explore/explore.page').then(m => m.ExplorePage)
  },
  {
    path: 'pelicula/:id',
    loadComponent: () => import('./pages/movie-detail/movie-detail.page').then(m => m.MovieDetailPage)
  },
  {
    path: 'comunidad',
    loadComponent: () => import('./pages/community/community.page').then(m => m.CommunityPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/profile/profile.page').then(m => m.ProfilePage)
  },
  {
    path: '**',
    redirectTo: 'explorar'
  }
];
