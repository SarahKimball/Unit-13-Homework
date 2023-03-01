1. 
// The output of the console.log statements would be:
// 8
// 1846

2. 

// The output of the console.log statement would be:

// { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }

3. 
// The output of the three function calls would be:

// "Your name is Alejandro and you like purple"
// "Your name is Melissa and you like green"
// "Your name is undefined and you like green"

4. 
// The output of the console.log statements would be:

// "Maya"
// "Marisa"
// "Chi"

5.
// The output of the console.log statements would be:
// "Raindrops on roses"
// "whiskers on kittens"
// [ "Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings" ]

6. 
// The output of the console.log statement would be:
// [10, 30, 20]


7. 
// The equivalent ES2015 version using object destructuring would be:

const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

const { numbers: { a, b } } = obj;

8. 
// The equivalent ES2015 one-line version using array destructuring would be:

let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

9. 
const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest });

// When called returns below

// {
// first: "Tom",
// second: "Margaret",
// third: "Allison",
// rest: ["David", "Pierre"]
//   }
  
