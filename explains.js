const strings = ["race", "car", "level", "deified", "hello"];

function isPalindrome(str) {
  // Remove spaces and convert to lowercase for accurate palindrome checking
  str = str.replace(/ /g, "").toLowerCase();
  
  // Reverse the string
  const reversedStr = str.split("").reverse().join("");
  
  // Check if the original and reversed strings are the same
  return str === reversedStr;
}

// Check if each string is a palindrome
const palindromes = strings.map(str => isPalindrome(str));

console.log(palindromes);

//.......................................................

console.log("Answer 20: Array Insertion and Deletion");

        const animals = ["dog", "cat", "elephant", "lion"];

        // Find the index of "cat"
        const indexOfCat = animals.indexOf("cat");

        // Check if "cat" is found in the array
        if (indexOfCat !== -1) {
          // Insert "tiger" after "cat"
          animals.splice(indexOfCat + 1, 0, "tiger");

          // Delete "elephant" from the array
          animals.splice(animals.indexOf("elephant"), 1);
        }

        console.log(animals); // Output: ["dog", "cat", "tiger", "lion"]


