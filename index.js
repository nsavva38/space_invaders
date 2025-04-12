import * as Classes from './classes.js';

const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const player = new Classes.Player(canvas, canvasContext);

const animate = () => {
  requestAnimationFrame(animate);

  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

  player.draw();
}

animate();