import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CharacterFactionComponent } from './character-faction.component';
import { of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';


describe('CharacterFactionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CharacterFactionComponent,
        HttpClientTestingModule,
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CharacterFactionComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display the list of factions', () => {
    const fixture = TestBed.createComponent(CharacterFactionComponent);
    const component = fixture.componentInstance;

    component.characterFactions = ['Alliance', 'Horde', 'Neutral'];
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('ul li');
    expect(items.length).toBe(3);
    expect(items[0].textContent).toContain('Alliance');
    expect(items[1].textContent).toContain('Horde');
    expect(items[2].textContent).toContain('Neutral');
  });


  it('should handle error on failed API call', () => {
    const fixture = TestBed.createComponent(CharacterFactionComponent);
    const component = fixture.componentInstance;
    const http = TestBed.inject(HttpClient);

    spyOn(http, 'get').and.returnValue(throwError(() => new Error('API error')));
    fixture.detectChanges();

    expect(component.errorMessage).toBe('Failed to load character factions.');
  });


it('should display error message when API fails', () => {
  const fixture = TestBed.createComponent(CharacterFactionComponent);
  const component = fixture.componentInstance;
  const httpMock = TestBed.inject(HttpTestingController);

  fixture.detectChanges(); // triggers ngOnInit and makes the HTTP call

  // Expect one HTTP request to the character factions endpoint
  const req = httpMock.expectOne('http://localhost:3000/api/characterfactions');
  req.error(new ErrorEvent('Network error')); // Simulate network failure

  fixture.detectChanges(); // update DOM with error message

  const compiled = fixture.nativeElement as HTMLElement;
  const errorMessage = compiled.querySelector('.error')?.textContent || '';

  expect(errorMessage).toContain('Failed to load character factions.');

  httpMock.verify(); // Ensure there are no outstanding requests
});

});
