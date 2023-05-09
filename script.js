let sideSquares = 16;
const mainContainer = document.querySelector('.mainContainer');

for (let i = 0; i < sideSquares; i++) {
    let rowContainer = document.createElement('div');
    rowContainer.classList.add('rowContainer');

    for (let j = 0; j < sideSquares; j++) {
        let square = document.createElement('div');
        rowContainer.appendChild(square);
    }
    mainContainer.appendChild(rowContainer);
}