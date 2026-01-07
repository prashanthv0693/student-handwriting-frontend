import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guards';
import { AdminGuard } from './auth/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component')
        .then(m => m.DashboardComponent),
    canActivate: [AuthGuard]
  },

  {
    path: 'upload-sample',
    loadComponent: () =>
      import('./pages/upload-sample/upload-sample.component')
        .then(m => m.UploadSampleComponent),
    canActivate: [AuthGuard]
  },

  {
    path: 'write-text',
    loadComponent: () =>
      import('./pages/write-text/write-text.component')
        .then(m => m.WriteTextComponent),
    canActivate: [AuthGuard]
  },

  {
    path: 'preview',
    loadComponent: () =>
      import('./pages/preview/preview.component')
        .then(m => m.PreviewComponent),
    canActivate: [AuthGuard]
  },

  {
    path: 'admin/users',
    loadComponent: () =>
      import('./pages/admin-users/admin-users.component')
        .then(m => m.AdminUsersComponent),
    canActivate: [AuthGuard, AdminGuard]
  },

  {
    path: 'admin/transactions',
    loadComponent: () =>
      import('./pages/admin-transactions/admin-transactions.component')
        .then(m => m.AdminTransactionsComponent),
    canActivate: [AuthGuard, AdminGuard]
  },

  // AUTH
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component')
        .then(m => m.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./auth/signup/signup.component')
        .then(m => m.SignupComponent)
  },

  { path: '**', redirectTo: 'dashboard' }
];
