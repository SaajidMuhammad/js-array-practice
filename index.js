// Question 1: Basic Array Operations

// Create an array named "fruits" with the following values: "apple", "banana", "orange", "grape".
// Perform the following operations:
// 1. Add "watermelon" to the end of the array.
// 2. Remove the first element from the array.
// 3. Replace "orange" with "kiwi".
// 4. Find the index of "banana".
// 5. Print the length of the array.

console.log('Answer 1: Basic Array Operations');

const fruits = ["apple", "banana", "orange", "grape"];

console.log("Before Fruit Added",fruits);

fruits.push("watermelon");

console.log("After Fruit Added",fruits);

//---------------------------------------------------------------------------------------

// Question 2: Array Manipulation

// Given an array of numbers: [10, 20, 30, 40, 50].
// Perform the following operations:
// 1. Double the value of each element in the array.
// 2. Filter out numbers greater than or equal to 30.
// 3. Calculate the sum of the remaining numbers.

console.log("Answer 2: Array Manipulation");

const mNumbers = [10, 20, 30, 40, 50];

const doubledArray = mNumbers.map(element => element * 2);


console.log("DoubleUp Numbers", doubledArray);

//--------------------------------------------------------------------------------------------


// Question 3: Array Iteration

// Create an array of names: ["Alice", "Bob", "Charlie", "David", "Eve"].
// Using a loop or array method, print each name with its index in the following format:
// "Name at index 0 is Alice"
// "Name at index 1 is Bob"
// ...

console.log("Answer 3: Array Iteration");

const aNames = ["Alice", "Bob", "Charlie", "David", "Eve"];

/*
        aNames.forEach((num, index) => {
        console.log(index, num);
} )
 or
*/

    for (let i = 0; i < aNames.length; i++) {
        console.log(`Name at index ${i} is ${aNames[i]}`);

    }

//or
     //console.info("Index", aNames);

//--------------------------------------------------------------------------------------------

// Question 4: Array Sorting

// Create an array of numbers: [8, 2, 10, 4, 6].
// Sort the array in ascending order.
// Sort the array in descending order.

console.log("Answer 4: Array Sorting");

const aNumber = [8, 2, 10, 4, 6];

console.log("Numbers Before Sort", aNumber);

const sortedNumbers = aNumber.sort((a, b) => a - b);

console.log("Numbers After Sort", sortedNumbers);

//--------------------------------------------------------------------------------------------


// Question 5: Array Mapping and Reducing

// Create an array of numbers: [5, 10, 15, 20, 25].
// Using the map function, create a new array where each element is the double of the corresponding element in the original array.
// Using the reduce function, calculate the product of all numbers in the original array.

console.log("Answer 5: Array Mapping and Reducing");

const bNumbers = [5, 10, 15, 20, 25];


const bDoubledArray = bNumbers.map(bNumbers => bNumbers * 2);

console.log(bDoubledArray); 

// Using reduce() to calculate the product of all numbers

const aProduct = bNumbers.reduce((acc, num) => {return acc + num}, 0);
console.log("Total of Number", aProduct);

//--------------------------------------------------------------------------------------------

// Question 6: Multi-dimensional Array

// Create a 2D array (matrix) representing a tic-tac-toe board.
// Initialize it with empty strings in each cell.
// Set the center cell to "X" and the top-right cell to "O".
// Print the resulting 2D array.

      console.log("Answer 6: Multi-dimensional Array");

      const tTboard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ];

      tTboard[1][1] = "X";
      tTboard[0][2] = "O";
      // for clarification

      console.log(tTboard);

      // final result 
      for (const row of tTboard) {
        console.log(row.join(" | "));
      }
//--------------------------------------------------------------------------------------------


// Question 7: Array Searching

// Create an array of strings: ["apple", "banana", "cherry", "date", "elderberry"].
// Check if the array includes the string "cherry".
// Find the first element that starts with the letter "e".
    {
        console.log("Answer 7: Array Searching");

        const Fruits = ["apple", "banana", "cherry", "date", "elderberry"];

        console.log("Friuts", Fruits);
        
        const includesCherry = Fruits.includes("cherry");
        
        console.log("Fruit Founded is", includesCherry);

        const startsWithE = Fruits.find(Fruits => Fruits.startsWith("e"));

        console.log("Start with E Letter is", startsWithE);

        
    }

//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------

// Question 8: Array Filtering and Mapping

// Create an array of numbers: [3, 8, 12, 15, 20, 25].
// Filter out the numbers that are divisible by 5.
// Using the filtered array, create a new array where each element is the square of the corresponding number.

