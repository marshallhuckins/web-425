import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
import { Character } from '../players/players.component';
import { By } from '@angular/platform-browser';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
  });

  it('should display character names when characters are provided', () => {
    const testCharacters: Character[] = [
      {
        name: 'Test Hero',
        gender: 'Male',
        class: 'Warrior',
        faction: 'Test Faction',
        startingLocation: 'Testville',
        funFact: 'Tested the best!'
      }
    ];

    component.characters = testCharacters;
    fixture.detectChanges();

    const listItem = fixture.debugElement.query(By.css('li'));
    expect(listItem).toBeTruthy();
    expect(listItem.nativeElement.textContent).toContain('Test Hero');
  });

  it('should display a message when no characters are available', () => {
    component.characters = [];
    fixture.detectChanges();

    const message = fixture.debugElement.query(By.css('p'));
    expect(message).toBeTruthy();
    expect(message.nativeElement.textContent.toLowerCase()).toContain('no characters');
  });
});
