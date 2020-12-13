import InputHandler from "./Input.js";
import Paddle from "./Paddle.js";
import Image from "./Image.js";


export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
    }

    start() {
        this.image = new Image(this);
        this.paddle = new Paddle(this);
        this.gameObjects = [this.image, this.paddle];
        new InputHandler(this.paddle);
    }

    update(dt) {
        this.gameObjects.forEach((object) => object.update(dt));
    }
    draw(ctx) {
        this.gameObjects.forEach((object) => object.draw(ctx));
    }
}