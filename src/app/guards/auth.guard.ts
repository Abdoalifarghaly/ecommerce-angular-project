import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(): Observable<boolean> {
    // التأكد من أن التطبيق في بيئة المتصفح فقط
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');

      if (token) {
        return of(true);
      } else {
        this.router.navigate(['/login']);
        return of(false);
      }
    } else {
      // في حال كان التطبيق يعمل على الخادم (SSR)
      return of(false);
    }
  }
}
