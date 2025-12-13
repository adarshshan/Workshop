import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let isActive = true;

  if (isActive) return true;
  else return false;
};
