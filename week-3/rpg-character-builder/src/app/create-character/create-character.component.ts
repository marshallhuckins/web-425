import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  template: `
    <h2>Create Character</h2>
    <p>Design your character’s stats and abilities here.</p>
  `,
  styles: [`
    h2 {
      color: #3e3e3e;
      font-family: 'Georgia', serif;
    }
    p {
      font-family: 'Arial', sans-serif;
    }
  `]
})
export class CreateCharacterComponent { }
