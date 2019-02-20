/* let a = 7 * undefined / "panama";
console.log(a);
console.log(typeof a);
 */
/* 
function beforeTryCatch(){
    let obj =undefined;
    console.log(obj.b);
    console.log('If the previous l;ine of code throws an exception you will never see it.')
}

beforeTryCatch(); */

/* function afterTryCatch() {
    try {
        let obj = undefined;
        console.log(obj.b);
        console.log('If the previous l;ine of code throws an exception you will never see it.')
    } catch (error) {
        console.log('I caugh an exception: ' + error.message);
    } finally {
        console.log('This will happen no matter what');
    }
    console.log('My application is still running');
}

afterTryCatch();

function just() {
    try {
        let a = 7 / "panama";
        console.log(a);
    } catch (exception) {
        console.log(exception.message);
    }
}
just(); */

function performCalc(obj) {
    if (!obj.hasOwnProperty('b')) {
        throw new Error('Object missing property');
    }
    return 6;
}

function performHigherLevelOperation() {
    let obj = {};
    let value = 0;
    try {
        value = performCalc(obj);
    } catch (error) {
        console.log('her' + error.message);
    }
    if (value == 0) {}
}

performHigherLevelOperation();