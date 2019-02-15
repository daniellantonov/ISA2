let a, b, c, d, e;

let names = ['david', 'eddie', 'alex', 'michael', 'sammy'];

/* [a, b, c, e, d] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e); */

/* let others;

[a, b, ...others] = names;
console.log(a);
console.log(b);
console.log(others); */


let year, model;
({ year, model } = {
    make: 'BMW',
    model: '750li',
    year: 2010,
    value: 5000
});

console.log(year);
console.log(model);