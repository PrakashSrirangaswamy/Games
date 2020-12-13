export default class image {

    constructor(game) {
        this.image = document.getElementById("trump");
        this.speed = { x: 4, y: 4 };
        this.position = { x: 10, y: 10 };

        this.size = 25;

        this.game = game;

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(dt) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // left right
        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x
        }


        // top bottom
        if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }

        // paddle

        let bttmOfImg = this.position.y + this.size;
        let topOfPaddle = this.game.paddle.position.y;
        let leftSidePaddle = this.game.paddle.position.x;
        let rightSidePaddle = this.game.paddle.position.x + this.game.paddle.width;


        if (bttmOfImg >= topOfPaddle && this.position.x >= leftSidePaddle && this.position.x + this.size <= rightSidePaddle) {
            this.speed.y = -this.speed.y;

            this.position.y = topOfPaddle - this.size;
        }
    }
}