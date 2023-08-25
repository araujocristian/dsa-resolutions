class ListNode {
  value
  next

  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head
  tail
  size

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  get(index) {
    if (this.head == null) return
    const temp = head;

    for (i = 0; i <= index; i++) {
      temp = temp.next
    }

    return temp.value
  }

  // [10, 20, 30, ]
  insert(value, index) { // value = 5, index = 4
    if (index === 0) {
      this.pushFront(value)
      return
    }

    if (index < 0 || this.head === null) {
      return
    }

    let temp = this.head

    for (i = 0; i < index - 1; i++) { //i = 4; index-1 = 4
      temp = temp.next
      if (temp.next === null) return // temp = null
    }

    let newNode = new ListNode(value, temp.next)
    temp.next = newNode
    this.size = this.size + 1
  }

  // [10, 20, 30]
  delete(index) { // index = 3
    if (this.head === null) return

    if (index === 0) {
      this.head = this.head.next
      if (this.head === null) {
        this.tail = null
      }
      this.size = this.size - 1
      return
    }

    let temp = head; // temp = 10

    for (i = 0; i < index - 1; i++) { // i= 2 ; index-1 = 2
      temp = temp.next // temp = 20
      if (temp.next === null) return // temp.next = 30
    }

    temp.next = temp.next.next
    if (temp.next === null) {
      this.tail = temp;
    }
    this.size = this.size - 1
  }

  size() {
    return this.size
  }

  pushFront(value) {
    if (this.head === null) {
      this.head = new ListNode(value, null)
      this.tail = this.head
    } else {
      this.head = new ListNode(value, this.head)
    }

    this.size = this.size + 1
  }

  pushBack(value) {
    if (this.head === null) {
      this.pushFront(value)
      return
    }

    let newNode = new ListNode(value, null)

    this.tail.next = newNode;
    this.tail = newNode;

    this.size = this.size + 1
  }
}