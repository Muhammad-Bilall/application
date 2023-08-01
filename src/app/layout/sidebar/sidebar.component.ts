import { Component, Input } from '@angular/core';
import { SignupService } from 'src/app/service/signup.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isAdmin=false;
  isPatient=false;
  isDoctor=false;
constructor(private service:SignupService){}
ngDoCheck():void{
  if(this.service.userrole==='Admin')
  {
    this.isAdmin=true;
  }
  else if(this.service.userrole==='Patient')
  {
    this.isPatient=true;
  }
  else if(this.service.userrole==='Doctor')
  {
    this.isDoctor=true;
  }
}
}
