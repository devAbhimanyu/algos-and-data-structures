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
}

const bs = new BST();
bs.insert(50);
bs.insert(25);
bs.insert(40);
bs.insert(60);
bs.insert(70);
bs.insert(65);
