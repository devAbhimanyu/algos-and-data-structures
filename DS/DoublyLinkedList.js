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

  get(index) {
    if (index < 0 || index >= this.length) return null;
    const isFirstHalf = index < this.length / 2;
    let current = isFirstHalf ? this.head : this.tail;
    let count = isFirstHalf ? 0 : this.length - 1;
    if (isFirstHalf) {
      console.log("first half");
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      console.log("second half");
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(ind, val) {
    if (ind < 0 || ind > this.length) return false;
    if (ind === 0) return !!this.unshift(val);
    if (ind === this.length - 1) return !!this.push(val);

    const newNode = new Node(val);
    const nextNode = this.get(ind);
    const prevNode = nextNode.prev;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    nextNode.prev = newNode;
    newNode.next = nextNode;

    this.length++;
    return true;
  }

  remove(ind) {
    if (ind < 0 && ind >= this.length) return null;
    if (ind === 0) return this.shift();
    if (ind === this.length - 1) return this.pop();

    const removedNode = this.get(ind);
    const before = removedNode.prev;
    const after = removedNode.next;

    before.next = after;
    after.prev = before;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}

const dblLinkedList = new DoublyLinkedList();

dblLinkedList.push("one");
dblLinkedList.push("two");
dblLinkedList.push("three");
dblLinkedList.push("4");
dblLinkedList.push("5");
dblLinkedList.push("6");
dblLinkedList.push("7");
console.log(dblLinkedList.get(2));
console.log(dblLinkedList.get(5));
console.log(dblLinkedList.insert(5, "yay"));
console.log(dblLinkedList);
