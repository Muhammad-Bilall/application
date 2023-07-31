import { CanActivateFn, Router } from '@angular/router';
import { SignupService } from '../service/signup.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const service: SignupService = inject(SignupService);
  const router: Router = inject(Router);
  const userRole = service.userrole;

  if (service.isLoggedIn()) {
    if (userRole === 'Admin') {
      return true;
    } else if (userRole === 'Patient') {
      router.navigate(['/Layout/patient']);
      return false;
    } else if (userRole === 'Doctor') {
      router.navigate(['/Layout/doctor']);
      return false;
    } else {
      // Handle other roles or unauthorized cases here
      router.navigate(['']);
      return false;
    }
  } else {
    router.navigate(['login']);
    return false;
  }
};
