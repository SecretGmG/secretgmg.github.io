const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

const SCALE = 25;

ctx.scale(SCALE,SCALE);

boardView = new BoardView(ctx);
boardController = new BoardController(boardView);
boardView.makeRandom(5,5,() => Math.floor(Math.random() * 3), () => Math.floor(Math.random() * 2));
boardView.draw();

console.log(boardView);