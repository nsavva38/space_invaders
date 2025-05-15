// import * as Classes from './classes.js'
import * as playerClass from './playerClass.js';
import * as enemiesClass from './enemiesClass.js';


let frames = 0;
let randomSpawnInterval = Math.floor(Math.random() * 500 + 500);
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

    grids.forEach((grid) => {
      grid.update();
      grid.invaders.forEach((invader, invaderIndex) => {
        invader.update({velocity: grid.velocity});

        projectilesArr.forEach((projectile, projectileIndex) => {
// i think projectile.x would work too, or not cus we want y axis specifically
          const topOfProjectile = projectile.position.y - projectile.radius;
          const bottomOfProjectile = projectile.position.y + projectile.radius;
          const bottomOfInvader = invader.position.y + invader.height;
          const rightSideOfInvader = invader.position.x + invader.width;
          const rightSideOfProjectile = projectile.position.x + projectile.radius;
          const leftSideOfProjectile = projectile.position.x - projectile.radius;
          if (topOfProjectile <= bottomOfInvader && 
          rightSideOfProjectile >= invader.position.x && 
          leftSideOfProjectile <= rightSideOfInvader && 
          bottomOfProjectile >= invader.position.y) {
              setTimeout(() => {
                const invaderFound = grid.invaders.find(foundInvader => {
                  return foundInvader === invader;
                });
                const projectileFound = projectilesArr.find(foundProjectile => {
                  return foundProjectile === projectile;
                })
                if (invaderFound && projectileFound) {
                  grid.invaders.splice(invaderIndex, 1);
                  projectilesArr.splice(projectileIndex, 1);
                }
              }, 0);
            }
        })
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


    if (frames % randomSpawnInterval === 0) {
      grids.push(new enemiesClass.Grid(canvas, canvasContext));
      console.log(`spawned at ${frames} frames at ${randomSpawnInterval} interval`);
      randomSpawnInterval = Math.floor(Math.random() * 500 + 500);
      frames = 0;
    }

    frames++;
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
