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
};
const animateArg = {
  canvas, 
  canvasContext, 
  player, 
  keysObj: keys, 
  projectilesArr: projectiles, 
  invader
};
const keyPressArgs = {
  keysObj: keys, 
  projectilesArr: projectiles, 
  canvasContext, 
  player
};


Functions.animate(animateArg);
Functions.keyPress(keyPressArgs);
