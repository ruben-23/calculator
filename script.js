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

    if(secondNumber === 0){
        return "ERROR";   
    } 

    return Math.round(a/b * 10**6)/(10**6);
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

    result = result.toString();
    
    if(result.length > 9){
        display.textContent = result.substring(0, 9);
    } else {
        display.textContent = result;
    }
}

let firstNumber = null;
let secondNumber = null;
let operator = null;
let result = null;

// to know if the operator has been pressed
let operatorCheck = false;

const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");
const clearButtton = document.querySelector("#clear");

equalsButton.addEventListener("click", () => {

    if(firstNumber === null || secondNumber === null) return;

    result = operate(firstNumber, operator, secondNumber);
    updateDisplay(result);

    operatorCheck = false;

    firstNumber = result;
    secondNumber = null;

});

clearButtton.addEventListener("click", () => {

    firstNumber = null;
    secondNumber = null;
    result = null;
    operator = null;
    operatorCheck = false;
    updateDisplay(0);

})

digitButtons.forEach( (button) => {

    let buttonValue = button.textContent;

    button.addEventListener("click", () => {

        if(firstNumber === null) {
            firstNumber = parseInt(buttonValue);
            updateDisplay(firstNumber);
            return;
        }

        if (secondNumber === null && operatorCheck){
            secondNumber = parseInt(buttonValue);
            updateDisplay(secondNumber);
            return;
        } 

        if(!operatorCheck){
            firstNumber = firstNumber*10 + parseInt(buttonValue);
            updateDisplay(firstNumber);
        } else {
            secondNumber =  secondNumber*10 + parseInt(buttonValue);
            updateDisplay(secondNumber);
        }
        
    });
} );

operatorButtons.forEach( (button) => {

    button.addEventListener("click", () => {
        
        if(firstNumber !== null && secondNumber !== null) {
            equalsButton.click();
        }

        if(firstNumber !== null){
            operatorCheck = true;
        }

        operator = button.textContent;

    })
});

updateDisplay(0);