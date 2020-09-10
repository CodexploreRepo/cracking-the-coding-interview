const strings = ["a", "b", "c", "d"]; //4*4 = 16 bytes of storage
//Access O(1)
console.log(strings[2]);

//Push O(1)
strings.push("e");

//Pop O(1)
strings.pop();

//Unshift = Add 'x' in the begining of the Array
// O(n): ['x', 'a', 'b', 'c', 'd']
//         0    1    2    3    4
strings.unshift("x");

//splice O(n): array.splice(start, deleteCount, items)
// splice(2,0,'alien') means  at index 2, deleteCount = 0 => add, item = 'alien'
strings.splice(2, 0, "alien");

console.log(strings);

const numbers = [1, 2, 3, 4, 5];

//ES6 check if item is in an array or not
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(1, 2); // false (second parameter is the index position in this array at which to begin searching)
