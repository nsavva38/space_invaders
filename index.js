import * as Classes from './classes.js';
import * as Functions from './functions.js'

const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const player = new Classes.Player(canvas, canvasContext);
const projectiles = [];
const invader = new Classes.Invader(canvas, canvasContext);
const keys = {
  a: {pressed: false},
  d: {pressed: false}, 
  space: {pressed: false},
}



Functions.animate(canvas, canvasContext, player, keys, projectiles, invader);
Functions.keyPress(keys, projectiles, canvasContext, player);
