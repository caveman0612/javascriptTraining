// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList;
    while (currentNode) {

      let nextNode = currentNode.next
      if (!nextNode) break;

      if (currentNode.value === nextNode.value) {
        currentNode.next = nextNode.next;
        continue;
      }
      currentNode = currentNode.next;
    }
    return linkedList;
  }

  module.exports = removeDuplicatesFromLinkedList