console.log("Answer 8: Array Filtering and Mapping");

const aRnumbers = [3, 8, 12, 15, 20, 25];

const filteredNumbers = aRnumbers.filter(aRnumbers => aRnumbers % 5 === 0,);

console.log(filteredNumbers,"Numbers divisible by 5");

const squaredNumbers = filteredNumbers.map(aRnumbers => aRnumbers * aRnumbers);

console.log(squaredNumbers,"new array with squares of filtered numbers"); 

//--------------------------------------------------------------------------------------------

// Question 9: Array Concatenation

// Create two arrays: ["apple", "banana", "cherry"] and ["date", "elderberry"].
// Concatenate the two arrays into a single array.

console.log("Answer 9: Array Concatenation");

const fruits1 = ["apple", "banana", "cherry"];

const fruits2 = ["date", "elderberry"];

const concatenatedArray = fruits1.concat(fruits2);

console.log(concatenatedArray);

//--------------------------------------------------------------------------------------------

// Question 10: Array Joining

// Create an array of words: ["Hello", "world", "how", "are", "you"].
// Join the words using a space as the separator and print the resulting string.

console.log("Answer 10: Array Joining");

const words = ["Hello", "world", "how", "are", "you"];

const joinedString = words.join(" ");

console.log(joinedString);

//--------------------------------------------------------------------------------------------

// Question 11: Array Splicing

// Create an array of numbers: [2, 4, 6, 8, 10].
// Use the splice method to remove the elements at index 2 and 3.
// Insert the numbers 12 and 14 in their place.

    console.log("Answer 11: Array Splicing");

    const spileceNumber = [2, 4, 6, 8, 10];

        /* or
        spileceNumber.splice(2, 2);
        spileceNumber.splice(2, 0, 12, 14);
        */ 

    const deleteElement = spileceNumber.splice(2, 2, 12, 14);

    console.log(spileceNumber); 

//--------------------------------------------------------------------------------------------

// Question 12: Array Reversal

// Create an array of strings: ["apple", "banana", "cherry", "date", "elderberry"].
// Reverse the order of the elements in the array.

    console.log("Answer 12: Array Reversal");

    console.log("Before Reverse: apple, banana, cherry, date, elderberry");

    const reveseFruitorder = ["apple", "banana", "cherry", "date", "elderberry"];

    const result = reveseFruitorder.reverse(0, 5);

    console.log("the Result", result);

//--------------------------------------------------------------------------------------------

// Question 13: Array Intersection

// Create two arrays: [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7].
// Find the common elements between the two arrays.

      console.log("Answer 13: Array Intersection");

      const findCommon1 = [1, 2, 3, 4, 5];

      const findCommon2 = [3, 4, 5, 6, 7];

      const commonElements = findCommon1.filter(element => findCommon2.includes(element));

      console.log(commonElements);

//--------------------------------------------------------------------------------------------

// Question 14: Array Frequency Count

// Create an array of numbers: [1, 2, 3, 4, 2, 3, 1, 4, 1, 2, 5].
// Create an object that counts the frequency of each number in the array.

  console.log("Answer 14: Array Frequency Count");

   const freqCount = [1, 2, 3, 4, 2, 3, 1, 4, 1, 2, 5];

   const frequencyCounter = {};

        for (const number of freqCount) {
          
          if (frequencyCounter[number]) {
            
            frequencyCounter[number]++;
          } else {
            
            frequencyCounter[number] = 1;
          }
        }

  console.log(frequencyCounter);

//--------------------------------------------------------------------------------------------

// Question 15: Array Unique Values

// Create an array with duplicate values: [2, 4, 6, 8, 2, 4, 10, 12].
// Create a new array containing only the unique values from the original array.

console.log("Answer 15: Array Unique Values");

const dupArrays = [2, 4, 6, 8, 2, 4, 10, 12];

const uniqueValue = [...new Set(dupArrays)];

console.log(uniqueValue);

//--------------------------------------------------------------------------------------------

// Question 16: Array Chunking

// Create an array of numbers: [1, 2, 3, 4, 5, 6, 7, 8].
// Split the array into chunks of size 3 and store them in a new array.

console.log("Answer 16: Array Chunking");

const cNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkSize = 3;

// Initialize a new array to store the chunks
const chunkedArray = [];

// Loop through the original array
for (let i = 0; i < cNumbers.length; i += chunkSize) {
  // Slice the original array to create a chunk
  const chunk = cNumbers.slice(i, i + chunkSize);
  
  // Push the chunk into the chunkedArray
  chunkedArray.push(chunk);
}

