class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * add node to end of list
   * @param {any} val
   * @returns {DoublyLinkedList}
   */
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const endNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = endNode.prev;
      this.tail.next = null;
      endNode.prev = null;
    }

    this.length--;

    return endNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    const removedHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedHead.next;
      this.head.prev = null;
    }
    removedHead.next = null;
    this.length--;
    return removedHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

const dblLinkedList = new DoublyLinkedList();

// dblLinkedList.push("one");
dblLinkedList.push("two");
dblLinkedList.push("three");
console.log(dblLinkedList.unshift("one"));
// console.log(dblLinkedList);
