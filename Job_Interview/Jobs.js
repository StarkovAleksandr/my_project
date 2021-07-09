// Task 1 "Palindrom" //

function palindrom(str) {
  const lowerString = str.toLowerCase();
  const newString = lowerString.split("").reverse().join("");

  return lowerString === newString;
}

// console.log(palindrom("14Anna14"));

//-------------------------------------------------------------------------------------------------//
// Task 2 "FizzBuzz" //

function fizzBuzz(n) {
  for (let index = 1; index <= n; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("fizzbuzz");
    } else if (index % 5 === 0) {
      console.log("buzz");
    } else if (index % 3 === 0) {
      console.log("fizz");
    } else console.log(index);
  }
}

// fizzBuzz(50);

//-------------------------------------------------------------------------------------------------//
// Task 3 "Anagramma" //

function anagramma(str1, str2) {
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();
  if (lowerStr1 === lowerStr2) {
    return false;
  }
  const newStr1 = lowerStr1.toLowerCase().split("").sort().join();
  const newStr2 = lowerStr2.toLowerCase().split("").sort().join();
  return newStr1 === newStr2;
}

// console.log(anagramma("finder1", "find1er"));

//-------------------------------------------------------------------------------------------------//
// Task 4 "Vowel search" //

function vowelSearch(str) {
  const vowel = ["e", "y", "u", "i", "o", "a"];
  const counter = str
    .toLowerCase()
    .split("")
    .reduce((numberOfVowels, currentLetter) => {
      if (vowel.includes(currentLetter)) {
        return ++numberOfVowels;
      }
      return numberOfVowels;
    }, 0);
  return counter;
}

// console.log(vowelSearch("hello"));

//-------------------------------------------------------------------------------------------------//
// Task 5 "fibanachi" //

function fibanachi(n) {
  if (n > 1) {
    return fibanachi(n - 1) + fibanachi(n - 2);
  }
  return n;
}

// console.log(fibanachi(5));
