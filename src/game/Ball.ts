import { BALL_RADIUS, BALL_SPEED } from "./constants";

export class Ball {
  x: number;
  y: number;
  dx: number;
  dy: number;
  image: HTMLImageElement;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.dx = BALL_SPEED;
    this.dy = -BALL_SPEED;
    this.image = new Image();
    this.image.src = "/assets/Ball.png";
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.x - BALL_RADIUS, this.y - BALL_RADIUS, BALL_RADIUS * 2, BALL_RADIUS * 2);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}
