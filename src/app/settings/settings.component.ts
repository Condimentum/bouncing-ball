import { Component, OnInit } from '@angular/core';
import { BallComponent } from '../ball/ball.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	const Ball = new BallComponent();
  	Ball.r = 20;
  	Ball.speed = 2;
  	Ball.angle = 45;
  }

}
