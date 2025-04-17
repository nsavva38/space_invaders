import * as playerClass from './playerClass.js';
import * as enemiesClass from './enemiesClass.js';
import * as Functions from './functions.js'

const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const player = new playerClass.Player(canvas, canvasContext);
const projectiles = [];
// const invader = new Classes.Invader(canvas, canvasContext); // delete this line after finishing grid class
const grids = [new enemiesClass.Grid(canvas, canvasContext, {position : {x:0, y:0}})];
const keys = {
  a: {pressed: false},
  d: {pressed: false}, 
  space: {pressed: false},
};
const animateArgs = {
  canvas, 
  canvasContext, 
  player, 
  keysObj: keys, 
  projectilesArr: projectiles, 
  // invader,
  grids
};
const keyPressArgs = {
  keysObj: keys, 
  projectilesArr: projectiles, 
  canvasContext, 
  player
};


Functions.animate(animateArgs);
Functions.keyPress(keyPressArgs);
