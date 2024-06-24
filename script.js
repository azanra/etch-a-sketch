let rowAmount;
let columnAmount;
let defaultAmount;

function defaultGrid() {
    rowAmount = 16;
    columnAmount = 16;
    defaultAmount = 16;
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
            grid.style.backgroundColor = 'grey';
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

function setSize() {
    const btnSize = document.querySelector("#btn");
    btnSize.addEventListener("click", () => {
        do {
            inputSize = prompt("Input the size of the canvas! (Less than 100 and greater than 0!)");
        }
        while(inputSize >= 100 || inputSize <= 0)
        
        rowAmount = inputSize;
        columnAmount = inputSize;
        removeGrid();
        createGrid(rowAmount, columnAmount);
        decideBasis(inputSize, defaultAmount);
        hoverOnGrid();
    })
}

function setBasis(inputSize) {
    const setBasis = document.querySelectorAll('.gridSquare');
    setBasis.forEach((basis) => {
        basis.style.flexBasis = inputSize + 'px';
    });
}

function decideBasis(inputSize, defaultAmount) {
    if(inputSize > 16){
        inputSize = (defaultAmount /  inputSize) * 60;
        inputSize = inputSize - 2;
        setBasis(inputSize);
    }
    else {
        inputSize = (defaultAmount /  inputSize) * 60;
        setBasis(inputSize);
    }
}

defaultGrid();
createGrid(rowAmount, columnAmount);
hoverOnGrid();
setSize();


