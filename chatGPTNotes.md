for functions.js: 

N: how did i get this error message? I was pressing the projectile button continuously and then i received this     error: functions.js:40  Uncaught TypeError: Cannot read properties of undefined (reading 'y')
    at functions.js:40:52
    at Array.forEach (<anonymous>)
    at functions.js:34:24
    at Array.forEach (<anonymous>)
    at functions.js:31:21
    at Array.forEach (<anonymous>)
    at loop (functions.js:29:11)

ChatGPT: You're modifying projectilesArr inside a .forEach() loop at the same time as you're iterating over it:

projectilesArr.forEach((projectile, projectileIndex) => {
  ...
  setTimeout(() => {
    projectilesArr.splice(projectileIndex, 1);  // <- modifying the same array being looped over
  }, 0);
});
Even though you're using setTimeout(..., 0) to delay it, it can still cause race conditions, especially when:

You're firing multiple projectiles in rapid succession.

The same projectile is removed twice (maybe due to multiple collisions).

Or, the projectile goes offscreen and gets spliced while still being referenced by another loop.


FIX:

const projectilesToRemove = new Set();
const invadersToRemove = new Set();

grids.forEach((grid) => {
  grid.invaders.forEach((invader, invaderIndex) => {
    projectilesArr.forEach((projectile, projectileIndex) => {
      if (!projectile || !invader) return;

      const topOfProjectile = projectile.position.y - projectile.radius;
      const bottomOfInvader = invader.position.y + invader.height;
      const rightSideOfProjectile = projectile.position.x + projectile.radius;
      const leftSideOfProjectile = projectile.position.x - projectile.radius;

      if (
        topOfProjectile <= bottomOfInvader &&
        rightSideOfProjectile >= invader.position.x &&
        leftSideOfProjectile <= invader.position.x
      ) {
        projectilesToRemove.add(projectileIndex);
        invadersToRemove.add({ grid, invaderIndex });
      }
    });
  });
});

// After loop, clean up safely:
[...projectilesToRemove].reverse().forEach(i => projectilesArr.splice(i, 1));
[...invadersToRemove].reverse().forEach(({ grid, invaderIndex }) => grid.invaders.splice(invaderIndex, 1));
