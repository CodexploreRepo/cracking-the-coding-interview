//Section 1: What is Pointer Example:
let obj1 = { a: true };
let obj2 = obj1;

//Even we deleted obj1, obj2 still point to the location of { a: true } in memory:
delete obj1;
console.log('2', obj2) // => 2 { a: true }


// //Garbage Collectors in JS:
// //For example, now obj2 pointed to a string => the object { a: true } is cleared by garbage collector
// obj2 = "Hello World";

//Section 2: Coding First Linked List

//Demo 1: 10 --> 5 --> 16
// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        //Since at beginning, we only have 1 element => Head = Tail
        this.tail = this.head;
        //Optional: Length to keep track length of Linked List
        this.length = 1
    }
    //Prepend: O(1)
    prepend(value) {
        const newNode = new Node(value);
        //Pointer of New Node will pointed to Head
        newNode.next = this.head;

        this.head = newNode;
        this.length++;
    }

    //Append: O(1)
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    printList() {
        const array = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    //Insert: O(n)
    insert(index, value) {
        if (index === 0) {
            //index = 0 equivalent to insert @ Head = prepend
            this.prepend(value);
            return this.printList();
        }
        else if (index >= this.length) {
            //Will add the value to the tail of the List
            return this.append(value);
        }
        else {
            //Leader = 10
            const leader = this.traverseToIndex(index - 1);
            //console.log(currentNode)
            const newNode = new Node(value)
            newNode.next = leader.next
            leader.next = newNode;
            this.length++;
            return this.printList()
        }

    }

    remove(index) {
        if (index === 0) {
            //Remove head
            this.head = this.head.next
        } else {
            const leader = this.traverseToIndex(index - 1);

            const unwantedNode = leader.next;
            leader.next = unwantedNode.next
            this.length--;
            return this.printList()
        }
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(3)

console.log(myLinkedList.printList())
//console.log(myLinkedList);
