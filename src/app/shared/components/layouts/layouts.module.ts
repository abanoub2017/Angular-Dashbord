import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';



@NgModule({
  declarations: [AdminLayoutComponent, UserLayoutComponent, AuthLayoutComponent, BlankLayoutComponent, NoPageFoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
