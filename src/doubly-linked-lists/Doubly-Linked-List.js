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

    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // update head to be next of old head
            this.head = oldHead.next;
            this.head.prev = null; // remove <--
            oldHead.next = null; // remove -->
        }
        this.length--;
        return oldHead; // removed node
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            //set prev property on head to be new node
            this.head.prev = newNode;
            // set next proeprty of new node to be current head property
            newNode.next = this.head;
            // update head to be new node
            this.head = newNode;
        }
        this.length++;
        return this; // return the list
    }

    get(index) {
        // error or edge case
        if (index < 0 || index >= this.length) return null;
        let count, current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode != null) {
            // set value of returned node to be value passed to fn
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        // double operator to return boolean instead of 'this' (DLL)
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;

        // set next & prev properties on correct nodes to link everything together
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;

        return true;
    }

    // remove node in a DLL by a certion position
    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (inedex === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        // update next & prev properties to remove found node from list
        let removedNode = this.get(index)
        removedNode.prev.next = removedNode.next
        removedNode.next.prev = removedNode.prev

        // clearning up loose ends
        // set next & prev to null on found node
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
    }
}

let list = new DoubleLinkedList
list.push('first item')
list.push('last item')
list.set(0, "HARRY POTTER") // true
list.push('Harry')
list.push('Ron')
list.push('Hermione')
list.insert(10, 'LAST') // false
list.insert(1, 'Tonks') // true
list.remove(-1) //undefined
list.remove(0) // Node with val = 'first item'
