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

function removeGrid() {
    const container = document.querySelector('.container');
    const gridSquare = document.querySelectorAll(".gridSquare");
    gridSquare.forEach((grid) => {
        container.removeChild(grid);
    });
};


defaultGrid();
createGrid(rowAmount, columnAmount);
hoverOnGrid();



