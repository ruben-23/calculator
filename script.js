function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operate(firstNumber, operator, secondNumber) {

   
    switch(operator) {
        case '+':
            return add(firstNumber, secondNumber);
           
        case '-':
            return substract(firstNumber, secondNumber);
            
        case '*':
            return multiply(firstNumber, secondNumber);
           
        case '/':
            return divide(firstNumber, secondNumber);
               
    }

}

function updateDisplay(result) {

    const display = document.querySelector(".display");

    display.textContent = result;

}


function isDigit(value) {

    const digits = "0123456789";

    return digits.includes(value);

}

function isOperator(value) {
    return "+-/*".includes(value);
}

function updateVariables(value) {

}

let firstNumber;
let secondNumber;
let operator = '+';

let result = 0;

const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");

equalsButton.addEventListener("click", () => {

    result = operate(firstNumber, operator, secondNumber);
    updateDisplay(result);
});

digitButtons.forEach( (button) => {

    let buttonValue = button.textContent;

    button.addEventListener("click", () => {

        if(!firstNumber){
            firstNumber = parseInt(buttonValue);
            updateDisplay(buttonValue);
        } else if(!secondNumber){
            secondNumber = parseInt(buttonValue);
            updateDisplay(buttonValue);
        } else {
            firstNumber = result;
            secondNumber = parseInt(buttonValue);  
 
            result = operate(firstNumber, operator, secondNumber);
            updateDisplay(result);        
        } 
        
       
    });
} );

operatorButtons.forEach( (button) => {

    button.addEventListener("click", () => {
        operator = button.textContent;
    })
});
