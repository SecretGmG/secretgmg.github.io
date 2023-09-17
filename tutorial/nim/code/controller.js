
class BoardController {
    constructor(board) {
        this.board = board;
        this.canvas = this.board.ctx.canvas;
        this.canvas.addEventListener("mousedown", (e) => this.processMouseEvent(e));
    }
    processMouseEvent(e) {
        let mousePos = (this.getMousePosInBoard(e));
        let x = Math.floor(mousePos.x);
        let y = Math.floor(mousePos.y);

        let prevCell = this.board.getCell(x, y);
        this.board.setCell(x, y, (prevCell + 1) % 3);
        this.board.beautify();
        this.board.draw();
    }
    getMousePosInBoard(e) {
        let rect = this.canvas.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        x /= SCALE;
        y /= SCALE;
        x -= 1;
        y -= 1;
        return { x: x, y: y };
    }
}