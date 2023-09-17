const CELLS = {
    NULL: 0,
    IDLE: 1,
    USED: 2
}
const WALLS = {
    NULL: 0,
    NOWALL: 1,
    WALL: 2
}

Object.freeze(WALLS);
Object.freeze(CELLS);

const CELLCOLORS = ['#FFFFFF','#404040', '#A0A0A0'];
const WALLCOLORS = ['#FFFFFF','#303030', '#9050A0'];

const WALLTHICKNESS = 0.1;
const OFFSET = 1 - WALLTHICKNESS / 2;


class BoardView {
    constructor(ctx) {
        this.ctx = ctx;
        this.reset(4, 4);
    }

    reset(rows, cols) {
        this.rows = cols;
        this.rows = cols;
        this.board = Array.from({ length: rows }, () => Array(cols).fill(CELLS.NULL));
        this.hwalls = Array.from({ length: rows + 1 }, () => Array(cols).fill(WALLS.NULL));
        this.vwalls = Array.from({ length: rows }, () => Array(cols + 1).fill(WALLS.NULL));

        this.beautify();
    }
    makeRandom(rows, cols, cell, wall){
        this.reset(rows, cols);
        this.board.forEach((row, y) => row.forEach((val, x) => this.board[y][x] = cell()));
        this.hwalls.forEach((row, y) => row.forEach((val, x) => this.hwalls[y][x] = wall()));
        this.vwalls.forEach((row, y) => row.forEach((val, x) => this.vwalls[y][x] = wall()));
        this.beautify();
    }
    getCell(x, y) {
        if (this.board[y] == undefined) {
            return CELLS.NULL;
        }
        if (this.board[y][x] == undefined) {
            return CELLS.NULL;
        }
        return this.board[y][x];
    }
    setCell(x, y, val) {
        if (this.board[y] == undefined){
            return;
        }
        if(this.board[y][x] == undefined){
            return;
        }
        this.board[y][x] = val;
    }
    beautify() {
        this.hwalls.forEach((row, y) => {
            row.forEach((val, x) => {
                this.hwalls[y][x] = this.getWallType(this.getCell(x, y), this.getCell(x, y - 1), val);
            });
        });
        this.vwalls.forEach((row, y) => {
            row.forEach((val, x) => {
                this.vwalls[y][x] = this.getWallType(this.getCell(x, y), this.getCell(x - 1, y), val);
            });
        });
    }



    getWallType(cell1, cell2, val) {
        if (cell1 == undefined) {
            cell1 = CELLS.NULL;
        }
        if (cell2 == undefined) {
            cell2 = CELLS.NULL;
        }
        if (cell1 != CELLS.NULL){
            [cell1, cell2] = [cell2, cell1];
        }
        if (cell1 == CELLS.NULL) {
            if (cell2 == CELLS.NULL) {
                return WALLS.NULL;
            }
            else {
                return WALLS.WALL;
            }
        }
        if (val == WALLS.NULL){
            return WALLS.NOWALL;
        }
        else{
            return WALLS.WALL;
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.board.forEach((row, y) => row.forEach((val, x) => this.drawCell(x, y, val)));
        this.hwalls.forEach((row, y) => row.forEach((val, x) => this.drawHWall(x, y, val, WALLS.NULL)));
        this.vwalls.forEach((row, y) => row.forEach((val, x) => this.drawVWall(x, y, val, WALLS.NULL)));
        this.hwalls.forEach((row, y) => row.forEach((val, x) => this.drawHWall(x, y, val, WALLS.NOWALL)));
        this.vwalls.forEach((row, y) => row.forEach((val, x) => this.drawVWall(x, y, val, WALLS.NOWALL)));
        this.hwalls.forEach((row, y) => row.forEach((val, x) => this.drawHWall(x, y, val, WALLS.WALL)));
        this.vwalls.forEach((row, y) => row.forEach((val, x) => this.drawVWall(x, y, val, WALLS.WALL)));
    }
    drawCell(x, y, val) {
        this.ctx.fillStyle = CELLCOLORS[val];
        this.ctx.fillRect(x + 1, y + 1, 1, 1);
    }
    drawHWall(x, y, val, filter = val) {
        if(filter != val) return;
        this.ctx.fillStyle = WALLCOLORS[val];
        this.ctx.fillRect(x + OFFSET, y + OFFSET, 1 + WALLTHICKNESS, WALLTHICKNESS);
    }
    drawVWall(x, y, val, filter = val) {
        if(filter != val) return;
        this.ctx.fillStyle = WALLCOLORS[val];
        this.ctx.fillRect(x + OFFSET, y + OFFSET, WALLTHICKNESS, 1 + WALLTHICKNESS);
    }
}