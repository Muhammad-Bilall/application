import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'src/app/service/signup.service';
import { Router } from '@angular/router';
import { Validator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.scss']
})

export class LoginuserComponent {

  constructor(private _signup: SignupService, private _dialog: MatDialog, private formBuilder: FormBuilder, private router: Router, private http: HttpClient) {
    sessionStorage.clear();
  }

  loginuserForm = new FormGroup({

    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])


  })



  get email() {
    return this.loginuserForm.get('email');
  }

  get password() {
    return this.loginuserForm.get('password');
  }
  userData: any;
  login(data: any) {
    if (this.loginuserForm.valid) {

      this.http.get<any>("http://localhost:3000/users").subscribe(res => {
        this.userData=res;
      const user = res.find((a: any) => {
          return a.email === this.loginuserForm.value.email && a.password === this.loginuserForm.value.password
        });
        if (user) {
          alert('Login Successfull');
          this.loginuserForm.reset();
          sessionStorage.setItem('UserName',user.UserName);
          sessionStorage.setItem('role',user.Role);
          this._signup.userrole = user.Role;
          console.log(this._signup.userrole)
          
          this.router.navigate(['Layout'])
        } else {
          alert('Invalid Email or Password');
        }
      }, err => {
        alert('something went wrong');
      })
    }

  }
}
