import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="guild-form">
    <h2>Create Guild</h2>
    <form #guildForm="ngForm" (ngSubmit)="onSubmit(guildForm)">
      <label for="guildName">Guild Name:</label>
      <input type="text" id="guildName" name="guildName" ngModel required />

      <label for="description">Description:</label>
      <textarea id="description" name="description" ngModel required></textarea>

      <label for="type">Type:</label>
      <select id="type" name="type" ngModel required>
        <option value="Competitive">Competitive</option>
        <option value="Casual">Casual</option>
        <option value="Social">Social</option>
        <option value="Educational">Educational</option>
      </select>

      <label>
        <input type="checkbox" name="acceptTerms" ngModel required />
        I agree to the terms and conditions
      </label>

      <label>Notification Preference:</label>
      <label><input type="radio" name="notificationPreference" value="Email" ngModel required /> Email</label>
      <label><input type="radio" name="notificationPreference" value="SMS" ngModel /> SMS</label>
      <label><input type="radio" name="notificationPreference" value="In-App" ngModel /> In-App</label>

      <button type="submit">Create Guild</button>
    </form>

    <div *ngIf="guilds.length > 0" class="guild-list">
      <h3>Submitted Guilds</h3>
      <ul>
        <li *ngFor="let guild of guilds">
          <strong>{{ guild.name }}</strong> - {{ guild.type }}<br />
          {{ guild.description }}<br />
          <em>Notify via: {{ guild.notificationPreference }}</em>
        </li>
      </ul>
    </div>
  </div>
  `,
  styles: [`
    .guild-form {
      max-width: 600px;
      margin: 2rem auto;
      padding: 2rem;
      background-color: #f5f5f5;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      font-family: 'Segoe UI', sans-serif;
    }

    h2 {
      margin-bottom: 1rem;
      font-size: 1.75rem;
      color: #2c3e50;
      text-align: center;
    }

    label {
      display: block;
      margin-top: 1rem;
      font-weight: 600;
    }

    input[type="text"],
    textarea,
    select {
      width: 100%;
      padding: 0.5rem;
      margin-top: 0.25rem;
      border: 1px solid #ccc;
      border-radius: 6px;
      box-sizing: border-box;
      font-size: 1rem;
    }

    textarea {
      resize: vertical;
    }

    input[type="checkbox"] {
      margin-right: 0.5rem;
    }

    button {
      margin-top: 1.5rem;
      padding: 0.75rem 1.5rem;
      background-color: #3498db;
      color: #fff;
      border: none;
      border-radius: 6px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: #2980b9;
    }

    .guild-list {
      margin-top: 2rem;
      padding: 1rem;
      background-color: #ffffff;
      border: 1px solid #ddd;
      border-radius: 8px;
    }

    .guild-list h3 {
      margin-bottom: 1rem;
      color: #34495e;
    }

    .guild-list ul {
      list-style: none;
      padding: 0;
    }

    .guild-list li {
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #eaeaea;
    }
  `]
})
export class CreateGuildComponent {
  guilds: any[] = [];

  @Output() guildCreated = new EventEmitter<any>();

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newGuild = {
        name: form.value.guildName,
        description: form.value.description,
        type: form.value.type,
        acceptTerms: form.value.acceptTerms,
        notificationPreference: form.value.notificationPreference
      };

      this.guilds.push(newGuild);
      this.guildCreated.emit(newGuild);

      alert('Guild Created: ' + JSON.stringify(newGuild, null, 2));

      if (typeof form.resetForm === 'function') {
        form.resetForm();
      }
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
