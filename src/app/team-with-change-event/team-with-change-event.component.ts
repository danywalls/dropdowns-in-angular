import { Component } from '@angular/core';

@Component({
  selector: 'app-team-with-change-event',
  templateUrl: './team-with-change-event.component.html',
  styleUrls: ['./team-with-change-event.component.css'],
})
export class TeamWithChangeEventComponent {
  selectedTeam = '';
  onSelected(value) {
    this.selectedTeam = value;
  }
}
