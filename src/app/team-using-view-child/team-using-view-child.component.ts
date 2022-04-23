import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-team-using-view-child',
  templateUrl: './team-using-view-child.component.html',
  styleUrls: ['./team-using-view-child.component.css'],
})
export class TeamUsingViewChildComponent {
  @ViewChild('teams') teams!: ElementRef;
  selectedTeam = '';
  onSelected() {
    this.selectedTeam = this.teams.nativeElement.value;
  }
}
