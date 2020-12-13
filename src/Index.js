import Game from "./Game.js";

let canvas = document.getElementById("gm_canvas");
let cntx = canvas.getContext("2d");

const GAME_WIDTH = 600;
const GAME_HEIGHT = 400;


let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

let lastTime = 0;


function gameLoop(timestamp) {
    let dt = timestamp - lastTime;
    lastTime = timestamp;
    cntx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.update(dt);
    game.draw(cntx);
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);