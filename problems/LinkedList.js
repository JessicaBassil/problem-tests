// Problem 3
class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }

  hasNext() {
    return this.next ? true : false;
  }
}

class LinkedList {
  head;
  tail;
  constructor(val) {
    this.head = new Node(val, null);
    this.tail = this.head;
  }

  addNode(val) {
    const newNode = new Node(val, null);
    this.tail.next = newNode;
    if (!this.head.next) {
      this.head = this.tail;
    }
    this.tail = newNode;
  }

  /**
   * removes all nodes from the list whose value is greater than x
   * @param {number} x
   * @returns head of the new list
   */
  removeNodes(x) {
    let curr = this.head;
    let newListCurr;
    let newListHead;

    while (curr.hasNext()) {
      if (curr.val <= x) {
        // when adding the first elt
        if (!newListCurr) {
          newListCurr = new Node(curr.val, null);
          newListHead = newListCurr;
        } else {
          // adding other elts
          newListCurr.next = new Node(curr.val, null);
          // when adding the second element
          if (!newListHead.hasNext()) newListHead = newListCurr;
          newListCurr = newListCurr.next;
        }
      }
      curr = curr.next;
    }
    return newListHead ?? null;
  }
}

export default LinkedList;
