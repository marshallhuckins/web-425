import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { SigninComponent } from './signin/signin.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { CharacterFactionComponent } from './character-faction/character-faction.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'create-character', component: CreateCharacterComponent, canActivate: [AuthGuard] },
  { path: 'create-guild', loadComponent: () => import('./create-guild/create-guild.component').then(m => m.CreateGuildComponent) },  { path: 'character-faction', component: CharacterFactionComponent }
];
