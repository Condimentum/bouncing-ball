import { Component, OnInit } from '@angular/core';
import { Ball } from '../ball';
import { BallInstance } from '../ball-instance';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

	ball: Ball;

  constructor() {
  	this.ball = BallInstance;
  }

  ngOnInit() {
  	this.ball.speed = 2;
  	this.ball.angle = 10;
  }

}
