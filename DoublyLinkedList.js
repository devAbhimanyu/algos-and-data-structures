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
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const endNode = this.tail;
      this.tail = endNode.prev;
      endNode.prev = null;
      this.tail.next = null;
    }

    this.length--;

    return this;
  }
}

const dblLinkedList = new DoublyLinkedList();

dblLinkedList.push("one");
console.log(dblLinkedList.push("two"));
