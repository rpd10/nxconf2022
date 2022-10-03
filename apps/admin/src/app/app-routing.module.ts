import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('@nxconf2022/shared/feature/login').then(
        (m) => m.SharedFeatureLoginModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('@nxconf2022/admin/feature/user-management').then(
        (m) => m.AdminFeatureUserManagementModule
      ),
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
