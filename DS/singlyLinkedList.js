class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  /**
   * push to the end of the list
   * @param {any} val
   */
  push(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * remove the tail and set prev node as tail
   * @returns {Node}
   */
  pop() {
    if (!this.head) return;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = this.tail = null;
    }
    return current;
  }

  /**
   * remove the head and set next node as head
   * @returns {Node}
   */
  shift() {
    if (!this.head) return;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }

  /**
   * push to the start of the list
   * @param {any} val
   * @return {SinglyLinkedList}
   */
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * get the value at index
   * @param {number} ind
   * @return {any}
   */
  get(ind) {
    if (ind < 0 || ind >= this.length) return null;
    let i = 0;
    let current = this.head;
    while (i !== ind) {
      current = current.next;
      i++;
    }
    return current;
  }
  /**
   * set the value at index
   * @param {number} ind
   * @return {any}
   */
  set(ind, val) {
    const node = this.get(ind);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  /**
   * insert value to a particular index
   * @param {number} ind
   * @param {any} val
   * @returns {boolean}
   */
  insert(ind, val) {
    if (ind < 0 || ind > this.length) return false;
    if (ind === this.length) return !!this.push(val);
    if (ind === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prevNode = this.get(ind - 1);
    const nextNodes = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNodes;
    this.length++;
    return true;
  }

  /**
   * remove node at index
   * @param {number} ind
   * @returns {Node}
   */
  remove(ind) {
    if (ind < 0 || ind > this.length) return undefined;
    if (ind === 0) return this.shift();
    if (ind === this.length) return this.pop();
    const previousNode = get(ind - 1);
    const removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length--;

    return removedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  /**
   * prints all values in list
   */
  print() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const list = new SinglyLinkedList();
list.unshift("hey");
list.push("how");
list.push("are");
list.push("you");
console.log(list.reverse());
// list.set(1, "who");
// list.print();
// console.log(list.unshift("how"));
// console.log(list.unshift("hey"));

// list.unshift("hey");

// console.log(list);
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
list.print();
