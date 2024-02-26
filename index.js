const totalScore = document.querySelector(".score");
const boxes = document.querySelectorAll(".box");

// Function to generate a random integer within a range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initGame() {
    generateRandomNumber();
    generateRandomNumber();
}

function generateRandomNumber() {
    console.log("Generating random number...");
    const emptyBoxes = [...boxes].filter(box => box.innerText === "");   // boxes 2d array copied
    console.log("Empty boxes:", emptyBoxes);

    if (emptyBoxes.length > 0) {
        const randomBox = emptyBoxes[getRandomInt(0, emptyBoxes.length - 1)];
        console.log("Random box:", randomBox);
        randomBox.innerText = "2";
        randomBox.style.color = "white";
        randomBox.style.fontWeight = "bold";
        randomBox.style.fontSize = "4rem";
        console.log("Styles applied:", randomBox.style);
    }
}


// Function to handle key press events
function handleKeyPress(event) {
    switch (event.key) {
        case "ArrowUp":
            moveUp();
            break;
        case "ArrowDown":
            moveDown();
            break;
        case "ArrowLeft":
            moveLeft();
            break;
        case "ArrowRight":
            moveRight();
            break;
        default:
            break;
    }

    // check for game over
    if (isGameOver()) {
        displayGameOver();
    }
}


let score = 0;

// Function to update the score on the UI
function updateScore() {
    totalScore.style.color = "white";
    totalScore.textContent = `Score: ${score}`;
}

function combineNumbers(number1, number2) {
    const combinedNumber = parseInt(number1, 10) + parseInt(number2, 10);
    score += combinedNumber; // Increase the score
    updateScore(); // Update the score on the UI
    return combinedNumber.toString();
}

// Function to move numbers up
function moveUp() {

    let moved = false;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const currentBox = boxes[i * 4 + j];
            if (currentBox.innerText !== "") {
                let targetBox = currentBox;
                let row = i;
                while (row > 0) {
                    const nextBox = boxes[(row - 1) * 4 + j];
                    if (nextBox.innerText === "") {
                        targetBox = nextBox;
                        row--;
                        moved = true;
                    } else if (nextBox.innerText === currentBox.innerText) {
                        targetBox = nextBox;
                        row--;
                        moved = true;
                        break;
                    } else {
                        break;
                    }
                }

                if (targetBox !== currentBox) {
                    if (targetBox.innerText === "") {
                        targetBox.innerText = currentBox.innerText;
                        currentBox.innerText = "";
                    } else {
                        targetBox.innerText = combineNumbers(currentBox.innerText, targetBox.innerText);
                        currentBox.innerText = "";
                    }
                }
            }
        }
    }

    if (moved) generateRandomNumber();


    console.log("Moving numbers up...");
    if (isGameOver()) {
        displayGameOver();
    }
    document.addEventListener("keydown", handleKeyPress);


}

// Function to move numbers down
function moveDown() {

    let moved = false;

    for (let i = 3; i >= 0; i--) {
        for (let j = 3; j >= 0; j--) {
            const currentBox = boxes[i * 4 + j];
            if (currentBox.innerText !== "") {
                let targetBox = currentBox;
                let row = i;
                while (row < 3) {
                    const nextBox = boxes[(row + 1) * 4 + j];
                    if (nextBox.innerText === "") {
                        targetBox = nextBox;
                        row++;
                        moved = true;
                    } else if (nextBox.innerText === currentBox.innerText) {
                        targetBox = nextBox;
                        row++;
                        moved = true;
                        break;
                    } else {
                        break;
                    }
                }

                if (targetBox !== currentBox) {
                    if (targetBox.innerText === "") {
                        targetBox.innerText = currentBox.innerText;
                        currentBox.innerText = "";
                    } else {
                        targetBox.innerText = combineNumbers(currentBox.innerText, targetBox.innerText);
                        currentBox.innerText = "";
                    }
                }
            }
        }
    }

    if (moved) generateRandomNumber();



    if (isGameOver()) {
        displayGameOver();
    }
    document.addEventListener("keydown", handleKeyPress);

    // console.log("Moving numbers down...");
}

