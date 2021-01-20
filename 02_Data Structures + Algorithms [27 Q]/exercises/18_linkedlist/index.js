// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
constructor(data, next = null) {
    this.data = data;
    this.next = next;
      }
}

class LinkedList {
constructor(head = null) {
    this.head = head;
      }

insertFirst(data) {
 const node = new Node(data, this.head);
    this.head = node;
      }
      size() {
        if (this.head) {
          let node = this.head;
          let size = 1;
          while (node.next) {
            node = node.next;
            size++;
          }
          return size;
        }
        return 0;
      }
      getFirst() {
        return this.head;
      }
     removeFirst() {
        if (!this.head) {
          return;
        }
        this.head = this.head.next;
      }
}

module.exports = { Node, LinkedList };
