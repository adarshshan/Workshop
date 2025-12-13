import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = '233456';
  const modified = req.clone({
    setHeaders: { authorization: `Bearer ${token}` },
  });
  return next(modified);
};
