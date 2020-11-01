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

    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let prev = null; // make sure end of list -> tail.next = null
        let next;
        for (i = 0; i < this.length; i++) {
            next = current.next;
            current.next = prev; // null in firt iteration
            prev = current;
            current = next;
        }
        return this;
        // [100,   201,   250,   350,      999]
        // current next
        // 100 -> null
        // prev   current next
        //         201 -> 100
        //          prev current next
        //                 250 -> 201
        //                  prev  current  next
        //                        350->250
        //                         prev    current  next = null;
        //                                  999 -> 350
    }
    // print method to help us see reversed method work
    // help us see what's happening
    // list.print() //[100,201,250,350,999]
    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        coonsole.log(arr);
    }

}


let list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("<3")
list.push("!")
list.get(3)
list.insert('FAREWELL')

// for reverse
list.push(100)
list.push(201)
list.push(250)
list.push(350)
list.push(999)
list.reverse() // [100,201,250,350,999]
list.print() // [999,350,250,201,100]