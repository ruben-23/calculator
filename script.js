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
            alert(add(firstNumber, secondNumber));
            break;
        case '-':
            alert(substract(firstNumber, secondNumber));
            break;
        case '*':
            alert(multiply(firstNumber, secondNumber));
            break;
        case '/':
            alert(divide(firstNumber, secondNumber));
            break;    
    }
}

const operationString = prompt("Enter the operation");

let operationArray = operationString.split('');

const firstNumber = parseInt(operationArray[0]);
const operator = operationArray[1];
const secondNumber = parseInt(operationArray[2]);
