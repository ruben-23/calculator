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
        alert("Can't divide by zero"); 
        return;
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

    display.textContent = result;

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
    console.log(firstNumber);
    console.log(secondNumber === 0);
    console.log(operator);

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
            console.log("miau 1");
            updateDisplay(firstNumber);
            return;
        }

        if (secondNumber === null && operatorCheck){
            secondNumber = parseInt(buttonValue);
            console.log("miau 2");
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

        operator = button.textContent;

        if(firstNumber !== null){
            operatorCheck = true;
        }

    })
});

updateDisplay(0);