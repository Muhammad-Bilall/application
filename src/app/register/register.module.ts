import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginuserComponent } from './loginuser/loginuser.component';



const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SignInComponent },
  {path:'login', component:LoginuserComponent}


];

@NgModule({
  declarations: [SignInComponent, LoginuserComponent],
  imports: [
    
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
})
export class LoginRegisterModule {}
