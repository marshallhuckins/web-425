import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin.component';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';

class MockAuthService {
  signin(email: string, password: string) {
    return true;
  }
}

class MockCookieService {
  set = jasmine.createSpy('set');
}

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let authService: AuthService;
  let cookieService: CookieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: CookieService, useClass: MockCookieService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    cookieService = TestBed.inject(CookieService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set cookie and authState to true on successful sign in', () => {
    spyOn(authService as AuthService, 'signin').and.returnValue(true);

    component.signinForm.setValue({
      email: 'test@example.com',
      password: 'Password123'
    });

    component.onSubmit();

    expect(authService.signin).toHaveBeenCalledWith('test@example.com', 'Password123');
    expect(cookieService.set).toHaveBeenCalledWith('session_user', 'test@example.com');
  });

  it('should not set cookie and authState to true on unsuccessful sign in', () => {
    spyOn(authService as AuthService, 'signin').and.returnValue(false);

    component.signinForm.setValue({
      email: 'wrong@example.com',
      password: 'WrongPassword'
    });

    component.onSubmit();

    expect(authService.signin).toHaveBeenCalledWith('wrong@example.com', 'WrongPassword');
    expect(cookieService.set).not.toHaveBeenCalled();
  });

  it('should call signin method on form submission', () => {
    const signinSpy = spyOn(authService as AuthService, 'signin').and.returnValue(true);

    component.signinForm.setValue({
      email: 'test@example.com',
      password: 'Password123'
    });

    component.onSubmit();

    expect(signinSpy).toHaveBeenCalled();
  });

});
