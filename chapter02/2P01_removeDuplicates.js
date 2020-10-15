const LinkedList = require('./util/LinkedList');

const removeDuplicates = (llist) => {
  const hashTable = {};
  let currentNode = llist.head;
  let prevNode = llist.head;
  while(currentNode) {
    if (!hashTable[currentNode.value]){
      //No Duplicate Found in Current Node
      hashTable[currentNode.value] = true;
      prevNode = currentNode;
    } else {
      //Duplicate Found !
      prevNode.next = currentNode.next;
    }
  currentNode = currentNode.next;
  }
}


// quick test
const llist = new LinkedList(1);
// for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
//   llist.append(elem);
// }

for (let elem of [10, 12, 11, 11, 12, 11, 10 ]) {
  llist.append(elem);
}

removeDuplicates(llist);
console.log(llist.printList())
