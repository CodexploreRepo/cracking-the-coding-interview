//CTCI - Solution
const removeSpaces = (str, oriLength) => {
  /*  str = "Mr John Smith    "
    * oriLength = 13(i.e: "Mr John Smith"): length of the actual string, including the space
    *
  */
  //[First Scan] > Count the number of spaces in the actual string
  let spaceCount = 0;
  for (let i = 0; i < oriLength; i++) {
    if (str[i] === " ") spaceCount++;
  }
  //spaceCounts = 2 since "Mr John Smith" has 2 spaces
  //Calculate a newLength of the string if 1 space = "%20"
  let newLength = oriLength + spaceCount * 2;

  //Need to convert to array to direct append into element
  let strArr = str.split("");
  //[Second Scan] Edit the string in reverse order
  //If seeing a space => replace with %20
  //If ori char => copi
  for (let i = oriLength - 1; i >= 0; i--) {
    if (str[i] === " ") {
      strArr[newLength - 1] = "0";
      strArr[newLength - 2] = "2";
      strArr[newLength - 3] = "%";
      newLength -= 3;
    } else {
      strArr[newLength - 1] = str[i];
      newLength -= 1;
    }
  }

  return strArr.join("");
};
//console.log(urlify("Mr John Smith    ", 13), "Mr%20John%20Smith");
console.log(removeSpaces("Mr John Smith    ", 13), "Mr%20John%20Smith");
