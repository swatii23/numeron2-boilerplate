// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");

var score = 0;

function generateNumber() {
    number1.textContent = Math.ceil(Math.random() * 100);
    number2.textContent = Math.ceil(Math.random() * 100);
       
}

// Iteration 3: Creating variables required to make the game functional
let num1 = 0;
let num2 = 0;
let num3 = 0;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional\


let operators = ["+", "-", "*", "/", "%"];



{/* <img src="./assets/Numeron_plus.png" alt="" id="plus">
<img src="./assets/Numeron_minus.png" alt="" id="minus">
<img src="./assets/Numeron_mul.png" alt="" id="mul">
<img src="./assets/Numeron_div.png" alt="" id="divide">
<img src="./assets/Numeron_per.png" alt="" id="modulus"> */}

document.getElementById("plus").onclick = () => {
    if(num1 + num2 == num3) 
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
