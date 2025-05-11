import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-faction.component.html',
  styleUrls: ['./character-faction.component.css']
})
export class CharacterFactionComponent implements OnInit {
  characterFactions: any[] = [];
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/api/characterfactions').subscribe({
      next: (data) => {
        this.characterFactions = data;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load character factions.';
        console.error('API error:', err);
      }
    });
  }
}
