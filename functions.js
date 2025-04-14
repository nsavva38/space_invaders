export const animate = (canvas, canvasContext, player, keysObj) => {
  const loop = () => {
    requestAnimationFrame(loop);

    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    player.update();

    if (keysObj.a.pressed) {
      player.velocity.x = -5;
    } else {
      player.velocity.x = 0;
    }
  }

  loop();
}


// can pass 'event' into the param instead of ({key})
// but the ({key}) way is called destructure and is a little cleaner
export const keyPress = (keys) => {
  addEventListener('keydown', ({ key }) => {
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
  });

  addEventListener('keyup', ({ key }) => {
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
  });
}
