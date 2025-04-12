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

    const image = new Image()
    image.src = "./images/spaceship.png"
    image.onload = () => {
      const scale = 0.15;
      this.image = image;
      this.width = image.width * scale;
      this.height = image.height * scale;
    }
  }

  draw () {
    // this.canvasContext.fillStyle = 'red';
    // this.canvasContext.fillRect(this.position.x, this.position.y,
    //   this.width, this.height);
    if (this.image) {
      this.canvasContext.drawImage(
        this.image, 
        this.position.x,
        this.position.y, 
        this.width, 
        this.height,
      )
    }
  }
}