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

module.exports = LinkedList;
