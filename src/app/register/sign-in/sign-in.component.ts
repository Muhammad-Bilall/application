import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder ,FormControl,FormGroup, Validators} from '@angular/forms';
import { SignupService } from 'src/app/service/signup.service';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent {
  
  constructor(private  _signup:SignupService , private _dialog: MatDialog , private formBuilder:FormBuilder , private router:Router, private http:HttpClient) {
  }
  
    registerForm=new FormGroup({
      UserName:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required, Validators.minLength(5)]),
      phoneno:new FormControl(''),
      Role:new FormControl('',[Validators.required])

    })
    
    get name() {
      return this.registerForm.get('name');
    }
  

    get email() {
      return this.registerForm.get('email');
    }
  
    get password() {
      return this.registerForm.get('password');
    }
  


   signup(){
   if(this.registerForm.valid){
    this._signup.signupData(this.registerForm.value).subscribe((res=>{
      alert('Registeration Successful!!')
      this.registerForm.reset()
      this.router.navigate(['login'])
    }))
   }
}}
