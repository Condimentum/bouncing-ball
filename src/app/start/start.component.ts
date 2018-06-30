import { Component, OnInit } from '@angular/core';
import { BallComponent } from '../ball/ball.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	var Ball = new BallComponent();
  	setTimeout(() => Ball.start(), 1000);
  }

}
