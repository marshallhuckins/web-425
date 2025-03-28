import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  template: `
    <h2>Sign In</h2>
    <p>Use this page to sign in to your account.</p>
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
export class SigninComponent { }
