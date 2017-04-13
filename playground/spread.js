// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd))


// var groupA = ['Nikola', 'Kosta'];
// var groupB = ['Koja', 'Sale'];
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);


var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
// Hi Andrew, you are 25

function printMsg (name, age) {
  console.log(`Hi ${name}, you are ${age}`);
}

printMsg(...person);
printMsg(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Nemanja', ...names];
//Hi Andrew

function printName (arr) {
  arr.forEach(function(name) {
    console.log(`Hi ${name}`);
  })
}

printName(final);
