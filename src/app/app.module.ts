import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BouncingBallPanelComponent } from './bouncing-ball-panel/bouncing-ball-panel.component';
import { BallComponent } from './ball/ball.component';

@NgModule({
  declarations: [
    AppComponent,
    BouncingBallPanelComponent,
    BallComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
