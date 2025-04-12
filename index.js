import * as Classes from './classes.js';
import { animate } from './functions.js'

const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const player = new Classes.Player(canvas, canvasContext);

animate(canvas, canvasContext, player);

// can pass 'event' into the param instead of ({key})
// but the ({key}) way allows us to destructure
addEventListener('keydown', ({key}) => {
  switch (key) {
    case 'a':
      console.log('left');
      break;
    case 'd':
      console.log('right');
      break;
    case 'w':
      console.log('up');
      break;
    case 's':
      console.log('down');
      break;
    case ' ':
      console.log('spacebar');
      break;
  }
})