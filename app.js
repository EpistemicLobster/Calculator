const output = document.querySelector('#output')

//Variable linkage to DOM elements
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

const decimal = document.querySelector('.decimal');

const negate = document.querySelector('.negate')
const percent = document.querySelector('.percent')
const ac = document.querySelector('.ac')

const opSubtract = document.querySelector('.subtract')
const opAdd = document.querySelector('.add')
const opMultiply = document.querySelector('.multiply')
const opDivide = document.querySelector('.divide')
const equal = document.querySelector('.equal')
// const numbers = document.querySelectorAll('.number')


//set inital variable values for functions
let inputState = true;

let operatorState = false;

let clearDigit = false;

let register = '';

let result = 0;

//Add event listeners to integer keys
zero.addEventListener('click', () => {
    if (outputMax()) {
    zeroCheck();
    output.textContent += '0';}
})
one.addEventListener('click', () => {
    if(outputMax()) {
    zeroCheck();
    output.textContent += '1';
    }
})
two.addEventListener('click', () => {
    if(outputMax()){
    zeroCheck();
    output.textContent += '2'
    }
});
three.addEventListener('click', () => {
    if(outputMax()) {
        zeroCheck();
        output.textContent += '3'}
    });
four.addEventListener('click', () => {
    if(outputMax()) {
        zeroCheck();
        output.textContent += '4'}
    });
five.addEventListener('click', () => {
    if(outputMax()) {
        zeroCheck();
        output.textContent += '5'}
    });
six.addEventListener('click', () => {
    if(outputMax()) {
        zeroCheck();
        output.textContent += '6'}
    });
seven.addEventListener('click', () => {
    if(outputMax()) {
        zeroCheck();
        output.textContent += '7'}
    });
eight.addEventListener('click', () => {
    if(outputMax()) {
        zeroCheck();
        output.textContent += '8'}
    });
nine.addEventListener('click', () => {
    if(outputMax()) {
        zeroCheck();
        output.textContent += '9'}
    });

decimal.addEventListener('click', () => {
    if(outputMax() && output.textContent.endsWith('.') == false) {
        output.textContent += '.'}
})

negate.addEventListener('click', () => {
    output.textContent = -(output.textContent);
})

percent.addEventListener('click', () => {
    if (register !== '') {
    output.textContent = ((+(output.textContent) / 100) * register);
    operate();
    } else {
    result = `${+(output.textContent) / 100}`;
    printResult();
    }
})

ac.addEventListener('click', () => {
    output.textContent = '0';
    register = '';
});

//number population parameter funcitons

function preventZeros() {
    if (output.textContent == '0') {
        output.textContent = '0';
        } else {output.textContent += '0';}
}

function outputMax() {
    if(output.textContent.length > 7) {
        return false
    } else {
        return true
    }
}

function zeroCheck() {
    if(output.textContent == '0'|| clearDigit) {
        output.textContent = '';
        clearDigit = false;
    }
}

function printResult() {
    output.textContent = result;
    clearDigit = true;
    register = result;
}

//add event listeners to operator keys

opDivide.addEventListener('click', () => {
    if(register !== '') {
        operate()
        operatorState = 'divide';
    } else {
    register = +(output.textContent);
    clearDigit = true;
    operatorState = 'divide';
    }
})

opMultiply.addEventListener('click', () => {
    if(register !== '') {
        operate()
        operatorState = 'multiply';
    } else {
    register = +(output.textContent);
    clearDigit = true;
    operatorState = 'multiply';
    }
})

opSubtract.addEventListener('click', () => {
    if(register !== '') {
        operate()
        operatorState = 'subtract';
    } else {
    register = +(output.textContent);
    clearDigit = true;
    operatorState = 'subtract';
    }
})

opAdd.addEventListener('click', () => {
    if(register !== '') {
        operate()
        operatorState = 'add';
    } else {
    register = +(output.textContent);
    clearDigit = true;
    operatorState = 'add';
    }
})

equal.addEventListener('click', () => {
    operate();
    register = '';

});

function operate() {
    if(register == '' && output.textContent == 0) {
        return
    } 
    if(operatorState == 'divide') {
        if (output.textContent == 0) {
            result = "Nope!"
            printResult();
        } else {
            result = divide(register, +(output.textContent));
            printResult();
        }

    } else if(operatorState == 'multiply') {
        result = multiply(register, +(output.textContent));
        printResult();
    } else if(operatorState == 'subtract') {
        result = subtract(register, +(output.textContent));
        printResult();
    } else if(operatorState == 'add') {
        result = add(register, +(output.textContent));
        printResult();
    }
}

//Basic Calculator Functions Below
function add (a,b) {
    // return a + b;
    return (+(a+b).toFixed(2))
}

function subtract (a,b) {
    // return a - b;
    return (a-b.toFixed(2))
}


function multiply (a,b) {
    // return a * b;
    return (a*b.toFixed(2))
}

function divide (a,b) {
    // return a/b;
        return +((a/b).toFixed(2));
    }

//Add Keyboard Support Below
