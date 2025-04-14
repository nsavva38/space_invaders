import * as Classes from './classes.js';
import { animate } from './functions.js'

const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const player = new Classes.Player(canvas, canvasContext);
const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  }, 
  w: {
    pressed: false
  },
  s: {
    pressed: false
  },
  space: {
    pressed: false
  },
}



animate(canvas, canvasContext, player, keys);

// can pass 'event' into the param instead of ({key})
// but the ({key}) way allows us to destructure
addEventListener('keydown', ({key}) => {
  console.log(key);
  switch (key) {
    case 'a':
      console.log('left');
      keys.a.pressed = true;
      break;
    case 'd':
      console.log('right');
      keys.d.pressed = true;
      break;
    case 'w':
      console.log('up');
      keys.w.pressed = true;
      break;
    case 's':
      console.log('down');
      keys.s.pressed = true;
      break;
    case ' ':
      console.log('spacebar');
      keys.space.pressed = true;
      break;
  }
})

// can pass 'event' into the param instead of ({key})
// but the ({key}) way allows us to destructure
addEventListener('keyup', ({key}) => {
  console.log(key);
  switch (key) {
    case 'a':
      console.log('left');
      keys.a.pressed = false;
      break;
    case 'd':
      console.log('right');
      keys.d.pressed = false;
      break;
    case 'w':
      console.log('up');
      keys.w.pressed = false;
      break;
    case 's':
      console.log('down');
      keys.s.pressed = false;
      break;
    case ' ':
      console.log('spacebar');
      keys.space.pressed = false;
      break;
  }
})