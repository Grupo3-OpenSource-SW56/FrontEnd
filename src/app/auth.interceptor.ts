import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Retrieve the token from localStorage
  const token = localStorage.getItem('authToken');

  if (token) {
    // Clone the request and set the Authorization header with the Bearer token
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  // Pass the cloned request to the next handler


  return next(req);
};
