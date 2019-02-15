/*
function sayHello() {
    console.log('-------------');
    console.log('hello!');
    console.log('-------------');
}

//sayHello();
let a = sayHello;
a();
a();
a();
a();

function sayHello(name) {
    console.log('-------------');
    console.log('hello ' + name + '!');
    console.log('-------------');
}

sayHello('Daniel');
*/

function calculateTax(amount) {
    let result = amount * 0.0825;
    return result;
}

let tax = calculateTax(100);
console.log(tax);