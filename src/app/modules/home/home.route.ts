import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'tracks',
    loadChildren: () => import('@modules/tracks/tracks.route').then(m => m.routes)
  },
  {
    path: 'favorites',
    loadChildren: () => import('@modules/favorites/favorites.route').then(m => m.routes)
  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.route').then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: '/tracks'
  }
];