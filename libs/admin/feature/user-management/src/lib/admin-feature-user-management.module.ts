import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdminUiAdminButtonModule } from '@nxconf2022/admin/ui/admin-button';
import { UserListComponent } from './user-list/user-list.component';

export const adminUserManagementRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: UserListComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminUserManagementRoutes),
    AdminUiAdminButtonModule,
  ],
  declarations: [UserListComponent],
})
export class AdminFeatureUserManagementModule {}
