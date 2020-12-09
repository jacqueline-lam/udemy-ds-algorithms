// Implementation with an array - not constant time
let q = []
q.push('first');
q.push('second');
q.push('third');
q // ['first', 'second', 'third']
q.shift();
// Or use unshift and pop - adding to beginning =
let queue = [];
queue.unshift('first');
queue.unshift('second'); // reassigning index for entire list
queue.unshift('third');
queue // ['third', 'second', 'first']
queue.pop() //'first'

// Implementation with SLL - to achieve constant time for addition/ removal
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) { // add something into queue
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode; // move over pointer
    }
    return ++this.size; // increment size of queue by 1
  }

  dequeue() { // return & remove first thing added in
    if (!this.first) return null;

    let temp = this.first; // current 1st node
    if (this.first === this.last) { // there's only 1 node (edge case)
      this.last = null;
    }
    this.first = this.first.next; // updated to be next item
    this.size--; // decrement queue size by 1
    return temp.value; // return removed node;
  }
}

let queueSLL = new Queue();
queueSLL.enqueue('first'); // 1
queueSLL.enqueue('second'); // 2
queueSLL.enqueue('third'); // 3
queueSLL.dequeue(); //'first'
queueSLL.dequeue(); //'second'
queueSLL.dequeue(); //'third'
queueSLL.dequeue(); // null