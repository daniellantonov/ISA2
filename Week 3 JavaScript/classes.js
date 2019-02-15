//declaration
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    print() {
        console.log(`${this.make} ${this.model} ${this.year}`);
    }
}

let myCar = new Car('bmw', '335i', 2012);
myCar.print();


/* //expression
let car= class{

} */

class SportsCar extends Car {
    recEngine() {
        console.log('Vrrrrmmmm goes the ' + this.model);
    }
}

let mySportsCar = new SportsCar('dodge', 'viper', 2011);
mySportsCar.print();
mySportsCar.recEngine();
//myCar.recEngine();