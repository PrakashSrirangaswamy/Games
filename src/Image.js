export default class image {

    constructor(gameWidth, gameHeight) {
        this.image = document.getElementById("trump");
        this.speed = { x: 1, y: 1 };

        this.position = { x: 10, y: 10 };

        this.width = 30;
        this.height = 40;

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update(dt) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        if (this.position.x > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x
        }
        if (this.position.y > this.gameHeight || this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }
    }
}