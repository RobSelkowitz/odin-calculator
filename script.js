/*calculator logic. R Selkowitz, Jan 2023*/

let currentEntry = null; /*a string*/
let runningTotal = ""; /* and integer*/
let operatorSelected = false;

const mainOutputDisplay = document.querySelector('#mainOutput');
mainOutputDisplay.textContent = currentEntry;

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
    /*code to either add or remove leading - from string*/
}

function chooseOperator() {
    /*code to move current entry into the running total 
    
    if current is null, convert to zero in all cases. there is always
    a value of current this way

    case 1: no total, no operator, convert current to int and move, 
    set operator and wait for second number
    case 2: yes total, no operator, set operator and wait
    case 3: yes total, yes operator: convert current, carry out 
    set operation, place in total, and set operator
    case 4: no total, yes operator: should not be possible*/
}

function equals () {
    /*if there is an operation already selected, carry it out
    and put in total.  Turn off operator and reset current to null*/ 
}

function updateDisplay () {
    mainOutputDisplay.textContent = currentEntry;
}