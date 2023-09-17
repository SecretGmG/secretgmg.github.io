class Piece {
    constructor(ctx) {
        let piece = Math.floor(Math.random() * PIECES.length);
        this.ctx = ctx;
        this.shape = PIECES[piece];
        this.x = Math.floor((COLS - this.shape.length) / 2)
        this.y = 0;
    }

    draw() {
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillStyle = COLORS[value-1];
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
                }
            });
        });
    }

    setPos(p) {
        this.x = p.x;
        this.y = p.y;
    }

    rotateLeft() {
        this.shape = this.shape.map((row, y, shape) => {
            return row.map((_, x) => { 
                return shape[x][shape.length-1-y]; 
            });
        });
    }
    rotateRight() {
        this.shape = this.shape.map((row, y, shape) => {
            return row.map((_, x) => { 
                return shape[shape.length-1-x][y]; 
            });
        });
    }

    move(m) {
        this.x += m.x;
        this.y += m.y;
    }
}