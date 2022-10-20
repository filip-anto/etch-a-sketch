




let size=16;
let x=document.getElementsByClassName("inputSize")[0];
x.addEventListener("click",(e)=>inputSize());

function inputSize(){
     size=Number(prompt("Enter size of grid"));
     console.log("A"+size);
     while (size<0 || size>100 || !(size==NaN)){
        console.log(typeof(size));
        size=Number(prompt("Please enter a value between 1-100"));
     }
     createGrid(size);
}

let playingArea=document.getElementsByClassName("playArea")[0];
createGrid(10);
function createGrid(size){
    playingArea.innerHTML="";
    for (let i=0;i<size;i++){
        let gridRow=document.createElement("div"); 
        gridRow.classList.add("gridRow");
        playingArea.appendChild(gridRow);
        for (let j=0;j<size;j++){
            let gridItem=document.createElement("div"); 
            gridItem.textContent="";  
            gridItem.classList.add("gridItem");
            gridRow.appendChild(gridItem);
        }
    }
}