export class Player {
  constructor(canvasContext) {
    this.canvasContext = canvasContext;
    this.position = {
      x: 200,
      y: 200
    }

    this.velocity = {
      x: 0,
      y: 0
    }

    // this.image = 
    this.width = 100;
    this.height = 100;
  }

  draw () {
    this.canvasContext.fillStyle = 'red';
    this.canvasContext.fillRect(this.position.x, this.position.y,
      this.width, this.height
    )
  }
}