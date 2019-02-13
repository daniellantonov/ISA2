let a = 'first';

function scopeTest() {
    console.log(a)
    a = 'changed';
    let b = 'second';
    if (a != '') {
        console.log('inside if: ' + b);
        console.log(a);
    }
}

scopeTest();
//console.log(b);
console.log(a);