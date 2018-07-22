import LinkedList from '../linked-list/LinkedList';

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList()
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return !this.linkedList.tail
  }

  /**
   * @return {*}
   */
  peek() {
    const top = this.linkedList.tail
    return top && top.value
  }

  /**
   * @param {*} value
   */
  push(value) {
    this.linkedList.append(value)
  }

  /**
   * @return {*}
   */
  pop() {
    return this.linkedList.deleteTail().value
  }

  /**
   * @return {*[]}
   */
  toArray() {
    return this.linkedList
      .toArray()
      .reverse()
      .map(node => node.value)
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
