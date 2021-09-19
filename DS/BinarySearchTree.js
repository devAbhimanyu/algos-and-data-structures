class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

/**
 * Binary Search Tree
 */
class BST {
  constructor() {
    this.root = null;
  }

  /**
   * inserting a new node to the BST
   * @param {any} val
   * @returns {undefined|BST}
   */
  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      const value = current.val;
      if (val === value) return undefined;
      if (val > value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else if (val < value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  /**
   * Check whether value exists in the BST
   * @param {any} val
   * @returns {boolean}
   */
  find(val) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      const value = current.val;
      if (val === value) return true;
      if (val > value) {
        if (!current.right) {
          return false;
        }
        current = current.right;
      } else if (val < value) {
        if (!current.left) {
          return false;
        }
        current = current.left;
      }
    }
  }

  /**
   * Breadth First Search
   * @returns {Array} data value array
   */
  BFS() {
    const data = [];
    const queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  /**
   * Depth First Search Pre-Order
   * @returns {Array} data value array
   */
  DfsPreOrder() {
    const data = [];
    //starting point for traverse
    let current = this.root;

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  /**
   * Depth First Search Post-Order
   * @returns {Array} data value array
   */
  DfsPostOrder() {
    const data = [];
    //starting point for traverse
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(current);
    return data;
  }

  /**
   * Depth First Search In-Order
   * @returns {Array} data value array
   */
  DfsInOrder() {
    const data = [];
    //starting point for traverse
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

const bs = new BST();
bs.insert(10);
bs.insert(6);
bs.insert(15);
bs.insert(3);
bs.insert(8);
bs.insert(20);
console.log(bs.DfsPreOrder());
console.log(bs.DfsPostOrder());
console.log(bs.DfsInOrder());
