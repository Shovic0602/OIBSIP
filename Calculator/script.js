class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    let len = this.currentOperand.length;
    if(len === 0) return;
    let str = "";
    for(let i = 0;i<len-1;i++){
      str+= this.currentOperand[i];
    }
    this.currentOperand = str;
  }

  appendNumber(number) {
    if(number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString()  ;
  }

  chooseOperation(operation) {
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    if(this.operation === undefined || this.currentOperand === "") return;
    let var1 = this.currentOperand;
    if(this.operation === '-'){
      this.currentOperand = ((+this.previousOperand) - (+this.currentOperand)).toString();
    }
    if(this.operation === '+'){
      this.currentOperand = ((+this.previousOperand) + (+this.currentOperand)).toString();
    }
    if(this.operation === '*'){
      this.currentOperand = ((+this.previousOperand) * (+this.currentOperand)).toString();
    }
    if(this.operation === '÷'){
      this.currentOperand = ((+this.previousOperand) / (+this.currentOperand)).toString();
    }
    this.previousOperand = var1;
    this.operation = undefined;

  }

  getDisplayNumber(number) {
    
  }
  updateDisplay() {
   
    this.currentOperandTextElement.innerText = this.currentOperand;
    this.previousOperandTextElement.innerText = this.previousOperand;
   if(this.operation !== undefined){
    this.previousOperandTextElement.innerText += this.operation;
   }

   localStorage.setItem('data',this.currentOperand.toString());
   localStorage.setItem('data2',this.previousOperand.toString());

  }
}


const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);


const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);


numberButtons.forEach(button => {
  button.addEventListener('click',()=>{
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
})

operationButtons.forEach(button =>{
  button.addEventListener('click',()=>{
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  })
})

equalsButton.addEventListener('click',()=>{
  calculator.compute();
  calculator.updateDisplay();
})

deleteButton.addEventListener('click',()=>{
  calculator.delete();
  calculator.updateDisplay();
})

allClearButton.addEventListener('click', () =>{
  calculator.clear();
  calculator.updateDisplay();
   remove();
})

const showText = () => {
  calculator.currentOperandTextElement.innerText = localStorage.getItem('data');
  calculator.previousOperandTextElement.innerText = localStorage.getItem('data2');
}

showText();

const remove = () => {
  localStorage.removeItem('data');
  localStorage.removeItem('data2');
}