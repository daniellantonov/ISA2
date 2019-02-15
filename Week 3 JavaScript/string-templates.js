/* let name = 'bob';
console.log(`hi ${name}`);

 */

function getReasoCount() { return 2; }

let interpolation = `Give me ${getReasoCount()==1 ? 'one good reason' : 'a few reasons'} to try this.`
console.log(interpolation);