class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // add node to end of DLL
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // remove node from end of DLL
    pop() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // set new tail to be second last node
            this.tail = poppedNode.prev
            // Remove connections:
            // new tail.next to be reset as null
            this.tail.next = null;
            // old tail's prev set to null
            poppedNode.prev = null; // just to clean up extra ref
        }
        this.length--;
        // return popped node
        return this;
    }
}

let list = new DoubleLinkedList
list.push('first item')
list.push('last item')
