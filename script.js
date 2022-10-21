
let mode = 0;
let size = 16;




createGrid(10);
addButtonListeners();
function addButtonListeners(){
    let gridDimensions = document.getElementsByClassName("inputSize")[0];
    gridDimensions.addEventListener("click", (e) => inputSize());
    let standardMode =document.getElementsByClassName("standardMode")[0];
    standardMode.addEventListener("click",(e)=> mode=0);
    let rainbowMode =document.getElementsByClassName("rainbowMode")[0];
    rainbowMode.addEventListener("click",(e)=> mode=1);
    let darkerMode =document.getElementsByClassName("darkerMode")[0];
    darkerMode.addEventListener("click",(e)=> mode=2);
}


function inputSize() {
    size = Number(prompt("Enter size of grid (1-100)"));
    while (size < 1 || size > 100 || isNaN(size)) {
        size = Number(prompt("Please enter a value between 1-100"));
        alert(typeof (size) + "A" + size);
    }
    createGrid(size);
}

function rgbGenerator() {
    const r = Math.floor(Math.random() * (256));
    const g = Math.floor(Math.random() * (256));
    const b = Math.floor(Math.random() * (256));
    return `rgb(${r},${g},${b})`;
}

function changeColor(e) {
    let newColor;
    if (mode == 0) {
        newColor = "rgb(0,0,0)";
    }
    else if (mode == 1) {
        newColor = rgbGenerator();
    } else{
        newColor=darkerMode(e.target.style.backgroundColor);
    }
    e.target.style.backgroundColor = newColor;
}

function darkerMode(bg){
    let primColors=bg.slice(4,bg.length-1).split(",");
    let r=(primColors[0]-25)>0?(primColors[0]-25):0;
    let g=(primColors[1]-25)>0?(primColors[1]-25):0;
    let b=(primColors[2]-25)>0?(primColors[2]-25):0;
    newColor=`rgb(${r},${g},${b})`;
    return (newColor);
}


function createGrid(size) {
    let playingArea = document.getElementsByClassName("playArea")[0];
    playingArea.innerHTML = "";
    for (let i = 0; i < size; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        playingArea.appendChild(gridRow);
        for (let j = 0; j < size; j++) {
            let gridItem = document.createElement("div");
            gridItem.textContent = "";
            gridItem.classList.add("gridItem");
            gridItem.addEventListener('mouseenter', (event) => changeColor(event));
            gridRow.appendChild(gridItem);
        }
    }
}