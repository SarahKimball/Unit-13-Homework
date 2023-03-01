1. 
// The returned value of this code would be a Set object with the values [1, 2, 3, 4]

2. 
// the returned value of this code would be the string "ref".

3.
// Map(2) {
//     [1, 2, 3] => true,
//     [1, 2, 3] => false
//   }


4. 
function hasDuplicate(arr) {
        const set = new Set(arr);
        return set.size < arr.length;
      }
      

5. 

function vowelCount(str) {
    const vowels = "aeiou";
    // Create a new Map object to store the vowel counts
    const map = new Map();
    // Loop through each character in the string
    for (let char of str) {
      // Convert the character to lowercase
      char = char.toLowerCase();
      // If the character is a vowel, increment the count in the map
      if (vowels.includes(char)) {
        const count = map.get(char) || 0;
        map.set(char, count + 1);
      }
    }
    // Return the vowel counts map
    return map;
  }
  