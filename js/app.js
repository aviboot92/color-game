var colors = [];
// Random number generator Function
const random = (min, max) =>Math.floor(Math.random() * (max - min + 1) ) + min;
let gameOver = false;
const targetDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
const instDisplay = document.querySelector("#instantDisplay");
const reset = document.getElementById("reset");
var level = 6;

reset.addEventListener("click", ()=>{
    console.log("I just Enterd reset function");
    squares.forEach(element =>{
        element.classList.remove("d-none");
    });
    randomColors(6);
    gameOver = false;
    target = colors[random(0,5)];
    targetDisplay.textContent = target;
    instDisplay.textContent = "Hi";  
    squares.forEach((element,i)=>{
        element.style.backgroundColor = colors[i];
    });
});

// Fresh Game function
    const randomColors = function(level){
        for (let index = 0; index < level; index++) {
            const x = random(0,256);
            const y = random(0,256);
            const z = random(0,256);
            const color = "rgb("+x+", "+y+", "+z+" )";
            colors[index] = color;
            console.log(colors[index]);         
        }
    } 
    // Setting random values to colors array
    randomColors(level);
    // Setting Target
    let target = colors[random(0,level-1)];
    // Loop for squares display
    function start(){
        squares.forEach((element, i) => {
            element.style.backgroundColor = colors[i];
                // Adding click event to each square
                element.addEventListener("click", function(event){
                    if(!gameOver){
                        if(colors[i] === target){
                            gameOver = true;
                            console.log(gameOver);
                            instDisplay.textContent = "You WON!!!";
                            instDisplay.classList.remove("text-warning");
                            instDisplay.classList.add("text-success");
                        } else{
                            element.classList.add("d-none");
                            instDisplay.classList.add("text-warning");
                            instDisplay.textContent = "Try Again"
                        }
                    }
                });
        });
    }
    start();
   
    // Dispalying Target Color
    targetDisplay.textContent = target;