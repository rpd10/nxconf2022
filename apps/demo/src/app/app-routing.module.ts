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
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('@nxconf2022/demo/feature/landing-page').then(
        (m) => m.DemoFeatureLandingPageModule
      ),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
