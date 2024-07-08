let rowAmount;
let columnAmount;
let defaultAmount;
let defaultOpacity;

function defaultGrid() {
    defaultAmount = 16;
    rowAmount = defaultAmount;
    columnAmount = defaultAmount;
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

function randomColor(){
    const hoverGrid = document.querySelectorAll('.gridSquare');
    hoverGrid.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            const rgbAmount = 256;
            var red = Math.floor(Math.random() * rgbAmount);
            var green = Math.floor(Math.random() * rgbAmount);
            var blue = Math.floor(Math.random() * rgbAmount);
            var randomColor = "rgb(" + red + "," + green +"," + blue +")";
            grid.style.backgroundColor = randomColor;
        });
    });
}

function changeOpacity() {
    defaultOpacity = 0;
    const gridOpac = document.querySelectorAll('.gridSquare');
    gridOpac.forEach((opac) => {
        opac.addEventListener("mouseover", () => {
            const incrementOpacity = 0.1;
            if(defaultOpacity <= 1){
                opac.style.opacity = defaultOpacity + incrementOpacity;
                defaultOpacity += incrementOpacity
            }
        })
    })
}

function hoverOnGrid() {
    randomColor();
    changeOpacity();
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
            inputSize = prompt("Input the size of the canvas! (1 - 100)");
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
    const cssBasis = 60;

    inputSize = (defaultAmount /  inputSize) * cssBasis;
    console.log(inputSize);
    setBasis(inputSize);
}


defaultGrid();
createGrid(rowAmount, columnAmount);
hoverOnGrid();
setSize();


