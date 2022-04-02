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
const ac = document.querySelector('.ac')

console.log(output.textContent.length);

zero.addEventListener('click', () => {
    if (output.textContent == '0' || output.textContent == '') {
    output.textContent = '0';
    } else {output.textContent += '0';}
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
ac.addEventListener('click', () => output.textContent = '0');

function preventZeros() {
    if (output.textContent == '0' || output.textContent == '') {
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
    if(output.textContent == '0') {
        output.textContent = ''
    }
}

console.log(outputMax())


/* Attempt to add event listeners and corresponding outputs to buttons via loop*/
// let numbers = (document.querySelectorAll('.number'));
// console.log(numbers[0])
// console.log(numbers);
// let i = 0;
// for(let i = 0; i <= numbers.length; i++) {
//     numbers[i].addEventListener('click', () => output.textContent = ('goodbye'));
// }

// output.textContent = "hello";








//Basic Calculator Functions Below

function operate (a, b, operator) {
    let ans = operator(a,b); 
}

function add (a,b) {
    // return a + b;
    console.log(+(a+b).toFixed(2))
}

function subtract (a,b) {
    // return a - b;
    console.log(a-b.toFixed(2))
}


function multiply (a,b) {
    // return a * b;
    console.log(a*b.toFixed(2))
}

function divide (a,b) {
    if(b ===0) {
        console.log('You wish!')
    }
    // return a/b;
    console.log((a/b).toFixed(2))
}

