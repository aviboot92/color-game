var colors = [];
// Random number generator Function
const random = (min, max) =>Math.floor(Math.random() * (max - min + 1) ) + min;
let gameOver = false;
const targetDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");

const randomColors = function(){
    for (let index = 0; index < 6; index++) {
        const x = random(0,256);
        const y = random(0,256);
        const z = random(0,256);
        const color = "rgb("+x+", "+y+", "+z+" )";
        colors[index] = color
        console.log(colors[index]);         
    }
} 


// Setting random values to colors array
randomColors();

// Setting Target
const target = colors[random(0,5)];

// Loop for squares display
squares.forEach((element, i) => {
    element.style.backgroundColor = colors[i];
        // Adding click event to each square
        element.addEventListener("click", function(){
            if(!gameOver){
                if(colors[i] === target){
                    gameOver = true;
                    console.log(gameOver);
                    alert("Right");
                } else{
                    element.classList.add("d-none");
                }
            }
        });
});

// Dispalying Target Color
targetDisplay.textContent = target;
