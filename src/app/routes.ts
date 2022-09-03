import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inbox',
    pathMatch: 'full',
  },
  {
    path: 'inbox',
    loadComponent: () =>
      import('./inbox/pages/inbox-list-page/inbox-list-page.component').then(
        (m) => m.InboxListPageComponent
      ),
  },
];
