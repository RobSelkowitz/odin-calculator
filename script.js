/*calculator logic. R Selkowitz, Jan 2023*/

let currentEntry = null; /*a string*/
let runningTotal = ""; /* and integer*/
let operation = null;

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

const signButton = document.querySelector('#signBtn');
signButton.addEventListener('click',() => {changeSign()});

const plusButton = document.querySelector('#addBtn');
plusButton.addEventListener('click', () =>{chooseOperator("+")});

const equalsButton = document.querySelector('#equalsBtn');
equalsButton.addEventListener('click', ()=>{equals()});

function digitEntry(digit){
    /*code to add the next digit or decimal point to the string*/
    if (currentEntry == null){
        currentEntry = String(digit);
    }else{
    currentEntry = currentEntry + String(digit);
    }
    updateDisplay();
    return;
}

function changeSign() {
    if(currentEntry.slice(0,1) == "-"){
        currentEntry = currentEntry.slice(1);
    } else {
        currentEntry = "-" + currentEntry;
    }
    updateDisplay();
    
}
function chooseOperator(operator) {
    if (operation == null){
        runningTotal = parseFloat(currentEntry);
        currentEntry = null;
        operation = operator; 
        updateDisplay();
    }
}
    /*code to move current entry into the running total 
    
    if current is null, convert to zero in all cases. there is always
    a value of current this way

    case 1: no total, no operator, convert current to int and move, 
    set operator and wait for second number
    case 2: yes total, no operator, set operator and wait
    case 3: yes total, yes operator: convert current, carry out 
    set operation, place in total, and set operator
    case 4: no total, yes operator: should not be possible*/


function equals () {
    alert("Let's do this thing!")
    if(operation == null){
        runningTotal = parseFloat(currentEntry);
        currentEntry = null;
        updateDisplay();
        return;
    }
    else {
        currentEntry = calculateAnswer();
        runningTotal = null;
        operation = null;
        updateDisplay();
        return;
}
}
function updateDisplay () {
    mainOutputDisplay.textContent = currentEntry;
    rightOutputDisplay.textContent = operation;
    leftOutputDisplay.textContent = runningTotal;
}
function calculateAnswer(){
    if(operation == "+"){
        return runningTotal+ parseFloat(currentEntry);
    }else if (operation == "-"){
        return runningTotal - parseFloat(currentEntry);
    }else if (operation == "/"){
        return runningTotal / parseFloat(currentEntry);/*can't catch div 0 */
    }else if (operation == "*"){
        return runningTotal * parseFloat(currentEntry);
    }

}