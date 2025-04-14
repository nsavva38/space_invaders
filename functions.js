import * as Classes from './classes.js'

export const animate = (canvas, canvasContext, player, keysObj, projectilesArr) => {
  const loop = () => {
    requestAnimationFrame(loop);

    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

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
export const keyPress = (keys, projectilesArr, canvasContext, player) => {
  addEventListener('keydown', ({ key }) => {
    switch (key) {
      case 'a':
        keys.a.pressed = true;
        break;
      case 'd':
        keys.d.pressed = true;
        break;
      case ' ':
        keys.space.pressed = true;
        projectilesArr.push(new Classes.Projectile({
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
        console.log(projectilesArr);
        break;
    }
  });

  addEventListener('keyup', ({ key }) => {
    switch (key) {
      case 'a':
        keys.a.pressed = false;
        break;
      case 'd':
        keys.d.pressed = false;
        break;
      case ' ':
        keys.space.pressed = false;
        break;
    }
  });
}
