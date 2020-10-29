class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        // return undefined if there's no node in list
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;

        // loop thru list until you reach the tail
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        // set tail to be 2nd to last node
        this.tail = newTail;
        // set next property of 2nd to last node to be null
        this.tail.next = null;
        this.length--;
        // if there is no remaining node left in SLL, set head and tail to null
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}


var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")
