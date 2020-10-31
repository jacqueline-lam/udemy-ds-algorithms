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

    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        // create new node using value passed to fn
        let newNode = new Node(val);
        // if no head property on list, set head & tail to be newly created node
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // set newly created node's mext property to be current head property
            newNode.next = this.head;
            // set hjead property on list to be newNode
            this.head = newNode;
        }
        length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        // loop thru list until you reach idx & return node at specified idx
        let counter = 0;
        let current = this.head;
        while (counter !== idx) {
            current = current.next;
            counter++;
        }
        return current;
    }

    // Change value of a node based on its position
    set(idx, val) {
        // use .get to find specific node
        let foundNode = this.get(idx)
        if (foundNode) {
            // update val of node to be val passed to fn
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return null;
        // if idx = length , push new node to end
        // use boolean operator to return true instead of list after push operation
        if (idx === this.length) return !!this.push(val);
        // if idx = 0, unshift new node to start
        if (idx === 0) return !!this.unshift(val) // make sure to return true

        let newNode = new Node(val)
        // use get to access node at idx - 1
        let prev = this.get(idx - 1);
        let tempNext = prev.next;
        // set next peroperty on that node to be newNode
        prev.next = newNode;
        // set next property on newNode to be prev next
        newNode.next = tempNext;
        this.length++;
        return true
    }

    remove(idx) {
        // edge cases
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift()
        if (idx === this.length - 1) return this.pop();

        // use get to access node at idx - 1
        let prevNode = this.get(idx - 1);
        let removed = prevNode.next
        // set next property on next node to be NEXT of the next node
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }
}


let list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("<3")
list.push("!")
list.get(3)
list.insert('FAREWELL')
