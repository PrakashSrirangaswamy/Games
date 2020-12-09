export default class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = 100;
        this.height = 5;
        this.gameWidth = gameWidth;
        this.maxSpeed = 2;
        this.speed = 0;
        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 5
        }
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    draw(ctx) {
        ctx.fillStyle = '#00f';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    }
    update(dt) {

        this.position.x += this.speed;

        if (this.position.x < 0) this.position.x = 0;

        if (this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width;
    }

}