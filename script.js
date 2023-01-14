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

/*create button event listeners*/

for (let i=0; i<10; i++){
    const buttoni = document.querySelector('#btn'+i);
buttoni.addEventListener('click', () =>{digitEntry(i)});
}

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

/*function implementations*/

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
        return;
    }

    if (runningTotal == null){
        runningTotal = parseFloat(currentEntry);
        clearCurrentEntry();
    }   
    operation = operator;
    updateDisplay(); 
    return;}


function equals () {
  
    if(operation == null || runningTotal == null){     
        return;
    }
    runningTotal = calculateAnswer();
    clearCurrentEntry();
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
    return;
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