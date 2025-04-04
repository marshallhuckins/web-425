import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="home">
      <h1>Welcome to the RPG Character Builder</h1>
      <p>
        Dive into a world of fantasy, where your imagination brings characters to life. Whether you're crafting a fearless warrior,
        a cunning rogue, or a wise mage, this tool is your starting point.
      </p>

      <div class="gallery">
        <div class="card">
          <img src="assets/hero.jpg" alt="Fantasy warrior" />
          <p>Design fearless heroes that lead their parties into legendary quests.
      These warriors are the front line, shielding their allies from danger while delivering powerful blows to their enemies.
      With strength and honor, they inspire courage and determination in even the darkest of dungeons.
      Customize their armor, weapons, and battle tactics to create the ultimate defender of your realm.</p>
        </div>
        <div class="card">
          <img src="assets/rogue.jpg" alt="Stealth rogue" />
          <p>Create agile rogues who strike from the shadows with deadly precision.
      Masters of stealth and deception, rogues are perfect for players who prefer strategy over brute force.
      Whether picking locks, disarming traps, or executing critical backstabs, your rogue is a silent force of nature.
      Build their skills, choose their tools, and navigate the world with cunning and grace.</p>
        </div>
        <div class="card">
          <img src="assets/mage.jpg" alt="Powerful mage" />
          <p>Build mystical mages that bend the forces of nature to their will.
      Mages harness arcane energy to summon fire, ice, and lightning — turning the tide of any battle with a flick of the wrist.
      Choose from ancient spellbooks, design magical attire, and tailor their training to the elemental forces you favor.
      A true mage is both a scholar and a storm.</p>
        </div>
      </div>

      <p>
        Our RPG character builder allows you to define classes, assign weapons, and customize backgrounds.
  With every choice, your character becomes more powerful, more personal, and more prepared for the battles ahead.
  Start building now, and take your roleplaying adventures to the next level. Whether you're a dungeon master preparing for your next campaign,
  a solo adventurer crafting a legend, or just a fan of fantasy worlds, this builder offers a creative outlet for your imagination.
  Choose from countless combinations of races, classes, and magical gear. Document your character’s backstory, personality traits,
  and legendary deeds all in one place. You can even export your creations to use in your tabletop RPGs or digital campaigns.
  No matter your play style, this platform is designed to grow with you, offering flexibility, depth, and fun. So sharpen your sword,
  charge your mana, and step into a world where the only limit is your creativity.
      </p>
    </div>
  `,
  styles: [`
    .home {
      font-family: 'Arial', sans-serif;
      padding: 2rem;
      line-height: 1.6;
    }

    .gallery {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
    }

    .card {
      flex: 1 1 30%;
      text-align: center;
      padding: 1rem;
    }

    .card img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }

    h1 {
      font-family: 'Georgia', serif;
      color: #3e3e3e;
    }

    p {
      font-family: 'Courier New', monospace;
    }
  `]
})
export class HomeComponent {}
