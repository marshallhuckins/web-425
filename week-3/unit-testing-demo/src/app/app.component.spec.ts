import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { MenuComponent } from './menu/menu.component';
import { Routes, Router } from '@angular/router';

describe('AppComponent (Standalone)', () => { beforeEach(async () => { const activatedRouteStub = {
  snapshot: { paramMap: { get: () => 'staticValue',
  },
  },
  queryParams: of({}),
  };

  const routes: Routes = [
    { path: 'menu', component: MenuComponent }
  ]

  await TestBed.configureTestingModule({
    imports: [
      RouterTestingModule.withRoutes(routes), // Include RouterTestingModule to handle routing MenuComponent
  ],
  providers: [
  { provide: ActivatedRoute, useValue: activatedRouteStub },
  ],
  }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Directly create the component
    const app = fixture.componentInstance; expect(app).toBeTruthy();
  });

  /** Week 3: unit test 3 */
  it('should have correct route for Menu Component', () => {
    const router = TestBed.inject(Router);
    const route = router.config.find(r => r.path === 'menu');
    expect(route).toBeDefined(); // Check if the route is defined
    if (route) { expect(route.component).toBe(MenuComponent); // Check if the component is MenuComponent
    } });
  });

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Unit Testing Demo' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Unit Testing Demo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Unit Testing Demo');
  });

  // Simple addition test
  it('should add two numbers correctly', () => {
    const a = 5;
    const b = 3;
    const result = a + b;
    expect(result).toBe(8);
  });

  // Simple subtraction test
  it('should subtract two numbers correctly', () => {
    const a = 10;
    const b = 4;
    const result = a - b;
    expect(result).toEqual(6);
  });

  // Check if a function has been called (using a spy)
  it('should check if a method has been called', () => {
    const spyObj = jasmine.createSpyObj('AppComponent', ['dummyMethod']);
    spyObj.dummyMethod();
    expect(spyObj.dummyMethod).toHaveBeenCalled();
  });

  // Check if a value is truthy
  it('should check if a value is truthy', () => {
    const isAvailable = true;
    expect(isAvailable).toBeTruthy();
  });

  describe('Test Suite - AppComponent Functions', () => {
    it('should return true when comparing two equal values', () => {
      const result = (5 === 5);
      expect(result).toBeTrue();
    });

    it('should return false when comparing two different values', () => {
      const a: number = 5;
      const b: number = 10;
      const result: boolean = (a === b);
      expect(result).toBeFalse();
    });

    it('should add two numbers correctly', () => {
      const a = 10;
      const b = 15;
      const result = a + b;
      expect(result).toEqual(25);
    });

    it('should subtract two numbers correctly', () => {
      const a = 20;
      const b = 5;
      const result = a - b;
      expect(result).toEqual(15);
    });
  });
});


