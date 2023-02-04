// ? Question 1:Multi dimensional Arrays
var arr = [[1, 2, 3],[4, 5, 6],7,8,9,[[10, 11, 12, [13, 4, 112]], 136, 14],];
// *print out these numbers (10,8,13,136 and 4)from the array provided above
console.log(arr[5][0][0]);  // this prints 10
console.log(arr[3]);        // this prints 8
console.log(arr[5][0][3][0]); // this prints 13
console.log(arr[5][1]);      // this prints 136
console.log(arr[5][0][3][1]); // this prints 4



//?Question2: Fill in the blank spaces with the elements in the sentence array
// *I am a ______ developer at ________ and i love ______________
var sentence = ["javascript", "web", "Capacity Bay"];

// required output=>I am a web developer at capacity bay and i love javascript
console.log(`I am a ${sentence[1]} developer at ${sentence[2]} and i love ${sentence[0]}`);


// ?Question 3 : Use the bracket notation to print out 4th to the last character of "Generalization"
let word = "Generalization";
console.log(word[word.length-4]);



// ? Question 4 : Create an array and populate it with these strings

"orange", "apple", "guava", "lemon";
// Add these strings at the beginning of the array you created above
"pea", "banana";

// Add these strings at the end of the array you created above.
"Avocado", "mango";


let fruits = ["orange", "apple", "guava", "lemon"];

// Add strings at the beginning of the array
fruits.unshift("pea", "banana");

// Add strings at the end of the array
fruits.push("Avocado", "mango");

console.log(fruits);
// outputs: [ 'pea', 'banana', 'orange', 'apple', 'guava', 'lemon', 'Avocado', 'mango' ]

