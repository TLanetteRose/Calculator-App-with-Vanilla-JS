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

    deleteNumber() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    /*chooseOperation(operation){
        if (this.currentOperand === '') return
        if (this. previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }*/

    multiplyNumber(operation) {
        if (this.currentOperand === "") return
        if (this.previousOperand !== "") {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }

    divideNumber(operation) {
        if (this.currentOperand === "") return
        if (this.previousOperand !== "") {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }

    addNumber(operation) {
        if (this.currentOperand === "") return
        if (this.previousOperand !== "") {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }

    subtractNumber(operation) {
        if (this.currentOperand === "") return
        if (this.previousOperand !== "") {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ""
    }


    compute() {
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break 
            default:
                return  
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0, 
            
            })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = (this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
                this.previousOperand
            )} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ""
        }
    }

}



// Variables
const numberButtons = document.querySelectorAll('[data-number]');
//const operationButtons = document.querySelectorAll('[data-operation]');
const addButton = document.querySelector('[data-add');
const subtractButton = document.querySelector('[data-subtract');
const multiplyButton = document.querySelector('[data-multiply');
const divideButton = document.querySelector('[data-divide');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

// Creates a new calculator

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        //document.querySelector('#nums').innerText = button.innerText
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

/*operationsButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})*/

addButton.addEventListener('click', () => {
    calculator.addNumber(addButton.innerText)
    calculator.updateDisplay()
})

subtractButton.addEventListener('click', () => {
    calculator.addNumber(subtractButton.innerText)
    calculator.updateDisplay()
})

multiplyButton.addEventListener('click', () => {
    calculator.addNumber(multiplyButton.innerText)
    calculator.updateDisplay()
})

divideButton.addEventListener('click', () => {
    calculator.addNumber(divideButton.innerText)
    calculator.updateDisplay()
})

equalsButton.addEventListener('click', () => {
        calculator.compute()
        calculator.updateDisplay()
    })


resetButton.addEventListener('click', () => {
        calculator.clear()
        calculator.updateDisplay()
    })

deleteButton.addEventListener('click', () => {
        calculator.deleteNumber()
        calculator.updateDisplay()
    })