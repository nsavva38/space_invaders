import * as Classes from './classes.js';
import * as Functions from './functions.js'

const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const player = new Classes.Player(canvas, canvasContext);
const projectiles = [new Classes.Projectile({
  canvasContext,
  position: {
    x: 300,
    y: 300
  },
  velocity: {
    x: 0,
    y: 0
  }
})];
const keys = {
  a: {pressed: false},
  d: {pressed: false}, 
  w: {pressed: false},
  s: {pressed: false},
  space: {pressed: false},
}



Functions.animate(canvas, canvasContext, player, keys, projectiles);
Functions.keyPress(keys);
