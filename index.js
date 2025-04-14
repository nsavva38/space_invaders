import * as Classes from './classes.js';
import * as Functions from './functions.js'

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



Functions.animate(canvas, canvasContext, player, keys);
Functions.keyPress(keys);
