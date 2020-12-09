import Paddle from "./Paddle.js";

import Input from "./Input.js";

import Image from "./Image.js";

let canvas = document.getElementById("gm_canvas");
let cntx = canvas.getContext("2d");

const GAME_WIDTH = 600;
const GAME_HEIGHT = 400;
let paddl = new Paddle(GAME_WIDTH, GAME_HEIGHT);

new Input(paddl);

paddl.draw(cntx);

let lastTime = 0;
let image = new Image(GAME_WIDTH, GAME_HEIGHT);

function gameLoop(timestamp) {
    let dt = timestamp - lastTime;
    lastTime = timestamp;
    cntx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    paddl.update(dt);

    paddl.draw(cntx);
    image.update(dt);
    image.draw(cntx);


    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);