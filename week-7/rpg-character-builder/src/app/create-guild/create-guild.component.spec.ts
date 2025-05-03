import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CreateGuildComponent } from './create-guild.component';
import { By } from '@angular/platform-browser';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a guild to the list on valid form submit', () => {
    // Simulate a valid form submission
    component.onSubmit({
      valid: true,
      value: {
        guildName: 'Test Guild',
        description: 'A test guild description.',
        type: 'PvE',
        acceptTerms: true,
        notificationPreference: 'email'
      }
    } as any);

    fixture.detectChanges();

    // Assert that the guild was added
    expect(component.guilds.length).toBe(1);
    expect(component.guilds[0].name).toBe('Test Guild');
  });

  it('should emit guildCreated event when a valid form is submitted', () => {
    spyOn(component.guildCreated, 'emit');

    const fakeForm = {
      valid: true,
      value: {
        guildName: 'Emit Guild',
        description: 'Testing emit behavior.',
        type: 'Social',
        acceptTerms: true,
        notificationPreference: 'SMS'
      },
      resetForm: () => {}
    };

    component.onSubmit(fakeForm as any);

    expect(component.guildCreated.emit).toHaveBeenCalled();

    const emittedGuild = (component.guildCreated.emit as jasmine.Spy).calls.mostRecent().args[0];
    expect(emittedGuild.name).toBe('Emit Guild');
    expect(emittedGuild.type).toBe('Social');
    expect(emittedGuild.notificationPreference).toBe('SMS');
  });

  it('should not emit guildCreated if the form is invalid', () => {
    spyOn(component.guildCreated, 'emit');

    const invalidForm = {
      valid: false,
      value: {
        guildName: '',
        description: '',
        type: '',
        acceptTerms: false,
        notificationPreference: ''
      },
      resetForm: () => {}
    };

    component.onSubmit(invalidForm as any);

    expect(component.guildCreated.emit).not.toHaveBeenCalled();
  });

  it('should call resetForm after successful submission', () => {
    const resetSpy = jasmine.createSpy('resetForm');

    const validForm = {
      valid: true,
      value: {
        guildName: 'Reset Guild',
        description: 'Testing form reset.',
        type: 'Competitive',
        acceptTerms: true,
        notificationPreference: 'In-App'
      },
      resetForm: resetSpy
    };

    component.onSubmit(validForm as any);

    expect(resetSpy).toHaveBeenCalled();
  });

});
