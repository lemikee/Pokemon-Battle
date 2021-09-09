
// webpack loads this file and any files that it requires and bundles them into dist/main.js, we then require main.js on our index.html
// console.log("Webpack is working!");

// const Game = require('./scripts/game');
import Game from './scripts/game'

document.addEventListener("DOMContentLoaded", function () {
  const game = new Game();
  game.start();
});


