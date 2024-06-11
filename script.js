let rowAmount = 16;
let columnAmount = 16;

const container = document.querySelector('.container');

function createGrid() {
    for(let i = 0; i < rowAmount; i++){
        for(let j = 0; j < columnAmount; j++){
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('gridSquare');
            container.appendChild(gridSquare);
        }
    }
}

console.log(rowAmount, columnAmount);
createGrid(rowAmount, columnAmount);