console.log(chunkedArray);




//--------------------------------------------------------------------------------------------

// Question 17: Array FlatMap

// Create an array of arrays: [[1, 2], [3, 4], [5, 6]].
// Use the flatMap method to create a new array containing all the individual numbers.

      console.log("Answer 17: Array FlatMap");

      const groupArray = [[1, 2], [3, 4], [5, 6]];

      const flatMapArray = groupArray.flatMap(innerArray => innerArray);

      console.log(flatMapArray);

//--------------------------------------------------------------------------------------------

// Question 18: Array Shuffling

// Create an array of numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
// Shuffle the elements randomly within the array.

      console.log("Answer 18: Array Shuffling");

      let shufflNmbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let ranIndex = Math.floor(Math.random() * (i + 1));

          [array[i], array[ranIndex]] = [array[ranIndex], array[i]];
        }
        
      }

      shuffleArray(shufflNmbers);
      
      console.log(shufflNmbers);

//--------------------------------------------------------------------------------------------

// Question 19: Array Palindrome Check

// Create an array of strings: ["race", "car", "level", "deified", "hello"].
// Check if each string in the array is a palindrome (reads the same forwards and backwards).

      console.log("Answer 19: Array Palindrome Check");

            const strings = ["race", "car", "level", "deified", "hello"];

            function isPalindrome(arrWords) {
              
              arrWords = arrWords.replace(/ /g, "").toLowerCase();
                            
              const reversedStr = arrWords.split("").reverse().join("");
              
              
              return arrWords === reversedStr;
            }
              
              const palindromes = strings.map(arrWords => isPalindrome(arrWords));

      console.log("is Palindrome word ?", palindromes);

//--------------------------------------------------------------------------------------------

// Question 20: Array Insertion and Deletion

// Create an array of animals: ["dog", "cat", "elephant", "lion"].
// Insert "tiger" after "cat" and delete "elephant" from the array.

      console.log("Answer 20: Array Insertion and Deletion");

        const wildAnimals = ["dog", "cat", "elephant", "lion"];

        // Find the index of "cat"
        const indexOfCat = wildAnimals.indexOf("cat");

        // Check if "cat" is found in the array
        if (indexOfCat !== -1) {
          // Insert "tiger" after "cat"
          wildAnimals.splice(indexOfCat + 1, 0, "tiger");

          // Delete "elephant" from the array
          wildAnimals.splice(wildAnimals.indexOf("elephant"), 1);
        }

        console.log(wildAnimals); // Output: ["dog", "cat", "tiger", "lion"]

//--------------------------------------------------------------------------------------------

// Question 21: Array Element Frequency

// Create an array of characters: ["a", "b", "c", "a", "b", "a", "d", "c"].
// Count the frequency of each character and store it in an object.

//--------------------------------------------------------------------------------------------

// Question 22: Array Subtraction

// Create two arrays: [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7].
// Find the elements in the first array that are not present in the second array.

//--------------------------------------------------------------------------------------------

// Question 23: Array Object Transformation

// Create an array of objects, where each object represents a person with "name" and "age" properties.
// Convert the array of objects into an array of names using the map function.

//--------------------------------------------------------------------------------------------

// Question 24: Array Chunking with Remainder

// Create an array of numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
// Split the array into chunks of size 3, and the last chunk can contain fewer elements if needed.


console.log("Answer 24: Array Chunking with Remainder");

/*
const aNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function splitIntoChunks(array, arraySize) {
  const testSort = [];
  for (let i = 0; i < array.length; i += arraySize) {
    testSort.push(array.slice(i, i + arraySize));
  }
  return testSort;
}

const testSort = splitIntoChunks(aNumbers, 3);
console.log(testSort);
*/


const aAnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function chunkArray(array, chunkSize) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunkedArray.push(array.slice(i, i + chunkSize));
    }
  return chunkedArray;
}

const chunkedNumbers = chunkArray(aAnumbers, 3);
console.log(chunkedNumbers);




//--------------------------------------------------------------------------------------------

// Question 25: Array Flatten

// Create a nested array: [1, [2, 3], [4, [5, 6]], 7, [8, 9]].
// Flatten the array to a single level using recursion or built-in methods.


console.log("Answer 25: Array Flatten");

const findFlat = [1, [2, 3], [4, [5, 6]], 7, [8, 9]];

const flattenedArray = findFlat.flat(Infinity);
console.log(flattenedArray); 

