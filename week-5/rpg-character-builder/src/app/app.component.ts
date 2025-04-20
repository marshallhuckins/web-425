import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
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
            <li *ngIf="!isAuthenticated"><a routerLink="/signin">Sign In</a></li>
            <li *ngIf="isAuthenticated">
              Welcome {{ email }} |
              <a href="#" (click)="signout($event)">Sign Out</a>

            </li>

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
          <span *ngIf="!isAuthenticated"><a routerLink="/signin">Sign In</a></span>
          <span *ngIf="isAuthenticated">
            Welcome {{ email }} |
            <a href="#" (click)="signout($event)">Sign Out</a>
          </span>

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
export class AppComponent implements OnInit {
  title = 'rpg-character-builder';
  isAuthenticated = false;
  email = '';

  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.authService.getAuthState().subscribe((isAuth) => {
      this.isAuthenticated = isAuth;
      if (isAuth) {
        this.email = this.cookieService.get('session_user');
      } else {
        this.email = '';
      }
    });
  }

  signout(event?: Event): void {
    if (event) event.preventDefault();
    this.authService.signout();
  }
}
