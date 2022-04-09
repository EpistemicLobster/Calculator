/*----------------------------------
|      Variable Linkage to DOM      |
-----------------------------------*/
const output = document.querySelector('#output')
const gridContainer = document.querySelector('#numbers');

const decimal = document.querySelector('.decimal')
const zero = document.querySelector('.zero')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')

const percent = document.querySelector('.percent')
const negate = document.querySelector('.negate')
const ac = document.querySelector('.ac')

const equal = document.querySelector('.equal')
const divided = document.querySelector('.divide')
const times = document.querySelector('.multiply')
const minus = document.querySelector('.subtract')
const plus = document.querySelector('.add')

/*----------------------------------
|       Set Initial Variables       |
-----------------------------------*/
buttonArray = ['0','1','2','3','4','5','6','7','8','9','.']
let register = '';
let ans = '';
let clearOutput = false;
let operatorState = '';
let operatorNumber = '';
let primed = false;


/*----------------------------------
|           Number Keys             |
-----------------------------------*/
zero.addEventListener('click', () => outputKey(0));
one.addEventListener('click', () => outputKey(1));
two.addEventListener('click', () => outputKey(2));
three.addEventListener('click', () => outputKey(3));
four.addEventListener('click', () => outputKey(4));
five.addEventListener('click', () => outputKey(5));
six.addEventListener('click', () => outputKey(6));
seven.addEventListener('click', () => outputKey(7));
eight.addEventListener('click', () => outputKey(8));
nine.addEventListener('click', () => outputKey(9));
decimal.addEventListener('click', () => {
    if(output.textContent.includes('.')) {
        return
    } else
        outputKey(10);
})

/*----------------------------------
|           Special Keys            |
-----------------------------------*/
negate.addEventListener('click', () => {
    output.textContent = -(output.textContent);
})
percent.addEventListener('click', () => percentOperation())
ac.addEventListener('click', () => {
    clearOutput = false;
    register = '';
    output.textContent = 0;
})

divided.addEventListener('click', () => primeOperation(0))
times.addEventListener('click', () => primeOperation(1))
minus.addEventListener('click', () => primeOperation(2))
plus.addEventListener('click', () => primeOperation(3))
equal.addEventListener('click', () => operate())

/*----------------------------------
|           Core Functions          |
-----------------------------------*/

function outputKey(num) {
    if(outputMax()) {
    zeroCheck();
    output.textContent += buttonArray[num];
    }
}

function outputMax() {
    if(output.textContent.length > 7) {
        return false
    } else {
        return true
    }
}

function zeroCheck() {
    if(output.textContent == '0' || clearOutput) {
        output.textContent = '';
        clearOutput = false;
    }
}

function primeOperation(num) {
    operatorNumber = num;
    clearOutput = true;
    if(register == '') {
    operatorState = operatorNumber;
    register = output.textContent;
    } else {
    operate();
    register = output.textContent;
    operatorState = operatorNumber;
    }
}

function fixLongOutput() {
    if(ans.toString().length > 5) {
        return ans.toPrecision(4);
    } else {
        return ans;
    }
}

function percentOperation() {
    if (register !== '') {
        output.textContent = ((+output.textContent) / 100) * register;
        operate();
    } else {
        output.textContent = `${+(output.textContent) / 100}`
    }
}
/*----------------------------------
|    Basic Calculator Operations    |
-----------------------------------*/

function operate() {
    console.log(operatorState)
    switch(operatorState) {
        case 0:
            divide(+register, +output.textContent);
            ans = fixLongOutput();
            output.textContent = ans;
            break;
        case 1:
            multiply(+register, +output.textContent);
            console.log(ans);
            ans = fixLongOutput();
            output.textContent = ans;
            break;
        case 2:
            subtract(+register, +output.textContent);
            ans = fixLongOutput();
            output.textContent = ans;
            break;
        case 3: 
            add(+register, +output.textContent);
            ans = fixLongOutput();
            output.textContent = ans;
            break;
    }
}

function divide (a,b) {
    if(b === 0) {
        console.log('You wish!');
    }
    ans =  +(a/b).toFixed(3);
}

function multiply (a,b) {
    ans = +(a*b).toFixed(3);
}

function subtract (a,b) {
    ans = +(a-b).toFixed(3);
}

function add (a,b) {
    ans = +(+a + +b).toFixed(3);
}