import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  userrole:any;
  url='http://localhost:3000/users'
  constructor(private _http:HttpClient , private router:Router) { }
  getAll(){
    return this._http.get(this.url);
  }
  getById(id:any){
    return this._http.get(this.url+'/'+id);
  }
  signupData(data:any){
    return this._http.post(this.url,data);
  }
  loginData(data:any){
     this._http.get(`http://localhost:3000/users?email${data.email}&&password${data.password}`);
  }
  isLoggedIn(){
    return sessionStorage.getItem('UserName')!=null;
  }
  getUserRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
}
