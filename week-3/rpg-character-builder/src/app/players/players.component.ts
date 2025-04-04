import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Character {
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  class: 'Warrior' | 'Mage' | 'Rogue';
  faction: string;
  startingLocation: string;
  funFact: string;
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <<div class="players-wrapper">
      <h1>Meet the Heroes</h1>
      <div class="grid">
        @for (character of characters; track character) {
          <div class="character-card">
            <h3>{{ character.name }}</h3>
            <p><strong>Gender:</strong> {{ character.gender }}</p>
            <p><strong>Class:</strong> {{ character.class }}</p>
            <p><strong>Faction:</strong> {{ character.faction }}</p>
            <p><strong>Location:</strong> {{ character.startingLocation }}</p>
            <p><em>{{ character.funFact }}</em></p>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .players-wrapper {
      padding: 20px;
    }
    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }
    .character-card {
      flex: 0 1 calc(33.33% - 16px);
      border: 1px solid #ccc;
      padding: 12px;
      border-radius: 8px;
      background-color: #f8f8f8;
    }
  `]
})

export class PlayersComponent {
  characters: Character[] = [
    {
      name: "Thorn",
      gender: "Male",
      class: "Warrior",
      faction: "The Iron Brotherhood",
      startingLocation: "Ironhold",
      funFact: "Thorn once single-handedly defeated a dragon."
    },
    {
      name: "Elira",
      gender: "Female",
      class: "Mage",
      faction: "Arcane Circle",
      startingLocation: "Mystvale",
      funFact: "Elira can control weather patterns."
    },
    {
      name: "Kael",
      gender: "Male",
      class: "Rogue",
      faction: "Shadow Clan",
      startingLocation: "Nightreach",
      funFact: "Kael has never been caught—by anyone."
    },
    {
      name: "Zara",
      gender: "Female",
      class: "Warrior",
      faction: "The Iron Brotherhood",
      startingLocation: "Ironhold",
      funFact: "Zara wields a sword made from star metal."
    },
    {
      name: "Mira",
      gender: "Female",
      class: "Mage",
      faction: "Arcane Circle",
      startingLocation: "Frostmere",
      funFact: "Mira once froze a lake with a single spell."
    },
    {
      name: "Dax",
      gender: "Male",
      class: "Rogue",
      faction: "Shadow Clan",
      startingLocation: "The Hollows",
      funFact: "Dax collects rare daggers from fallen foes."
    },
    {
      name: "Nira",
      gender: "Other",
      class: "Mage",
      faction: "The Elementals",
      startingLocation: "Emberfall",
      funFact: "Nira can speak to elementals in their native tongue."
    },
    {
      name: "Bren",
      gender: "Male",
      class: "Warrior",
      faction: "The Iron Brotherhood",
      startingLocation: "Red Keep",
      funFact: "Bren fought in the Battle of Black Hollow."
    },
    {
      name: "Sylra",
      gender: "Female",
      class: "Rogue",
      faction: "Nightshade Order",
      startingLocation: "Whispering Forest",
      funFact: "Sylra uses shadow magic to vanish at will."
    },
    {
      name: "Luma",
      gender: "Other",
      class: "Mage",
      faction: "Starlight Enclave",
      startingLocation: "Moonspire",
      funFact: "Luma’s spells glow with stardust."
    }
  ];
}
