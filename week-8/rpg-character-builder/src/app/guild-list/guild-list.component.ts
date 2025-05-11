import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-guild-list',
  templateUrl: './guild-list.component.html',
  styleUrls: ['./guild-list.component.css']
})
export class GuildListComponent {
  @Input() guilds: any[] = [];
}
