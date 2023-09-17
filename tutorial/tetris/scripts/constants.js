const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;


const L_PIECE = [
    [0,1,0],
    [0,1,0],
    [0,1,1]
]
const L_PIECE_M = [
    [0,2,0],
    [0,2,0],
    [2,2,0]
]
const SQUARE = [
    [1,2],
    [3,4]
]
const S_PIECE = [
    [0,4,0],
    [4,4,0],
    [4,0,0]
]
const S_PIECE_M = [
    [5,0,0],
    [5,5,0],
    [0,5,0]
]
const I_PIECE = [
    [0,0,6,0],
    [0,0,6,0],
    [0,0,6,0],
    [0,0,6,0]
]
const COLORS = ['orange', 'blue', 'yellow', 'red', 'green','purple']
const PIECES = [L_PIECE, L_PIECE_M, SQUARE, S_PIECE, S_PIECE_M, I_PIECE];

const MOVE_LEFT = {x: -1, y: 0};
const MOVE_RIGHT = {x: 1, y: 0 };
const MOVE_DOWN = {x: 0, y:1};

const ORTHOGONAL_MOVE_MAP = {
    'a': MOVE_LEFT,
    'd': MOVE_RIGHT,
    's': MOVE_DOWN
}
const POWER_DOWN_KEY = 'w';
const ROTATE_LEFT_KEY = 'q';
const ROTATE_RIGHT_KEY = 'e';