import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  template: `
    <h2>Create Guild</h2>
    <p>Start a new guild and invite your friends!</p>
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
export class CreateGuildComponent { }
