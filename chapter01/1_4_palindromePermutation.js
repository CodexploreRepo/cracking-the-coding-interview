const isPermutationOfPalindrome = (str) => {
  const char_set = {};
  let char_count = 0;
  //Counting Freq of char in string "Tact Coa"
  //Output: { t: 2, a: 2, c: 2, o: 1 }
  for (let char of str) {
    if (char !== " ") {
      char = char.toLowerCase();
      if (char_set[char]) {
        char_set[char] += 1;
      } else {
        char_set[char] = 1;
      }
      char_count++;
    }
  }

  let odd = 0, isPerm = true;

  // check that all chars are even count, except for 1 char with odd count
  Object.keys(char_set).forEach((char) => {
    if (char_set[char] % 2 > 0) {
      odd++;
      if (odd > 1) {
        //if we have more than 1 char with odd count
        isPerm = false; // return in a forEach statment doesn't flow out of function scope
      }
    }
  });

  return isPerm;
};
// TESTS
console.log(isPermutationOfPalindrome("Tact Coa"), "true");
console.log(isPermutationOfPalindrome("Tact boa"), "false");
