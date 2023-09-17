const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Calculate the size of the canvas
canvas.width = COLS * BLOCK_SIZE;
canvas.height = ROWS * BLOCK_SIZE;

// Scale the canvas
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board(ctx);

function play() {
    console.table(board.grid);
    board.reset();
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
    let piece = new Piece(ctx);
    board.piece = piece;
    piece.draw();
    requestAnimationFrame(animate);
}
document.addEventListener('keydown', e =>{
    e.preventDefault();
    if (e.key in ORTHOGONAL_MOVE_MAP){
        board.tryMakeMove(ORTHOGONAL_MOVE_MAP[e.key]);
    }
    if (e.key === POWER_DOWN_KEY){
        while(board.tryMakeMove(MOVE_DOWN)){}
    }
    if (e.key === ROTATE_LEFT_KEY){
        board.tryRotateLeft();
    }
    if (e.key === ROTATE_RIGHT_KEY){
        board.tryRotateRight();
    }
    board.draw();
});

let timer = {start: 0, elapsed: 0, step: 1000};

function animate(timeStamp){
    timer.elapsed = timeStamp-timer.start;

    if(timer.elapsed > timer.step){
        timer.start = timeStamp;
        board.tryMakeMove(MOVE_DOWN);
        board.draw();
    }
    _ = requestAnimationFrame(animate);
}
