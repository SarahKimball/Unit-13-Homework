1.
// Given this function:
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }
// Refactor it to use the rest operator & an arrow function:
// /* Write an ES2015 Version */


// Answer
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);
// This code defines a function filterOutOdds using the rest operator ... to allow the function to accept any number of arguments as an array nums. The arrow function used with the filter method checks whether each number in the nums array is even using the modulo operator %, and returns a new array containing only the even numbers. This code achieves the same result as the original filterOutOdds function but is more concise and uses ES2015 features.


2.
// findMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...args) => Math.min(...args);


3. 
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

// This code defines a function mergeObjects that accepts two objects obj1 and obj2. The spread operator ... is used to create a new object that contains all the keys and values of both objects by spreading them into the new object. This new object is then returned from the function.


4. 
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(arg => arg * 2)];

// This code defines a function doubleAndReturnArgs that accepts an array arr and a variable number of arguments using the rest operator ...args. The spread operator ... is used to create a new array that contains all the values of the original array arr and all of the additional arguments doubled. The map method is used with an arrow function to double each argument in the args array. This new array is then returned from the function. This code achieves the desired result of doubling all the arguments and returning a new array containing both the original array and the doubled arguments.

5. 
// Slice and Dice
// remove a random element in the items array and return a new array without that item
const removeRandom = items => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
  }
  
  // Return a new array with every item in array1 and array2.
  const extend = (array1, array2) => [...array1, ...array2];
  
  // Return a new object with all the keys and values from obj and a new key/value pair.
  const addKeyVal = (obj, key, val) => ({...obj, [key]: val});
  
  // Return a new object with a key removed.
  const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
  };
  
  // Combine two objects and return a new object.
  const combine = (obj1, obj2) => ({...obj1, ...obj2});
  
  // Return a new object with a modified key and value.
  const update = (obj, key, val) => ({...obj, [key]: val});
  