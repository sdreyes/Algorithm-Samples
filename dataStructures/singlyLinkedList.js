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
  // Add a node to the beginning of a singly linked list:
  unshift(val) {
    // Create a new node using the value passed to the function
    let node = new Node(val);
    // If there is no head property on the list, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    // Otherwise set the newly created node's next property to be the current head property on the list
    } else {
      node.next = this.head;
      // Set the head property on the list to be that newly created node
      this.head = node;
    }
    // Increment the length of the list by 1
    this.length++;
    // Return the linked list
    return this;
  }
  // Get a node based off of an index number:
  get(idx) {
    // If the index is less than zero or greater than or equal to the length of the list, return null
    if (idx < 0 || idx >= this.length) return null;
    // Loop through the list until you reach the index and return the node at that specific index
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next
    }
    return current;
  }
  // Change a node's value at a specified index:
  set(idx, val) {
    // Use get method to find the specific node
    let oldNode = this.get(idx);
    // If the node is not found, return false
    if (!oldNode) return false;
    // If the node is found, set the value of that node to be the value passed to the function and return true
    oldNode.val = val;
    return true;
  }
  // Adding a node to the linked list at a specific position:
  insert(idx, val) {
    // If the index is less than zero or greater than the length, return false
    if (idx < 0 || idx > this.length) return false;
    // If the index is the same as the length, push the new node to the end of the list
    if (idx === this.length) return !!this.push(val);
    // If the index is 0, unshift a new node to the start of the list
    if (idx === 0) return !!this.unshift(val);
    // Otherwise, using the get method, access the node at the index - 1
    let pre = this.get(idx-1);
    // Set the next property on the new node to be the previous next
    let newNode = new Node(val);
    newNode.next = pre.next
    // Set the next property on the previous node to be the new node
    pre.next = newNode
    // Increment the length
    this.length++;
    // Return true
    return true;
  }
  // Removing a node from the linked list at a specific position:
  remove(idx) {
    // If the index is less than zero or greater than or equal to the length, return undefined
    if (idx < 0 || idx >= this.length) return undefined;
    // If the index is the same as the length - 1, pop
    if (idx === this.length - 1) return this.pop();
    // If the index is 0, shift
    if (idx === 0) return this.shift();
    // Otherwise, using the get method, access the node at the index - 1
    let requestedNode = this.get(idx);
    let pre = this.get(idx - 1);
    // Set the next property on that node to be the next of the next node
    pre.next = requestedNode.next;
    // Decrement the length
    this.length--;
    // Return the value of the node removed
    return requestedNode;
  }
  // Reversing the linked list in place:
  reverse() {
    // Create a variable called node and initialize it to the head property
    let node = this.head;
    // Swap the head and tail
    this.head = this.tail
    this.tail = node;
    // Create a variable called next
    let next;
    // Create a variable called pre
    let pre = null;
    // Loop through the list
    while (node) {
      // Set next to be the next property on whatever node is
      next = node.next;
      // Set the next property on the node to be whatever pre is
      node.next = pre;
      // Set pre to be the value of the node variable
      pre = node;
      // Set the node variable to be the value of the next variable
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList;

list.push("index 0");
list.push("index 1");
list.push("index 2");
list.push("index 3");
list.push("index 4");
console.log("\n\n=======OLD LIST=======\n\n")
console.dir(JSON.parse(JSON.stringify(list)), {depth: null, colors: true});
list.reverse();
console.log("\n\n=======NEW LIST=======\n\n")
// console.log(JSON.parse(list, null, 2));
console.dir(JSON.parse(JSON.stringify(list)), {depth: null, colors: true});
