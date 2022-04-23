import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-with-ngmodel',
  templateUrl: './team-with-ngmodel.component.html',
  styleUrls: ['./team-with-ngmodel.component.css'],
})
export class TeamWithNgmodelComponent implements OnInit {
  selectedTeam = '';
  constructor() {}

  ngOnInit() {}
}
