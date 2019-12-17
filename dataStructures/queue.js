class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    // Create new node
    let newNode = new Node(val);
    // If there are no nodes, set the first and last properties to be the new node
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
      this.last.next = newNode;
      this.last = newNode;
    }
    // Increment the size and return the size
    this.size++;
    return this.size;
  }
  dequeue() {
    // If there is no first property, return null
    if (!this.first) return null;
    // Store first property in variable
    let oldFirst = this.first;
    // See if there is only one node, if so, set first and last to be null
    if (this.size === 1) this.last = null;
    // If there is more than one node, set the first property to be the next property of first
    this.first = oldFirst.next;
    // Decrement the size
    this.size--;
    // Return value of the node dequeued
    return oldFirst.val;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}