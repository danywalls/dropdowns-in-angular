import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedTeam = '';
  onSelected(selectedValue) {
    this.selectedTeam = selectedValue;
  }
}
