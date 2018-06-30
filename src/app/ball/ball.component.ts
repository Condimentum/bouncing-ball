import { Component, OnInit } from '@angular/core';
import { BouncingBallPanelComponent } from '../bouncing-ball-panel/bouncing-ball-panel.component';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {

	speed: number;
	r: number; // radius
	color: string; // Later, enum COLOR
	startAngle: number;
	private X: number;
	private Y: number;
	private dX: number;
	private dY: number;


  constructor() {
  	this.r = 20;
  	this.X = 200;
  	this.Y = 200;
  	this.dX = 1;
  	this.dY = 1;
  }

  draw() {
  	const bouncingBallPanelComponent = new BouncingBallPanelComponent();
  	var canvas = bouncingBallPanelComponent.getCanvas();
  	if (canvas.getContext) {
  		var ctx = canvas.getContext("2d");
  		ctx.clearRect(0, 0, canvas.width, canvas.height);
  		ctx.beginPath();
  		ctx.arc(this.X, this.Y, this.r, 0, Math.PI*2);
  		ctx.fillStyle = "#0095DD"; // this.color
  		ctx.fill();
  		ctx.closePath();
  	}
  }

  start() {
  	const bouncingBallPanelComponent = new BouncingBallPanelComponent();
  	var canvas = bouncingBallPanelComponent.getCanvas();
  	console.log(`${this.X}`, `${this.Y}`);
  	this.draw();
  	if (this.X + this.dX > canvas.width - this.r || this.X + this.dX < this.r) {
  		this.dX = -this.dX;
  	}
  	if (this.Y + this.dY > canvas.height - this.r || this.Y + this.dY < this.r) {
  		this.dY = -this.dY;
  	}
  	this.X += this.dX;
  	this.Y += this.dY;
  }

  ngOnInit() {
  	setInterval(() => this.start(), 10);
  }

}