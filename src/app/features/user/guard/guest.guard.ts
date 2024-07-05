import { Router, type CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const guestGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.isGuest()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
