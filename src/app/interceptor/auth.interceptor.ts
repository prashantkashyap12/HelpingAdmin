import { HttpInterceptorFn } from '@angular/common/http';
import { Injectable } from '@angular/core';

Injectable()
// HttpInterceptor: ये Interface है जो Interceptor बनाने के लिए जरूरी होता है।
// HttpRequest, HttpHandler, HttpEvent: ये सब HTTP Request को पकड़ने, modify करने और आगे बढ़ाने के लिए यूज़ होते हैं।

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
  // const token = 'your-auth-token';
  // const authReq = req.clone({
  //   setHeaders: {
  //     Authorization: `Bearer ${token}`
  //   }
  // });

  return next(req);

};
