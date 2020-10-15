const LinkedList = require("./util/LinkedList");

//Soln 1: Trivial Solution => Will not expected in the Interview
const findKthToLast = (llist, kth) => {
  let currentNode = llist.head;
  let index = llist.length - kth;
  let i = 0;
  while (currentNode) {
    if (i !== index) {
      currentNode = currentNode.next;
      i++;
    } else {
      return currentNode.value;
    }
  }
};

//Soln 2: 2 Pointer
const findKthToLast2 = (llist, k) => {
  // do iteratively
  //define two pointers , fast and slow pointer
  let p1 = llist.head;
  let p2 = llist.head;

  //Move p1 pointer k steps in the linkedlist while p2 remains at head
  for (let i = 0; i < k; i++) {
    if (p1 === null) return null; //k is larger than length of linked list
    p1 = p1.next;
  }
  // move both pointers at the same time,
  // p1 will start @ kth, p2 will start @ 0
  // When p1 hits the end of the list = n - k
  // p2 pointer will exit at kth node from the end
  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2.value;
};

//Soln 3: Recursive
const findKthToLast3 = (head, k, index) => {
  //Base Case: if current Node reach the end -> return 0
  if (head === null) return 0;

  //Recursive case:
  index = findKthToLast3(head.next, k, index) + 1;

  if (index === k) {
    console.log(head.value);
  }
  return index;
};

const llist = new LinkedList(1);
for (elem of [2, 4, 5, 7, 8, 9, 10]) {
  llist.append(elem);
}
console.log(llist.printList());
console.log(findKthToLast2(llist, 6));
findKthToLast3(llist.head, 6, 0);
