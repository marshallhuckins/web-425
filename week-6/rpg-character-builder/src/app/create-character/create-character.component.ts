import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Character {
  id: number;
  name: string;
  gender: string;
  charClass: string;
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <h2>Create Character</h2>

    <form #characterForm="ngForm" (ngSubmit)="addCharacter()">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required [(ngModel)]="name">
      </div>

      <div>
        <label for="gender">Gender:</label>
        <select id="gender" name="gender" required [(ngModel)]="gender">
          <option value="" disabled selected>Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label for="charClass">Class:</label>
        <select id="charClass" name="charClass" required [(ngModel)]="charClass">
          <option value="" disabled selected>Select class</option>
          <option value="Warrior">Warrior</option>
          <option value="Mage">Mage</option>
          <option value="Rogue">Rogue</option>
        </select>
      </div>

      <button type="submit">Create Character</button>
      <button type="button" (click)="resetForm()">Reset</button>
    </form>

    <h3>Created Characters</h3>

    <table *ngIf="characters.length > 0" border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Class</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let character of characters">
          <td>{{ character.id }}</td>
          <td>{{ character.name }}</td>
          <td>{{ character.gender }}</td>
          <td>{{ character.charClass }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    h2 {
      color: #3e3e3e;
      font-family: 'Georgia', serif;
      margin-bottom: 1rem;
    }

    form {
      max-width: 400px;
      background-color: #f9f9f9;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
    }

    form div {
      margin-bottom: 1rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    input, select {
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      margin-right: 0.5rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background-color: #0066cc;
      color: white;
    }

    button[type="button"] {
      background-color: #888;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 2rem;
    }

    th, td {
      padding: 0.75rem;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    th {
      background-color: #f0f0f0;
    }

    h3 {
      margin-top: 2rem;
      font-family: 'Georgia', serif;
    }
  `]
})
export class CreateCharacterComponent {

  name: string = '';
  gender: string = '';
  charClass: string = '';
  characters: Character[] = [];

  generateCharacterId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  addCharacter(): void {
    const newCharacter: Character = {
      id: this.generateCharacterId(),
      name: this.name,
      gender: this.gender,
      charClass: this.charClass
    };

    this.characters.push(newCharacter);
  }

  resetForm(): void {
    this.name = '';
    this.gender = '';
    this.charClass = '';
  }


}
