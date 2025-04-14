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