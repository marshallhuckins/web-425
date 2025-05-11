import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-create-character',
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
        <label for="class">Class:</label>
        <select id="class" name="class" required [(ngModel)]="class">
          <option value="" disabled selected>Select class</option>
          <option value="Warrior">Warrior</option>
          <option value="Mage">Mage</option>
          <option value="Rogue">Rogue</option>
        </select>
      </div>

      <div>
        <label for="faction">Faction:</label>
        <input type="text" id="faction" name="faction" required [(ngModel)]="faction">
      </div>

      <div>
        <label for="startingLocation">Starting Location:</label>
        <input type="text" id="startingLocation" name="startingLocation" required [(ngModel)]="startingLocation">
      </div>

      <div>
        <label for="funFact">Fun Fact:</label>
        <textarea id="funFact" name="funFact" required [(ngModel)]="funFact"></textarea>
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
          <th>Faction</th>
          <th>Location</th>
          <th>Fun Fact</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let character of characters">
          <td>{{ character.id }}</td>
          <td>{{ character.name }}</td>
          <td>{{ character.gender }}</td>
          <td>{{ character.class }}</td>
          <td>{{ character.faction }}</td>
          <td>{{ character.startingLocation }}</td>
          <td>{{ character.funFact }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class CreateCharacterComponent {
  name: string = '';
  gender: 'Male' | 'Female' | 'Other' = 'Male';
  class: 'Warrior' | 'Mage' | 'Rogue' = 'Warrior';
  faction: string = '';
  startingLocation: string = '';
  funFact: string = '';
  characters: Character[] = [];

  @Output() characterCreated = new EventEmitter<Character>();

  generateCharacterId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  addCharacter(): void {
    const newCharacter: Character = {
      id: this.generateCharacterId(),
      name: this.name,
      gender: this.gender,
      class: this.class,
      faction: this.faction,
      startingLocation: this.startingLocation,
      funFact: this.funFact
    };

    this.characters.push(newCharacter);
    this.characterCreated.emit(newCharacter);
    this.resetForm();
  }

  resetForm(): void {
    this.name = '';
    this.gender = 'Male';
    this.class = 'Warrior';
    this.faction = '';
    this.startingLocation = '';
    this.funFact = '';
  }
}
