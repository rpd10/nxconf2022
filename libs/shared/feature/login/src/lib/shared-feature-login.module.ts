import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedUiButtonModule } from '@nxconf2022/shared/ui/button';
import { LoginComponent } from './login/login.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', component: LoginComponent },
];

@NgModule({
  imports: [CommonModule, SharedUiButtonModule, RouterModule.forChild(routes)],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class SharedFeatureLoginModule {}
