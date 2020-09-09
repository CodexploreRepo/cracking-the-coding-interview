const strComp = (str) => {
  let compressedStr = "";

  let i = 0;
  let strLength = str.length;
  let currCount = 0; //Counting the occurance of the char

  while (i < strLength) {
    currCount++;
    if (str[i] !== str[i + 1]) {
      //If the next char is diff, add current char + current count to compressedStr
      compressedStr += str[i] + currCount;
      currCount = 0; //Reset the count of occurance
    }
    i++;
  }
  //if compressedStr.lenth > oriString.lenght => return oriString
  //else return compressedStr
  return compressedStr.length > strLength ? str : compressedStr;
};

// Test
console.log("a", strComp("a"), "a");
console.log("aaaaaa", strComp("aaaaaa"), "a6");
console.log("aabcccccaaa", strComp("aabcccccaaa"), "a2b1c5a3");
