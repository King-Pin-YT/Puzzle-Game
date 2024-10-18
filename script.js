const boardSize = 4; // 4x4 grid
let tiles = [];
let emptyTile = { row: 3, col: 3 };

// Initialize board
function createBoard() {
    const board = document.getElementById('game-board');
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.textContent = row * boardSize + col + 1;
            tile.style.gridRow = row + 1;
            tile.style.gridColumn = col + 1;
            tiles.push({ element: tile, row: row, col: col });
            board.appendChild(tile);
        }
    }
    // Set last tile as empty
    const lastTile = tiles[tiles.length - 1].element;
    lastTile.classList.add('empty');
    lastTile.textContent = '';
}

// Shuffle the board (basic shuffle function)
function shuffleBoard() {
    tiles = tiles.sort(() => Math.random() - 0.5);
    tiles.forEach(tile => {
        tile.element.style.gridRow = tile.row + 1;
        tile.element.style.gridColumn = tile.col + 1;
    });
}

document.getElementById('shuffle-button').addEventListener('click', shuffleBoard);

createBoard();
