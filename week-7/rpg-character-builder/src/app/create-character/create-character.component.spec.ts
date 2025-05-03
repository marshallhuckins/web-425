import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCharacterComponent } from './create-character.component';
import { FormsModule } from '@angular/forms';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CreateCharacterComponent],
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
    component.charClass = 'Mage';

    component.addCharacter();

    expect(component.characters.length).toBe(1);

    const addedChar = component.characters[0];
    expect(addedChar.name).toBe('Aelar');
    expect(addedChar.gender).toBe('Other');
    expect(addedChar.charClass).toBe('Mage');
    expect(addedChar.id).toBeGreaterThanOrEqual(1);
    expect(addedChar.id).toBeLessThanOrEqual(1000);
  });

  it('should reset all form fields to their default values after resetForm is called', () => {
    component.name = 'TestName';
    component.gender = 'Female';
    component.charClass = 'Warrior';

    component.resetForm();

    expect(component.name).toBe('');
    expect(component.gender).toBe('');
    expect(component.charClass).toBe('');
  });

  it('should emit characterCreated event when a new character is added', () => {
    spyOn(component.characterCreated, 'emit');

    component.name = 'TestHero';
    component.gender = 'Male';
    component.charClass = 'Warrior';

    component.addCharacter();

    expect(component.characterCreated.emit).toHaveBeenCalled();

    const emittedCharacter = (component.characterCreated.emit as jasmine.Spy).calls.mostRecent().args[0];
    expect(emittedCharacter.name).toBe('TestHero');
    expect(emittedCharacter.gender).toBe('Male');
    expect(emittedCharacter.charClass).toBe('Warrior');
    expect(emittedCharacter.id).toBeGreaterThanOrEqual(1);
    expect(emittedCharacter.id).toBeLessThanOrEqual(1000);
  });

});
