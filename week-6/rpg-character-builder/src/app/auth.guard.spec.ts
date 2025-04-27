import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { CookieService } from 'ngx-cookie-service';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {
          provide: CookieService,
          useValue: { get: () => 'mock-token' } // ✅ Mocking the required dependency
        }
      ]
    });

    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
