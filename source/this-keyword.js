/* var car = {
    make: 'BMW',
    model: '745li',
    year: 2010,
    getPrice: function() {
        //perform some calc
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
}; */

/* function first() {
    return this;
}

console.log(first() === global); */

/* function second() {
    'use strict';

    return this;
}

console.log(second() === global);
console.log(second() === undefined); */

let myObject = { value: 'My Object' };

global.value = 'Global Object';

function third(name) {
    return this.value + name;
}

//console.log(third());

//console.log(third.call(myObject));
console.log(third.apply(myObject, [' bob']));