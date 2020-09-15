const rotateMatrix = (matrix) => {
  //console.log(matrix.length);
  const n = matrix.length;
  for (let layer = 0; layer < Math.floor(n / 2); layer++) {
    let first = layer; //First column/row in each layer
    let last = n - 1 - layer; //Last column/row in each layer
    for (let i = first; i < last; i++) {
      //console.log("top: " + matrix[first][i]);
      //console.log("left: " + matrix[i][first]);
      //console.log("right: " + matrix[i][last - 1]);
      let offset = i - first;
      let top = matrix[first][i]; //Save TOP
      //TOP <- LEFT
      matrix[first][i] = matrix[last - offset][first]; //last - offset = last - i - first
      //LEFT <- BOTTOM
      matrix[last - offset][first] = matrix[last][last - offset];
      //BOTTOM <- RIGHT
      matrix[last][last - offset] = matrix[i][last];
      //RIGHT <- TOP
      matrix[i][last] = top;
    }
  }
};

/* TEST */
// var testMatrix = [
//   [1, 2, 3, 4],
//   [0, 1, 2, 3],
//   [0, 0, 1, 2],
//   [1, 0, 0, 1],
// ];

var testMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("before:");
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

rotateMatrix(testMatrix);

console.log("after:");
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);
