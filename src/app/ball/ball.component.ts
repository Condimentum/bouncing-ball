import { Component, OnInit } from '@angular/core';
import { BouncingBallPanelComponent } from '../bouncing-ball-panel/bouncing-ball-panel.component';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {

	speed: number;
	size: number;
	color: string; // Later, enum COLOR
	startAngle: number;
	private positionX: number;
	private positionY: number;
	private angle: number;


  constructor() {
  	this.size = 20;
  	this.positionX = 10;
  	this.positionY = 10;
  }

  start() {
  	const bouncingBallPanelComponent = new BouncingBallPanelComponent();
  	var canvas = bouncingBallPanelComponent.getCanvas();
  	if (canvas.getContext) {
  		var ctx = canvas.getContext("2d");
  		ctx.beginPath();
  		ctx.arc(50, 50, 10, 0, Math.PI*2);
  		ctx.fillStyle = "#0095DD";
  		ctx.fill();
  		ctx.closePath();
  	}
  }

  ngOnInit() {
  	setInterval(this.start(), 10);
  }

}