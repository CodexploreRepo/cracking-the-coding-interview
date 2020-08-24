//<--Method 1-->: Using HashTable

const isUnique = (word) => {
  const char_set = {};
  const word_length = word.length;

  //Return false if string length exceeds the number of unique character
  //128 since assumes as ASCII for simplicity
  if (word_length > 128) return false;

  for (let i = 1; i < word_length; i++) {
    if (char_set[word.charCodeAt(i)]) {
      return false;
    }
    char_set[word.charCodeAt(i)] = true;
  }
  return true;
};

//<--Method 2-->: Using Bit Vector - Space Complexity: an int (4-byte) memory space

//Assume: str only lower case with a to z only ? Why
// a through z in ASCII are charactets numbered 97 through 122 (26 characters total)
// with this, you get a number between 0 and 25 to represent each character index
// 0 for 'a' and 25 for 'z'

const everyCharUnique = (str) => {
  /*
    checker: is the bit array it will have:
         1 on the character index that has appeared before 
         0 if the character has not appeared, you
    Number() to initialize as 32 0 bits:
    00000000 00000000 00000000 00000000
  */
  let checker = Number();

  const indexOffset = "a".charCodeAt(); //"a" = 97

  //[...str].map((c) => c.charCodeAt() - indexOffset)
  //By doing this, char 'a' would get 0 instead of 97, d will be 3, instead of 100
  //and so on char 'z' would get 26 instead of 122

  for (let index of [...str].map((c) => c.charCodeAt() - indexOffset)) {
    /* 
    represents the bit value of that character index as a 1 and the rest as a 0. 
    This is achieved
        by getting the single digit 1 and shifting it to the left as many
        times as the character index requires
        e.g. character 'd' = 3 => mask = 1 << 3
        1 = 00000000 00000000 00000000 00000001
        Shift 3 spaces to the left (<<) because 'd' index is number 3
        1 shift: 00000000 00000000 00000000 00000010
        2 shift: 00000000 00000000 00000000 00000100
        3 shift: 00000000 00000000 00000000 00001000

        Therefore the number representing 'd' is
        00000000 00000000 00000000 00001000
    */

    const mask = 1 << index; //index = 3 => mask = 00000000 00000000 00000000 00001000

    /*
        This peforms an AND between the checker, which is the bit array
        containing everything that has been found before and the number
        representing the bit that will be turned on for this particular
        character. e.g.
        if we have already seen 'a', 'b' and 'd', checker will have:
        checker = 00000000 00000000 00000000 00001011
        And if we see 'b' again:
        'b' = 00000000 00000000 00000000 00000010

        it will do the following:
        00000000 00000000 00000000 00001011
        & (AND)
        00000000 00000000 00000000 00000010
        -----------------------------------
        00000000 00000000 00000000 00000010

        Since this number is different than '0' it means that the character
        was seen before, because on that character index we already have a 
        1 bit value 
    */

    if ((checker & mask) > 0) {
      return false;
    }
    checker |= mask; //checker = checker | mask, means checker OR mask

    /*What this achieves is that it builds the checker to have the new 
    value it hasnt seen, by doing an OR between checker and the value 
    representing this character index as a 1. e.g.
    If the character is 'f' and the checker has seen 'g' and 'a', the 
    following will happen

    'f' = 00000000 00000000 00000000 00100000
    checker(seen 'a' and 'g' so far) = 00000000 00000000 00000000 01000001

    00000000 00000000 00000000 00100000
    | (OR)
    00000000 00000000 00000000 01000001
    -----------------------------------
    00000000 00000000 00000000 01100001

    Therefore getting a new checker as 00000000 00000000 00000000 01100001

     */
  }
  return true;
};

/* TESTS */
// console.log(isUnique("abcd"), "true");
// console.log(isUnique("abccd"), "false");
// console.log(isUnique("bhjjb"), "false");
// console.log(isUnique("mdjq"), "true");

console.log(everyCharUnique("abcd"), "true");
console.log(everyCharUnique("abccd"), "false");
console.log(everyCharUnique("bhjjb"), "false");
console.log(everyCharUnique("mdjq"), "true");
