const displayLoc = document.getElementById("disNum");
let display = Number(document.getElementById("disNum").innerHTML);

const plus=()=>{
    display+=Number(document.getElementById("theIn").value)
    updateDisplay();
}
const minus=()=>{
    display-=Number(document.getElementById("theIn").value)
    updateDisplay();
}

const updateDisplay=()=>{
    if(display>=0){
        displayLoc.style.color="black";
    }
    else{
        displayLoc.style.color="red";
    }
    displayLoc.innerHTML=Number(display);
}