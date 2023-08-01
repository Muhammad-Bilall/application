import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SignupService } from '../service/signup.service';
import { Injectable, inject } from '@angular/core';

// @Injectable()
// export class authGuard implements CanActivate {
 
//     constructor(private router:Router, private service: SignupService ) {
 
//     }
 
//     canActivate(route: ActivatedRouteSnapshot,
//                 state: RouterStateSnapshot): boolean|UrlTree {
 
//         if (!this.service.isLoggedIn()) {
//           debugger
//             alert('You are not allowed to view this page. You are redirected to login Page');
            
//             this.router.navigate(["login"],{ queryParams: { retUrl: route.url} });
//             return false;
 
//             //var urlTree = this.router.createUrlTree(['login']);
//             //return urlTree;
//         } 
//         else{
//           debugger
//           if (this.service.userrole === 'Admin') {
//                 } else if (this.service.userrole === 'Patient') {
//                   this.router.navigate(['/patient']);
                  
//                 } else if (this.service.userrole === 'Doctor') {
//                   this.router.navigate(['/Layout/doctor']);
                  
//                 }
//           return true;
//         }
        
//     }
 
// }

export const authGuard: CanActivateFn = (route, state) => {
  const service: SignupService = inject(SignupService);
  const router: Router = inject(Router);
  const userRole = service.userrole;

  if (service.isLoggedIn()) {
    // if (userRole === 'Admin') {
    //   return true;
    // } else if (userRole === 'Patient') {
    //   router.navigate(['/Layout/patient']);
    //   return true;
    // } else if (userRole === 'Doctor') {
    //   router.navigate(['/Layout/doctor']);
    //   return true;
    // } else {
    //   // Handle other roles or unauthorized cases here
    //   router.navigate(['']);
    //   return false;
    // }
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
