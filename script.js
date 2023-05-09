let sideSquares = 16;
const mainContainer = document.querySelector('.mainContainer');

let grid = [];

populateGrid();
etchEvent();

function populateGrid(size) {
    if (arguments.length != 0) sideSquares = size;
    
    for (let i = 0; i < sideSquares; i++) {
        let rowContainer = document.createElement('div');
        rowContainer.classList.add('rowContainer');
    
        for (let j = 0; j < sideSquares; j++) {
            let square = document.createElement('div');
            rowContainer.appendChild(square);
            grid.push(square);
        }
        mainContainer.appendChild(rowContainer);
    }
}

function etchEvent() {
    grid.forEach((box) => {
        box.addEventListener('mouseenter', () => {
        box.classList.add('backGroundChange');
        });
    });
}

const resizeButton = document.querySelector('button');

resizeButton.addEventListener('click', () => {
    let gridSize = 0;

    while (gridSize < 2 || gridSize > 100 || !Number.isInteger(gridSize)) {
        gridSize = parseInt(prompt('Choose a side length from 2 to 100'));
        if (gridSize == null) return;
    }
    
    mainContainer.textContent = '';

    grid = [];
    populateGrid(gridSize);
    etchEvent();
});