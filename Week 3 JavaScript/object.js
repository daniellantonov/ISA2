/*
let car = {
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
};

car.printDescription();
console.log(car.year);
console.log(car.getPrice());

//console.log(car['year']);
//console.log(car[1]);

var anotherCar = {};
anotherCar.whatever = 'daniel';
console.log(anotherCar.whatever);

var a = {
    myProperty: { b: 'hi' }
};
console.log(a.myProperty.b);

var c = {
    myProperty: [
        {d: 'this'},
        {e: 'can'},
        {f: 'get'},
        {g: 'carzy'}
    ]
}
*/

let carLot = [
    { year: 2017, make: 'Toyota', model: '4Runner' },
    { year: 2015, make: 'BMW', model: '320d' },
    { year: 1982, make: 'Toyota', model: 'Supra' },
];

//console.log(carLot.length);
//console.log(carLot[1].make);

let contacts = {
    customers: [
        { firstName: 'Daniel', lastName: 'Antonov', phoneNumbers: ['123423432', '12343242312'] },
    ],
    employees: [
        { firstName: 'Dan', lastName: 'Just', phoneNumbers: ['122', '123'] },
    ]
};

let customerName = contacts.customers[0].firstName;
let customerPhoneNr = contacts.customers[0].phoneNumbers[0];
console.log(customerName + ' -> ' + customerPhoneNr);