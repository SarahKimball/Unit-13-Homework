// Rewrite codes in ES2015 version

1. 
// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }

function createInstructor(firstName, lastName) {
    return{
        firstName, 
        lastName, 
    }
}


2. 
// var favoriteNumber = 42;
// var instructor = {
//   firstName: "Colt"
// }
// instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber = 42; 
const teacher = {
    firstName: "Sarah",
    [favoriteNumber]: "Thats my fav!!!!"
}


3. 
// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName " + "says bye!";
//   }
// }

const instructor = {
    firstName: "Sarah",
    sayHi(){
        return "HI!";
    },
    sayBye(){
        return this.firstName + "says bye";
    }
}


4.
// Animals Funtion
function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      console.log(noise);
    }
  };
}

const d = createAnimal("dog", "bark", "Woooof!");
d.bark(); 

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
s.bleet();
