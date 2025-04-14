import * as Classes from './classes.js'

export const animate = (canvas, canvasContext, player, keysObj, projectilesArr) => {
  const loop = () => {
    requestAnimationFrame(loop);

    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    player.update();
    projectilesArr.forEach(projectile => {
      projectile.update()
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
export const keyPress = (keys, projectilesArr, canvasContext) => {
  addEventListener('keydown', ({ key }) => {
    switch (key) {
      case 'a':
        keys.a.pressed = true;
        break;
      case 'd':
        keys.d.pressed = true;
        break;
      case 'w':
        keys.w.pressed = true;
        break;
      case 's':
        keys.s.pressed = true;
        break;
      case ' ':
        keys.space.pressed = true;
        projectilesArr.push(new Classes.Projectile({
          canvasContext,
          position: {
            x: 300,
            y: 300
          },
          velocity: {
            x: 0,
            y: -5
          }
        }))
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
      case 'w':
        keys.w.pressed = false;
        break;
      case 's':
        keys.s.pressed = false;
        break;
      case ' ':
        keys.space.pressed = false;
        break;
    }
  });
}
