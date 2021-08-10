// Hold information for input and operations
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        this.currentOperand = number
        //console.log(number)
    }

    chooseOperation(operation){

    }

    compute() {

    }

    getDisplayNumber(number){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand

    }

}







// Variables
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelectorAll('[data-equals]');
const deleteButton = document.querySelectorAll('[data-delete]');
const resetButton = document.querySelectorAll('[data-reset]');
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]');
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('#nums').textContent = button.textContent
        calculator.appendNumber(button.textContent)
        calculator.updateDisplay()
    })
})