import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BouncingBallPanelComponent } from './bouncing-ball-panel/bouncing-ball-panel.component';
import { BallComponent } from './ball/ball.component';
import { SettingsComponent } from './settings/settings.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    BouncingBallPanelComponent,
    BallComponent,
    SettingsComponent,
    StartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
