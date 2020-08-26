var checkPermute = function (stringOne, stringTwo) {
  /*
    * Check if stringOne & stringTwo is permutation of each other 
    *
  */
  // if different lengths, return false
  if (stringOne.length !== stringTwo.length) {
    return false;
    // else sort and compare
    // (doesnt matter how it's sorted, as long as it's sorted the same way)
  } else {
    //need to .split("") the string to sort the array
    //JS dont have .sort() for string, only for array

    //need to .join("") after sorted to compare to string
    //Since === cannot compare 2 arrays
    var sortedStringOne = stringOne.split("").sort().join("");
    var sortedStringTwo = stringTwo.split("").sort().join("");
    return sortedStringOne === sortedStringTwo;
  }
};

// Tests
console.log(checkPermute('aba', 'aab'), true);

console.log(checkPermute('aba', 'aaba'), false);

console.log(checkPermute('god', 'dog'), true);
