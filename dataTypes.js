// undefined as multiple declarations for name (interpreter confused)
console.log(name); // undefined (hoisting), default of var

// console.log(name1); variable not before/after not defined : error

var name = 'Learning MERNStack'; // declare and assign value to var

console.log(name);
console.log('Data Type ', typeof name); // data type - String

// var name = "Learning vanilla Javascript" // redeclaration and reassignment
// name = "learning Ecma Script basics" // reassignment

var name = 2024; // dynamically changes the type depending on the value assigned

name = 20.24; // float , decimal still number
console.log(name);
console.log('Data Type ', typeof name); // data type - Number

var name = undefined; // valid data and type, majorly for by mistake, automaticaly assigned for not defined var

console.log(name);
console.log('Data Type ', typeof name); // data type - undefined

var name = null; // data value but type is not null, no use as of now (aware), have to put in manually

console.log(name);
console.log('Data Type ', typeof name); // data type - object

var name = {}; // creating an empty object

console.log(name);
console.log('Data Type ', typeof name); // data type - object

var name = {
  FirstName: 'hemant',
  Address: 'somewhere',
}; // Key-Value pair (Dictionary or List)

console.log(name);
console.log('Data Type ', typeof name); // data type - object

name = null;

console.log(name);
console.log('Data Type ', typeof name); // data type - object

name = {
  FirstName: 'hemant1',
  Address: 'somewhere1',
};

name = 1 == 2; //true

console.log(name);
console.log('Data Type ', typeof name); // data type - boolean

// empty object, hold reference pointer
var emptyObj = {}; // 212
var emptyObj2 = {}; // 213
//var emptyObj2 = emptyObj shallow copy

name = emptyObj == emptyObj2;

console.log(name); // false , reference type
console.log('Data Type ', typeof name); // data type - boolean

var emptyObj = 2;
var emptyObj2 = "2";

name = emptyObj == emptyObj2;
console.log(name); // true

// ES-6 - used to create customized variable of my choice
var symbol_1 = Symbol('new value of my choice');
console.log(symbol_1);
console.log('Data Type ', symbol_1);
