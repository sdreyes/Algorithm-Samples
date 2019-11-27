// ---------------------------------------------------------------------------------------
// Singly Linked List
// ---------------------------------------------------------------------------------------

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Add a value to the end of a single linked list:
  push(val) {
    // This function should accept a value
    // Create a new node using the value passed to the function
    let node = new Node(val);
    // If there is no head property on the list, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    }
    // Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
    else {
      this.tail.next = node;
      this.tail = node;

    }
    // Increment the length by one
    this.length++;
    return this;
  }
  // Remove a node from the end of a singly linked list:
  pop() {
    // If there are no nodes in the list, return undefined
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    // Loop through the list until you reach the tail
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // Set the tail to be the 2nd-to-last node
    this.tail = newTail;
    // Set the next property of the 2nd-to-last node to be null
    this.tail.next = null;
    // Decrement the length of the list by 1
    this.length--;
    // If the length is now 0, set the head and tail to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // Return the value of the node removed
    return current;
  }
  // Remove a node from the beginning of a singly linked list:
  shift() {
    // If there are no nodes, return undefined
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }
}