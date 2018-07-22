import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  constructor() {
    this.linkedList = new LinkedList()
  }

  isEmpty() {
    return !this.linkedList.tail
  }

  peek() {
    return this.isEmpty() ? null : this.linkedList.head.value
  }

  enqueue(value) {
    return this.linkedList.append(value)
  }

  dequeue() {
    return this.isEmpty() ? null : this.linkedList.deleteHead().value
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
