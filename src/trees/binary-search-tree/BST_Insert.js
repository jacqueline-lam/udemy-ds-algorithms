class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            // handle duplicates - prevent infinite loop
            // alternatively - add count property to each node and increment when there's duplicate
            if (value === current.value) return undefined; // or false
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                } // no else needed because if T => return this above
                current = current.left; // move to current.left cuz value < current.value
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
tree.insert(7) // traverse tree & find right spot - realize it already exists -> return undefined




