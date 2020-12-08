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

