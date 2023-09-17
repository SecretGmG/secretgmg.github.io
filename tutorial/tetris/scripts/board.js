
class Board {
    constructor(ctx){
        this.ctx = ctx;
        this.grid = this.getEmptyGrid();
    }

    reset() {
        this.grid = this.getEmptyGrid();
    }
    
    getEmptyGrid() {
        return Array.from(
            {length: ROWS}, () => Array(COLS).fill(0)
        );
    }
    tryMakeMove(m){
        if(this.isValidMove(m)){
            this.piece.move(m);
            return true;
        }
        else{
            if(m.y > 0){
                this.placePiece();
            }
            return false;
        }
    }
    isValidMove(m){
        return this.piece.shape.every((row, dy) => {
            return row.every((value, dx) =>{
                return value == 0 || this.isValidSquare(this.piece.x+dx+m.x, this.piece.y+dy+m.y);
            });
        });
    }
    tryRotateLeft(){
        if(this.canRotateLeft()){
            this.piece.rotateLeft();
        }
    }
    tryRotateRight(){
        if(this.canRotateRight()){
            this.piece.rotateRight();
        }
    }
    canRotateLeft(){
        return this.piece.shape.every((row, dy, shape) => {
            return row.every((value, dx) => {
                return value == 0 || this.isValidSquare(this.piece.x+dy, this.piece.y+shape.length-1-dx);
            });
        });
    }
    canRotateRight(){
        return this.piece.shape.every((row, dy, shape) => {
            return row.every((value, dx) => {
                return value == 0 || this.isValidSquare(this.piece.x+shape.length-1-dy, this.piece.y+dx);
            });
        });
    }
    isValidSquare(x,y){
        return x >= 0 && x < COLS && y >= 0 && y < ROWS && this.grid[y][x] == 0;
    }
    draw(){
        ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
        this.grid.forEach((row, y) => {
            row.forEach((value, x) => {
                if(value > 0){
                    this.ctx.fillStyle = COLORS[value -1];
                    this.ctx.fillRect(x, y, 1, 1);
                }
            });
        });
        this.piece.draw();
    }
    placePiece(){
        this.piece.shape.forEach((row, dy) => {
            return row.forEach((value, dx) => {
                if(value > 0){
                    this.grid[this.piece.y + dy][this.piece.x + dx] = value;
                }
            });
        });
        this.piece = new Piece(ctx);
        this.removeFullRows();
    }
    removeFullRows(){
        let i = 0;
        while (i<this.grid.length) {
            const row = this.grid[i];
            if(row.every(val => val != 0)){
                this.grid.splice(i, 1);
            }
            else{
                i++;
            }
        }
        while (i<ROWS){
            this.grid.unshift(Array(COLS).fill(0));
            i++;
        }
        console.log(this);
    }
}