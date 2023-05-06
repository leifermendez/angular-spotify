import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { SessionGuard } from '@core/guards/session.guard';


export const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import(`./modules/auth/auth.route`).then(m => m.routes)
  },
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import(`./modules/home/home.route`).then(m => m.routes),
    canActivate: [SessionGuard]
  }
];

