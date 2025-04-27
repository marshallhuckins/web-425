import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export interface User {
  empId: number;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [
    { empId: 1, email: 'test@example.com', password: 'Password123' },
    { empId: 2, email: 'admin@example.com', password: 'Admin456' }
  ];

  private authState = new BehaviorSubject<boolean>(false);

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) {}

  getAuthState(): Observable<boolean> {
    return this.authState.asObservable();
  }

  signin(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);

    if (user) {
      this.cookieService.set('session_user', email);
      this.authState.next(true);
      return true;
    } else {
      this.authState.next(false);
      return false;
    }
  }

  signout(): void {
    this.cookieService.deleteAll();
    this.authState.next(false);
    this.router.navigate(['/signin']);
  }
}
