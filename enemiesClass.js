export class Invader {
  constructor(canvas, canvasContext, {position}) {  // canvas isn't used?
    this.canvasContext = canvasContext;
  

    this.velocity = {
      x: 0,
      y: 0
    }


    const image = new Image()
    image.src = "./images/invader.png"
    image.onload = () => {
      const scale = 1;
      this.image = image;
      this.width = image.width * scale;
      this.height = image.height * scale;
      this.position = {
        x: position.x,
        y: position.y
      }
    }
  }

  draw () {
    // this.canvasContext.fillStyle = 'red';
    // this.canvasContext.fillRect(this.position.x, this.position.y,
    //   this.width, this.height);
    if(this.image && this.position) {
      this.canvasContext.drawImage(
        this.image, 
        this.position.x,
        this.position.y, 
        this.width, 
        this.height,
      )
    }  
  }

  update({velocity}) {
    if (this.image && this.position) {
      this.draw()
      this.position.x += velocity.x;
      this.position.y += velocity.y;
    }
  }
}


export class Grid {
  constructor(canvas, canvasContext) {   // may have to add {position} object here at some point
    this.canvas = canvas;
    this.canvasContext = canvasContext;
    this.position = {
      x: 0,
      y: 0
    }
    this.velocity = {
      x: 3,
      y: 0
    }
    this.invaders = []

    const invaderWidth = 30;
    const invaderHeight = 30;
    const rows = Math.floor(Math.random() * 5 + 2);
    const columns = Math.floor(Math.random() * 10 + 5);

    for (let i = 0; i < columns; i++) {
      for (let y = 0; y < rows; y++) {
        this.invaders.push(new Invader(canvas, canvasContext, {position: {
            x: i * invaderWidth,
            y: y * invaderHeight
          }
        }));
      }
    }
    
    console.log(this.invaders);
    this.width = columns * invaderWidth;
  }
  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.x  + this.width >= this.canvas.width ||
      this.position.x <= 0
    ) {
      this.velocity.x = -this.velocity.x;
    }
  }
}