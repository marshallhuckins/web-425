import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  template: `
    <h2>Character Faction</h2>
    <p>Choose a faction to align your character with.</p>
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
export class CharacterFactionComponent { }
