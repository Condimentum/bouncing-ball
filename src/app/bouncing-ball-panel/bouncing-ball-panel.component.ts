import { Component, OnInit } from '@angular/core';
import { BallComponent } from '../ball/ball.component';

@Component({
  selector: 'app-bouncing-ball-panel',
  templateUrl: './bouncing-ball-panel.component.html',
  styleUrls: ['./bouncing-ball-panel.component.css']
})
export class BouncingBallPanelComponent implements OnInit {

  constructor() { }

  getCanvas() {
  	return <HTMLCanvasElement> document.getElementById('bouncingBallPanel');
  }

  ngOnInit() {
  }

}
