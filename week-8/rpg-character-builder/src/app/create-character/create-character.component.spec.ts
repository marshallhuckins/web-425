import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, CreateCharacterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    const id = component.generateCharacterId();
    expect(Number.isInteger(id)).toBeTrue();
    expect(id).toBeGreaterThanOrEqual(1);
    expect(id).toBeLessThanOrEqual(1000);
  });

  it('should add a character with correct customization', () => {
    component.name = 'Aelar';
    component.gender = 'Other';
    component.class = 'Mage';
    component.faction = 'Moonrise';
    component.startingLocation = 'Elven Grove';
    component.funFact = 'Loves stargazing';

    component.addCharacter();

    expect(component.characters.length).toBe(1);
    const addedChar = component.characters[0];
    expect(addedChar.name).toBe('Aelar');
    expect(addedChar.gender).toBe('Other');
    expect(addedChar.class).toBe('Mage');
    expect(addedChar.faction).toBe('Moonrise');
    expect(addedChar.startingLocation).toBe('Elven Grove');
    expect(addedChar.funFact).toBe('Loves stargazing');
    expect(addedChar.id).toBeGreaterThanOrEqual(1);
    expect(addedChar.id).toBeLessThanOrEqual(1000);
  });

  it('should reset all form fields to their default values after resetForm is called', () => {
    component.name = 'TestName';
    component.gender = 'Female';
    component.class = 'Warrior';
    component.faction = 'Stoneguard';
    component.startingLocation = 'Northern Keep';
    component.funFact = 'Drinks 3 cups of tea daily';

    component.resetForm();

    expect(component.name).toBe('');
    expect(component.gender).toBe('Male');
    expect(component.class).toBe('Warrior');
    expect(component.faction).toBe('');
    expect(component.startingLocation).toBe('');
    expect(component.funFact).toBe('');
  });

  it('should emit characterCreated event when a new character is added', () => {
    spyOn(component.characterCreated, 'emit');

    component.name = 'TestHero';
    component.gender = 'Male';
    component.class = 'Rogue';
    component.faction = 'Shadowveil';
    component.startingLocation = 'Undercity';
    component.funFact = 'Expert lockpicker';

    component.addCharacter();

    expect(component.characterCreated.emit).toHaveBeenCalled();

    const emittedCharacter = (component.characterCreated.emit as jasmine.Spy).calls.mostRecent().args[0];
    expect(emittedCharacter.name).toBe('TestHero');
    expect(emittedCharacter.gender).toBe('Male');
    expect(emittedCharacter.class).toBe('Rogue');
    expect(emittedCharacter.faction).toBe('Shadowveil');
    expect(emittedCharacter.startingLocation).toBe('Undercity');
    expect(emittedCharacter.funFact).toBe('Expert lockpicker');
    expect(emittedCharacter.id).toBeGreaterThanOrEqual(1);
    expect(emittedCharacter.id).toBeLessThanOrEqual(1000);
  });
});
