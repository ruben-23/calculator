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
            display(add(firstNumber, secondNumber));
            break;
        case '-':
            display(substract(firstNumber, secondNumber));
            break;
        case '*':
            display(multiply(firstNumber, secondNumber));
            break;
        case '/':
            display(divide(firstNumber, secondNumber));
            break;    
    }
}


function display(displayValue) {

    if(!isDigit(displayValue)){
        return;
    }

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
        firstNumber = result;
        secondNumber = value;
    }

}



let firstNumber;
let operator;
let secondNumber;
let displayValue;

const buttons = document.querySelectorAll(".digits button");

buttons.forEach( (button) => {

    button.addEventListener("click", () => {
        displayValue = button.textContent;
        display(displayValue);


        updateVariables(displayValue);

    })

} )

