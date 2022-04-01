const gridContainer = document.querySelector










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

