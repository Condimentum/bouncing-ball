import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bouncing-ball-panel',
  templateUrl: './bouncing-ball-panel.component.html',
  styleUrls: ['./bouncing-ball-panel.component.css']
})
export class BouncingBallPanelComponent implements OnInit {

	title = "Bouncing Ball Simulation";

  constructor() { }

  getCanvas() {
  	return <HTMLCanvasElement> document.getElementById('bouncingBallPanel');
  }

  ngOnInit() {
  }

}
