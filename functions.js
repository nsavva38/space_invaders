export const animate = (canvas, canvasContext, player) => {
  const loop = () => {
    requestAnimationFrame(loop);

    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    player.update();
  }

  loop();
}