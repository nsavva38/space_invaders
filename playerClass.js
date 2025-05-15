export class Player {
  constructor(canvas, canvasContext) {
    this.canvasContext = canvasContext;
  

    this.velocity = {
      x: 0,
      y: 0
    }
    this.rotation = 0;

    const image = new Image()
    image.src = "./images/spaceship.png"
    image.onload = () => {
      const scale = 0.15;
      this.image = image;
      this.width = image.width * scale;
      this.height = image.height * scale;
      this.position = {
        x: canvas.width / 2 - this.width / 2,
        y: canvas.height - this.height - 20
      }
    }
  }

  draw () {
    // this.canvasContext.fillStyle = 'red';
    // this.canvasContext.fillRect(this.position.x, this.position.y,
    //   this.width, this.height);
    if(this.image && this.position) {
      this.canvasContext.save();
      this.canvasContext.translate(this.position.x + this.width / 2, this.position.y + this.height / 2);

      this.canvasContext.rotate(this.rotation);
      this.canvasContext.translate(-this.position.x + -this.width / 2, -this.position.y + -this.height / 2);

      this.canvasContext.drawImage(
        this.image, 
        this.position.x,
        this.position.y, 
        this.width, 
        this.height,
      )
      this.canvasContext.restore();
    }  
  }

  update() {
    if (this.image && this.position) {
      this.draw()
      this.position.x += this.velocity.x;

    }
  }
}



export class Projectile {
  constructor({canvasContext, position, velocity}) {
    this.canvasContext = canvasContext;
    this.position = position;
    this.velocity = velocity;

    this.radius = 4;
  }

  draw() {
    this.canvasContext.beginPath();
    this.canvasContext.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);

    this.canvasContext.fillStyle = 'red';
    this.canvasContext.fill()
    this.canvasContext.closePath();
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}