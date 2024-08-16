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
            updateDisplay(add(firstNumber, secondNumber));
            break;
        case '-':
            updateDisplay(substract(firstNumber, secondNumber));
            break;
        case '*':
            updateDisplay(multiply(firstNumber, secondNumber));
            break;
        case '/':
            updateDisplay(divide(firstNumber, secondNumber));
            break;    
    }
}


function updateDisplay(displayValue) {

    const display = document.querySelector(".display");

    display.textContent = displayValue;

}


function isDigit(value) {

    const digits = "0123456789";

    return digits.includes(value);

}

function isOperator(value) {
    return "+-/*".includes(value);
}

function updateVariables(value) {

    if(!firstNumber && isDigit(value)){
        firstNumber = value;
    } else if (isOperator(value)) {
        operand = value;
    } else {
        secondNumber = value;
    }

}

let firstNumber;
let operator;
let secondNumber;
let displayValue='';

const buttons = document.querySelectorAll(".digits .digit");

buttons.forEach( (button) => {

    button.addEventListener("click", () => {
        displayValue += button.textContent;
        updateDisplay(displayValue);

        updateVariables(displayValue);

    })

} )

