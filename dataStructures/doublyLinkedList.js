// Node:
// val, next, prev
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// DoublyLinkedList:
// head, tail, len
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // Create a new node with the value passed to the function
    let node = new Node(val);
    // If the head property is null, set the head and tail to be the newly created node
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      // If not, set the next property on the tail to be that node
      this.tail.next = node;
      // Set the previous property on the newly created node to be the tail
      node.prev = this.tail;
      // Set the tail to be the newly created node
      this.tail = node;
    }
    // Increment the length
    this.length++;
    // Return the doubly linked list
    return this;
  }

}

