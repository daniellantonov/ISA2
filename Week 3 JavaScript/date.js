let today = new Date();

let daniel = new Date('April 24, 1998 00:31:47');
let bob = new Date('1969-12-07T07:01:23');
let bob1 = new Date(1969, 11, 6);
let bob2 = new Date(1969, 11, 6, 7, 1, 23);

var elapsedTime = today - bob;

/* console.log(elapsedTime);
console.log(daniel.getDate());
console.log(bob.getTime()); */

console.log(bob.getMonth());
console.log(bob1.getMonth());
console.log(bob2.getMonth());