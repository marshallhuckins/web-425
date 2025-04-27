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
});
