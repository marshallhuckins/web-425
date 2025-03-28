import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  template: `
    <h2>Players</h2>
    <p>Welcome to the Players page. Here you can manage all your RPG characters.</p>
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
export class PlayersComponent { }
