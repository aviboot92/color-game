var colors = [];
// Random number generator Function
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let gameOver = false;
const targetDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
const instDisplay = document.querySelector("#instantDisplay");
const reset = document.getElementById("reset");
var levelOfGame = 6;
const hard = document.querySelector("#hard");
const easy = document.querySelector("#easy");
// easy
easy.addEventListener("click", function(){
    levelOfGame = 3;
    newGame(levelOfGame);
});

hard.addEventListener("click", () => {
    levelOfGame = 6;
    newGame(levelOfGame);
    console.log(colors);
});

reset.addEventListener("click", () => {
    newGame(levelOfGame);
    console.log(colors);
});

// New Game 
const newGame = function (levelOfGame) {
    randomColors(levelOfGame);
    gameOver = false;
    target = colors[random(0, levelOfGame-1)];
    targetDisplay.textContent = target;
    instDisplay.textContent = "Hi";
    squares.forEach((element, i) => {
        element.style.backgroundColor = colors[i];
        element.classList.remove("d-none");
    });
    for(let i=levelOfGame;i<6;i++ ){
        squares[i].classList.add("d-none");
    }
};

// Fresh Colors function
const randomColors = function (level) {
    for (let index = 0; index < level; index++) {
        const x = random(0, 256);
        const y = random(0, 256);
        const z = random(0, 256);
        const color = "rgb(" + x + ", " + y + ", " + z + " )";
        colors[index] = color;
        console.log(colors[index]);
    }
}
// Setting random values to colors array
randomColors(levelOfGame);

// Setting Target
let target = colors[random(0, levelOfGame - 1)];

// Loop for squares display
function start() {
    squares.forEach((element, i) => {
        element.style.backgroundColor = colors[i];
        // Adding click event to each square
        element.addEventListener("click", function (event) {
            if (!gameOver) {
                if (colors[i] === target) {
                    gameOver = true;
                    console.log(gameOver);
                    instDisplay.textContent = "You WON!!!";
                    instDisplay.classList.remove("text-warning");
                    instDisplay.classList.add("text-success");
                    squares.forEach((element, i) => {
                        element.style.backgroundColor = target;
                    });
                } else {
                    element.classList.add("d-none");
                    instDisplay.classList.add("text-warning");
                    instDisplay.textContent = "Try Again"
                }
            }
        });
    });
}

// Dispalying Target Color
targetDisplay.textContent = target;

// Game start
start();