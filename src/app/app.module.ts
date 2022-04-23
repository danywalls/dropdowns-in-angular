import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TeamWithChangeEventComponent } from './team-with-change-event/team-with-change-event.component';
import { TeamWithNgmodelComponent } from './team-with-ngmodel-ngselect/team-with-ngmodel.component';
import { TeamUsingViewChildComponent } from './team-using-view-child/team-using-view-child.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TeamWithChangeEventComponent,
    TeamWithNgmodelComponent,
    TeamUsingViewChildComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
