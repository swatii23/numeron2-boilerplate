// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");

var score = 0;
let num1 = 0;
let num2 = 0;
let num3 = 0;

function generateNumber() {
    num1 = Math.ceil(Math.random() * 100);
    num2 = Math.ceil(Math.random() * 100);

    let operator = generateOperator();
    switch (operator) {
        case "+":
            num3 = Math.ceil(num1 + num2);
            break;
        case "-":
            num3 = Math.ceil(num1 - num2);
            break;
        case "*":
            num3 = Math.ceil(num1 * num2);
            break;
        case "/":
            num3 = Math.ceil(num1 / num2);
            break;
        case "%":
            num3 = Math.ceil(num1 % num2);
            break;
    
        default:
            break;
    }

    number1.textContent = num1;
    number2.textContent = num2;
    number3.textContent = num3;
       
}

function generateOperator() {
    let operators = ["+", "-", "*", "/", "%"];
    let ind = Math.floor(Math.random() * operators.length)

    return operators[ind];
}

// Iteration 3: Creating variables required to make the game functional


// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional\






{/* <img src="./assets/Numeron_plus.png" alt="" id="plus">
<img src="./assets/Numeron_minus.png" alt="" id="minus">
<img src="./assets/Numeron_mul.png" alt="" id="mul">
<img src="./assets/Numeron_div.png" alt="" id="divide">
<img src="./assets/Numeron_per.png" alt="" id="modulus"> */}

document.getElementById("plus").onclick = () => {
    if(Math.ceil(num1 + num2) == num3) 
    score++;
    localStorage.setItem("score", JSON.stringify(score));
    generateNumber();
}

document.getElementById("minus").onclick = () => {
    if(num1 - num2 == num3) 
    score++;
    localStorage.setItem("score", JSON.stringify(score));
    generateNumber();
}

document.getElementById("mul").onclick = () => {
    if(num1 * num2 == num3) 
    score++;
    localStorage.setItem("score", JSON.stringify(score));
    generateNumber();
}

document.getElementById("divide").onclick = () => {
    if(num1 / num2 == num3) 
    score++;
    localStorage.setItem("score", JSON.stringify(score));
    generateNumber();
}

document.getElementById("modulus").onclick = () => {
    if(num1 % num2 == num3) 
    score++;
    localStorage.setItem("score", JSON.stringify(score));
    generateNumber();
}

let time = 20;
const timerElement = document.getElementById("timer");

function updateTimer() {
  timerElement.textContent = time;
  if(time > 0) {
    time--;
  } else {
    window.location.href = "gameover.html"
  }
}

setInterval(updateTimer, 1000);