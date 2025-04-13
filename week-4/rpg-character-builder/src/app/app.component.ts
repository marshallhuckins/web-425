import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">
      <header class="banner">
        <h1>RPG Character Builder</h1>
      </header>

      <main class="main-content">
        <nav class="navbar">
          <ul>
            <li><a routerLink="/home">Home</a></li>
            <li><a routerLink="/players">Players</a></li>
            <li><a routerLink="/create-character">Create Character</a></li>
            <li><a routerLink="/create-guild">Create Guild</a></li>
            <li><a routerLink="/character-faction">Character Faction</a></li>
            <li><a routerLink="/signin">Sign In</a></li>
          </ul>
        </nav>

        <section class="content">
          <router-outlet />
        </section>
      </main>

      <footer class="footer">
        <nav class="footer-nav">
          <a routerLink="/home">Home</a> |
          <a routerLink="/players">Players</a> |
          <a routerLink="/create-character">Create Character</a> |
          <a routerLink="/create-guild">Create Guild</a> |
          <a routerLink="/character-faction">Character Faction</a> |
          <a routerLink="/signin">Sign In</a>
        </nav>
        <p>&copy; 2024 RPG Character Builder</p>
      </footer>
    </div>
  `,
  styles: [`
    .wrapper {
      width: 80%;
      margin: auto;
      font-family: 'Georgia', serif;
    }

    .banner {
      background-color: #333;
      color: #fff;
      padding: 1.5rem;
      text-align: center;
      font-family: 'Montserrat', sans-serif;
    }

    .navbar ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
      padding: 0;
      margin: 0;
      background-color: #f4f4f4;
      font-family: 'Lato', sans-serif;
    }

    .navbar li a {
      text-decoration: none;
      color: #333;
    }

    .navbar li a:hover {
      text-decoration: underline;
    }

    .footer {
      margin-top: 2rem;
      padding: 1rem;
      background-color: #f0f0f0;
      text-align: center;
      font-family: 'Courier New', monospace;
    }

    .footer-nav a {
      margin: 0 0.5rem;
    }
  `]
})
export class AppComponent {
  title = 'rpg-character-builder';
}
