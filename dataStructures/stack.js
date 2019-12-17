class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    // Create a new node with that value
    let newNode = new Node(val);
    // If there are no nodes in the stack, set the first and last property to be the new node
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // Otherwise, create a variable that stores the current first property on the stack
      let oldFirst = this.first;
      // Reset the first property to be the new node
      this.first = newNode
      // Set the next property on the new node to be the previously created variable
      newNode.next = oldFirst
    }
    this.size++;
    return this.size;
  }
  pop() {
    // If there are no nodes in the stack, return null
    if (!this.first) return null;
    // Create a temp variable to store the current first property on the stack
    let oldFirst = this.first;
    // If there is only 1 node, set the first and last property to be null
    if (this.size === 1) {
      this.last = null;
    }
    // Otherwise, set the first property to be the next property on the old first
    this.first = oldFirst.next;
    // Decrement the size by 1
    this.size--;
    // Return the value of the node removed
    return oldFirst.val;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}