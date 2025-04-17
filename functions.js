// import * as Classes from './classes.js'
import * as playerClass from './playerClass.js';
// import * as enemiesClass from './enemiesClass.js';

export const animate = ({canvas, canvasContext, player, keysObj, projectilesArr, grids}) => { // replaced invader with grids
  const loop = () => {
    requestAnimationFrame(loop);

    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    // invader.update();
    player.update();

    projectilesArr.forEach((projectile, index) => {

      if (projectile.position.y + projectile.radius <= 0) {
        setTimeout(() => {
          projectilesArr.splice(index, 1);
        }, 0)
      } else {
        projectile.update()
      }
    });

    grids.forEach(grid => {
      grid.update();
      grid.invaders.forEach(invader => {
        invader.update({velocity: grid.velocity});
      })
    })

    const playerSpeed = 7;
    const spaceshipTilt = 0.15

    if (keysObj.a.pressed && player.position.x >= 0) {
      player.velocity.x = -playerSpeed;
      player.rotation = -spaceshipTilt;
    } else if (keysObj.d.pressed && player.position.x + player.width <= canvas.width) {
      player.velocity.x = playerSpeed;
      player.rotation = spaceshipTilt;
    } else {
      player.velocity.x = 0;
      player.rotation = 0
    }
  }

  loop();
}


// can pass 'event' into the param instead of ({key})
// but the ({key}) way is called destructure and is a little cleaner
export const keyPress = ({keysObj, projectilesArr, canvasContext, player}) => {
  addEventListener('keydown', ({ key }) => {
    switch (key) {
      case 'a':
      case 'ArrowLeft':
        keysObj.a.pressed = true;
        break;
      case 'd':
      case 'ArrowRight':
        keysObj.d.pressed = true;
        break;
      case ' ':
        if (!keysObj.space.pressed) {    // this if statement prevents projectiles from spawning if spacebar is held down. projectile can only be spawned/fired if the spacebar was not pressed/held down to begin with
          keysObj.space.pressed = true;
          projectilesArr.push(new playerClass.Projectile({
            canvasContext,
            position: {
              x: player.position.x + player.width / 2,
              y: player.position.y
            },
            velocity: {
              x: 0,
              y: -10
            }
          }))
        }
        break;
    }
  });

  addEventListener('keyup', ({ key }) => {
    switch (key) {
      case 'a':
      case 'ArrowLeft':
        keysObj.a.pressed = false;
        break;
      case 'd':
      case 'ArrowRight':
        keysObj.d.pressed = false;
        break;
      case ' ':
        keysObj.space.pressed = false;
        break;
    }
  });
}
