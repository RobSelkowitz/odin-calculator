/*calculator logic. R Selkowitz, Jan 2023*/

let currentEntry = "0"
let runningTotal = null; /* and integer*/
let operation = null;
let hasDecimal = false;

/*set up display*/
const mainOutputDisplay = document.querySelector('#mainOutput');
const rightOutputDisplay = document.querySelector('#rightDisplay');
const leftOutputDisplay = document.querySelector('#leftDisplay');

updateDisplay();

/*add event clicks for all buttons*/

const button1 = document.querySelector('#btn1');
button1.addEventListener('click', () =>{digitEntry(1)});
const button2 = document.querySelector('#btn2');
button2.addEventListener('click', () =>{digitEntry(2)});
const button3 = document.querySelector('#btn3');
button3.addEventListener('click', () =>{digitEntry(3)});
const button4 = document.querySelector('#btn4');
button4.addEventListener('click', () =>{digitEntry(4)});
const button5 = document.querySelector('#btn5');
button5.addEventListener('click', () =>{digitEntry(5)});
const button6 = document.querySelector('#btn6');
button6.addEventListener('click', () =>{digitEntry(6)});
const button7 = document.querySelector('#btn7');
button7.addEventListener('click', () =>{digitEntry(7)});
const button8 = document.querySelector('#btn8');
button8.addEventListener('click', () =>{digitEntry(8)});
const button9 = document.querySelector('#btn9');
button9.addEventListener('click', () =>{digitEntry(9)});
const button0 = document.querySelector('#btn0');
button0.addEventListener('click', () =>{digitEntry(0)});

const decimalButton = document.querySelector('#decimalBtn');
decimalButton.addEventListener('click', () =>{addDecimal();});

const signButton = document.querySelector('#signBtn');
signButton.addEventListener('click',() => {
    changeSign();});

const backButton = document.querySelector('#backBtn');
    backButton.addEventListener('click', () =>{backSpace();});
    

const addButton = document.querySelector('#addBtn');
addButton.addEventListener('click', () =>{
    chooseOperator("+");});
const subtractButton = document.querySelector('#subtractBtn');
subtractButton.addEventListener('click', () =>{
    chooseOperator("-");});
const multiplyButton = document.querySelector('#multiplyBtn');
multiplyButton.addEventListener('click', () =>{
    chooseOperator("*");});
const divideButton = document.querySelector('#divideBtn');
divideButton.addEventListener('click', () =>{
    chooseOperator("/");});

const equalsButton = document.querySelector('#equalsBtn');
equalsButton.addEventListener('click', ()=>{equals()});

const allClearButton = document.querySelector('#allClearBtn');
allClearButton.addEventListener('click', ()=>{allClear()});

const clearButton = document.querySelector('#clearBtn');
clearButton.addEventListener('click', ()=>{clearCurrentEntry()});

function clearCurrentEntry(){
    currentEntry = "0";
    hasDecimal = false;
    updateDisplay();
    return;
}

function allClear(){
    runningTotal = null;
    clearCurrentEntry();
    operation = null;
    updateDisplay();
    return;
}

function digitEntry(digit){
    /*code to add the next digit or decimal point to the string*/
    if (currentEntry == "0"){
        currentEntry = String(digit);
        updateDisplay();
        return;
    }
    currentEntry = currentEntry + String(digit);
    updateDisplay();
    return;
}

function changeSign() {
    if(currentEntry.slice(0,1) == "-"){
        currentEntry = currentEntry.slice(1);
        updateDisplay();
        return;}

        currentEntry = "-" + currentEntry;
        updateDisplay();
        return;
}
function chooseOperator(operator) {
    
    if (currentEntry == "0" && runningTotal == null){
        updateDisplay();
        return;} 

    if (runningTotal == null){
        runningTotal = parseFloat(currentEntry);
        currentEntry = "0"
        hasDecimal = false;;
        operation = operator;
        updateDisplay(); 
        return;}
    operation = operator;
        updateDisplay();
    return;
    }
    

function equals () {
  
    if(operation == null || runningTotal == null){     
        return;
    }
    runningTotal = calculateAnswer();
    currentEntry = "0"
    hasDecimal = false;;
    operation = null;
    updateDisplay();
    mainOutputDisplay.textContent = runningTotal;   
    
    return;
}
function backSpace(){
    if (currentEntry == "0"){return;}
    if (currentEntry.slice(-1) == "."){hasDecimal = false;}
    currentEntry = currentEntry.slice(0,-1);
    updateDisplay();
}
function addDecimal(){
    if (currentEntry == "0"){return;}
    if (hasDecimal == false ){
        digitEntry(".");
        hasDecimal = true;}
}

function updateDisplay () {
    mainOutputDisplay.textContent = currentEntry;
    rightOutputDisplay.textContent = operation;
    leftOutputDisplay.textContent = runningTotal;
}
function calculateAnswer(){
    if(operation == null || runningTotal == null){
        return(runningTotal);
    }
    if(operation == "/" && parseFloat(currentEntry) == "0"){
        alert("Divide By Zero Error - enter a new operator and value!");
        return (runningTotal);
    }
    if(operation == "+"){return (runningTotal + parseFloat(currentEntry));}
    if (operation == "-"){return (runningTotal - parseFloat(currentEntry));}
    if (operation == "/"){return (runningTotal / parseFloat(currentEntry));}/*can't catch div 0 */
    if (operation == "*"){return (runningTotal * parseFloat(currentEntry));
    }

}