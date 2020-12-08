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
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() { // return & remove first thing added in
    if (!this.first) return null;

    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
