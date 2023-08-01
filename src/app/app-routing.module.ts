import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: '', loadChildren: () => import('src/app/register/register.module').then(l => l.LoginRegisterModule) },
    { path: 'Layout', loadChildren: () => import('src/app/layout/layout.module').then(l => l.LayoutModule) },
  
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
