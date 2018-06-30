import { BouncingBallPanelComponent } from './bouncing-ball-panel/bouncing-ball-panel.component';

export class Ball {
	speed: number;
	color: string;
	angle: number;
	private r: number;
	private X: number;
	private Y: number;
	private dX: number;
	private dY: number;

	constructor() {
		this.r = 15;
		this.X = 15;
		this.Y = 240;
		this.dX = 0;
		this.dY = 0;
		this.color = "blue";
	}

	draw() {
		const canvas = new BouncingBallPanelComponent().getCanvas();
		if (canvas.getContext) {
  			var ctx = canvas.getContext("2d");
  			ctx.clearRect(0, 0, canvas.width, canvas.height);
  			ctx.beginPath();
  			ctx.arc(this.X, this.Y, this.r, 0, Math.PI*2);
  			ctx.fillStyle = this.color;
  			ctx.fill();
  			ctx.closePath();
  		}
	}

	run() {
		const canvas = new BouncingBallPanelComponent().getCanvas();
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
  		setTimeout(() => this.run(), 10);
		}

	start() {
		this.dX = this.speed * Math.cos(this.angle * (Math.PI / 180));
		this.dY = this.speed * Math.sin(this.angle * (Math.PI / 180));
		console.log(`Speed: ${this.speed}`);
		console.log(`Angle: ${this.angle}`);
		this.run();
	}
}