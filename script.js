let rowAmount;
let columnAmount;

function defaultGrid() {
    rowAmount = 16;
    columnAmount = 16;
}

function createGrid(rowAmount, columnAmount) {
    for(let i = 0; i < rowAmount; i++){
        for(let j = 0; j < columnAmount; j++){
            const container = document.querySelector('.container');
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('gridSquare');
            container.appendChild(gridSquare);
        }
    }
}

function hoverOnGrid() {
    const hoverGrid = document.querySelectorAll('.gridSquare');
    hoverGrid.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = 'black';
        });
    });
}

defaultGrid();
console.log(rowAmount, columnAmount);
createGrid(rowAmount, columnAmount);
hoverOnGrid();
