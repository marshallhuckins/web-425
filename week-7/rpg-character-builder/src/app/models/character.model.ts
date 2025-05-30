export interface Character {
  id: number;
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  characterClass: 'Warrior' | 'Mage' | 'Rogue';
  faction: string;
  startingLocation: string;
  funFact: string;
}
