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
    return Math.round(a/b * 1000)/1000;
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

let firstNumber = null;
let secondNumber = null;
let operator = null;
let result = null;

// to know if the operator has been pressed
let operatorCheck = false;
let equalsCheck = false;

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
    updateDisplay('');

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
            console.log(firstNumber);
            updateDisplay(firstNumber);
        } else {
            secondNumber =  secondNumber*10 + parseInt(buttonValue);
            updateDisplay(secondNumber);
        }
        
    });
} );

operatorButtons.forEach( (button) => {

    button.addEventListener("click", () => {
        
        if(firstNumber && secondNumber && !equalsCheck){
            equalsButton.click();
        }

        operator = button.textContent;

        if(firstNumber){
            operatorCheck = true;
        }

        

    })
});
