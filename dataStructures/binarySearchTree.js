class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    // Create a new node
    let newNode = new Node(val);
    // Check if there is a root. If not, the root now becomes the new node.
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      // Iteratively or recursively, starting at the root:
      let notInserted = true;
      let currentNode = this.root;
      // If there is a root, check if the value of the new node is greater than or less than the value of the root.
      while (notInserted) {
        if (val === currentNode.val) return undefined;
        if (val > currentNode.val) {  
          // If greater:
          // Check to see if there is a node to the right.
          if (currentNode.right) {
            // If there is, move to that node and repeat these steps
            currentNode = currentNode.right;
          } else {
            // If there is not, add that node as the right property
            currentNode.right = newNode;
            notInserted = false;
          }
          // If less:
        } else {
          // Check to see if there is a node to the left
          if (currentNode.left) {
            // If there is, move to that node and repeat these steps
            currentNode = currentNode.left;
            // If there is not, add that node as the left property
          } else {
            currentNode.left = newNode;
            notInserted = false;
          }
        }
      }
    }
    return this;
  }
}
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var tree = new BinarySearchTree();
// tree.insert(5);
// tree.insert(3);
// tree.insert(2);
// tree.insert(4);
// tree.insert(100);
// tree.insert(200);
console.dir(JSON.parse(JSON.stringify(tree)), {depth: null, colors: true});
// console.log(tree);