// Function to move numbers left
function moveLeft() {

    let moved = false;

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const currentBox = boxes[i * 4 + j];
            if (currentBox.innerText !== "") {
                let targetBox = currentBox;
                let col = j;
                while (col > 0) {
                    const nextBox = boxes[i * 4 + (col - 1)];
                    if (nextBox.innerText === "") {
                        targetBox = nextBox;
                        col--;
                        moved = true;
                    } else if (nextBox.innerText === currentBox.innerText) {
                        targetBox = nextBox;
                        col--;
                        moved = true;
                        break;
                    } else {
                        break;
                    }
                }

                if (targetBox !== currentBox) {
                    if (targetBox.innerText === "") {
                        targetBox.innerText = currentBox.innerText;
                        currentBox.innerText = "";
                    } else {
                        targetBox.innerText = combineNumbers(currentBox.innerText, targetBox.innerText);
                        currentBox.innerText = "";
                    }
                }
            }
        }
    }

    if (moved) generateRandomNumber();


    console.log("Moving numbers left...");
    if (isGameOver()) {
        displayGameOver();
    }
    document.addEventListener("keydown", handleKeyPress);


}

// Function to move numbers right
function moveRight() {
    let moved = false;

    for (let i = 0; i < 4; i++) {
        for (let j = 3; j >= 0; j--) {
            const currentBox = boxes[i * 4 + j];
            if (currentBox.innerText !== "") {
                let targetBox = currentBox;
                let col = j;
                while (col < 3) {
                    const nextBox = boxes[i * 4 + (col + 1)];
                    if (nextBox.innerText === "") {
                        targetBox = nextBox;
                        col++;
                        moved = true;
                    } else if (nextBox.innerText === currentBox.innerText) {
                        targetBox = nextBox;
                        col++;
                        moved = true;
                        break;
                    } else {
                        break;
                    }
                }

                if (targetBox !== currentBox) {
                    if (targetBox.innerText === "") {
                        targetBox.innerText = currentBox.innerText;
                        currentBox.innerText = "";
                    } else {
                        targetBox.innerText = combineNumbers(currentBox.innerText, targetBox.innerText);
                        currentBox.innerText = "";
                    }
                }
            }
        }
    }

    if (moved) generateRandomNumber();


    console.log("Moving numbers right...");
    if (isGameOver()) {
        displayGameOver();
    }
    document.addEventListener("keydown", handleKeyPress);

}

// game over logic
function isGameOver() {
    // Check if any empty box is available
    for (let box of boxes) {
        if (box.innerText === "") return false;
    }

    // Check if any adjacent boxes can be combined horizontally
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            const currentBox = boxes[i * 4 + j];
            const nextBox = boxes[i * 4 + j + 1];
            if (currentBox.innerText === nextBox.innerText) return false;
        }
    }

    // Check if any adjacent boxes can be combined vertically
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            const currentBox = boxes[i * 4 + j];
            const nextBox = boxes[(i + 1) * 4 + j];
            if (currentBox.innerText === nextBox.innerText) return false;
        }
    }
    return true;
}


function displayGameOver() {
    const gameOverMessage = document.getElementById("gameOverMessage");
    gameOverMessage.style.display = "block";
    totalScore.style.display = "none";
    setTimeout(() => {
        restartGame();
    }, 3000);
}

// Function to restart the game
function restartGame() {
    const gameOverMessage = document.getElementById("gameOverMessage");
    gameOverMessage.style.display = "none";

    // Clear all boxes
    for (let box of boxes) {
        box.innerText = "";
    }

    // Reset score
    score = 0;
    updateScore();
    totalScore.style.display = "block";

    // Generate initial numbers in two random boxes
    generateRandomNumber();
    generateRandomNumber();
}

// initial function calling


alert("Play with keyboard arrow keys");
initGame();
updateScore();
document.addEventListener("keydown", handleKeyPress);
