const removeDuplicatesFromLinkedList = require('./removeDuplicatesFromLinkedList');

test('testing', () => {

    class LinkedList {
        constructor(value) {
          this.value = value;
          this.next = null;
        }
      }

    const list = new LinkedList(1);
    list.next = new LinkedList(1);
    list.next.next = new LinkedList(3);
    list.next.next.next = new LinkedList(4);
    list.next.next.next.next = new LinkedList(4);
    list.next.next.next.next.next = new LinkedList(4);
    list.next.next.next.next.next.next = new LinkedList(5);
    list.next.next.next.next.next.next.next = new LinkedList(6);
    list.next.next.next.next.next.next.next.next = new LinkedList(6);

    const shortList = new LinkedList(1);
    shortList.next = new LinkedList(3);
    shortList.next.next = new LinkedList(4);
    shortList.next.next.next = new LinkedList(5);
    shortList.next.next.next.next = new LinkedList(6);

    expect(removeDuplicatesFromLinkedList(list)).toEqual(shortList);
})