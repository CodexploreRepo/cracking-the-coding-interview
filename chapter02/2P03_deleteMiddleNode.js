const LinkedList = require("./util/LinkedList");

const deleteMidNode = (node) => {
  if (node && node.next) {
    node.value = node.next.value;
    node.next = node.next.next;
  }
};

const llist = new LinkedList(1);
for (let elem of [2, 3, 4, 5, 6]) {
  llist.append(elem);
}

deleteMidNode(llist.head.next.next.next); //1->2->3->(4)->5->6
console.log(llist.printList());
