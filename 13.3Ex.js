
// Refactor the above code to use two arrow functions. Turn it into a one-liner.

// const double = arr => arr.map(val => val * 2);

// Answer
const double = arr => arr.map(val => val * 2);

// The given code is already using arrow functions. However, to turn it into a one-liner, you can remove the curly braces and the return keyword as follows:
// This code takes an array arr, applies the map method to it, and returns a new array with each element of arr multiplied by 2.


// Replace ALL functions with arrow functions:

// function squareAndFindEvens(numbers){
//   var squares = numbers.map(function(num){
//     return num ** 2;
//   });
//   var evens = squares.filter(function(square){
//     return square % 2 === 0;
//   });
//   return evens;
// }

// const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)


const squareAndFindEvens = numbers => numbers
  .map(num => num ** 2)
  .filter(square => square % 2 === 0);
