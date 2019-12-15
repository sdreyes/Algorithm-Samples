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
    if (!this.head) {
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
  pop() {
    // If the list is empty, return undefined
    if (!this.head) return undefined;
    // Create a variable to hold the current tail
    let oldTail = this.tail;
    // If the length is 1, set the head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Set the new tail to be the tail's previous property value
      this.tail = oldTail.prev;
      // Set the next property on the new tail to be null
      this.tail.next = null;
      // Set the popped node's previous property to be null
      oldTail.prev = null;
    }
    // Decrement the length
    this.length--;
    // Return the popped node
    return oldTail;
  }
  shift() {
    // If the list is empty, return undefined
    if (!this.head) return undefined;
    // Store the current head property in a variable to be returned later
    let oldHead = this.head;
    // If the length is 1, set the head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Otherwise, update the head to be the next of the old head
      this.head = oldHead.next;
      // Set the head's prev property to be null
      this.head.prev = null;
      // Set the old head's next property to be null
      oldHead.next = null;
    }
    // Decrement the length
    this.length--;
    // Return the old head
    return oldHead;
  }
  unshift(val) {
    // Create a node with the value passed to the function
    let newNode = new Node(val);
    // If the length is zero, set the head and tail of the list to be the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, set the previous property of the head to be the new node
      this.head.prev = newNode;
      // Set the next property of the new node to be the head
      newNode.next = this.head;
      // Set the head to be the new node
      this.head = newNode;
    }
    // Increment the length
    this.length++;
    // Return the new list
    return this;
  }
  get(idx) {
    // If the index is less than 0 or greater than/equal to the length, return null
    if (idx < 0 || idx >= this.length) return null;
    // If the index is less than or equal to half the length of the list
    let current;
    if (idx <= this.length / 2) {
      // Loop through the list starting from the head and loop toward the middle
      current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
    // Otherwise, that must mean the index is greater than half the length of the list
    } else {
      // Loop through the list starting from the tail and loop toward the middle
      current = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        current = current.prev;
      }
    }
    // Return the node once it is found
    return current;
  }
  set(idx, val) {
    let node = this.get(idx);
    if (node !== null) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(idx, val) {
    // If the index is less than zero or greater than the length return false
    if (idx < 0 || idx > this.length) return false;
    // If the index is zero, unshift
    if (idx === 0) return this.unshift(val);
    // If the index is the same as the length, push
    if (idx === this.length) return this.push(val);
    // Use get method to access the node at index-1
    let prevNode = this.get(idx - 1);
    // Create a new node with the new value
    let newNode = new Node(val);
    // Set the next and prev properties on the correct nodes to link everything together
    prevNode.next.prev = newNode;
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    // Increment the length
    this.length++;
    // Return true
    return true;
  }
  remove(idx) {
    // If the index is less than zero or greater than or equal to the length, return undefined
    if (idx < 0 || idx >= this.length) return undefined;
    // If the index is zero, shift
    if (idx === 0) return this.shift();
    // If the index is the same as length-1, pop
    if (idx === length - 1) return this.pop();
    // Use the get method to find the item to be removed
    let foundNode = this.get(idx);
    // Update the next and prev properties to remove the found node from the list
    foundNode.prev.next = foundNode.next;
    foundNoude.next.prev = foundNode.prev;
    // Set the next and prev to null on the found node
    foundNode.next = null;
    foundNode.prev = null;
    // Decrement the length
    this.length--;
    // Return the removed node
    return foundNode;
  }
}

let list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);

console.log(list);