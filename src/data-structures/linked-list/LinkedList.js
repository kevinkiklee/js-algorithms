import LinkedListNode from './LinkedListNode';
import Comparator from '../../utils/comparator/Comparator';

export default class LinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    this.compare = new Comparator(comparatorFunction)

    this.head = null
    this.tail = null
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(value) {
    const node = new LinkedListNode(value, this.head)

    if (!this.tail) {
      this.tail = node
    }

    this.head = node

    return this
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    const node = new LinkedListNode(value)

    if (!this.head) {
      this.head = node
    }

    if (this.tail) {
      this.tail.next = node
    }

    this.tail = node

    return this
  }

  /**
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete(value) {
    if (!this.head || !this.tail) {
      return null
    }

    while (this.head.value === value) {
      if (this.head.next) {
        this.head = this.head.next
      } else {
        this.head = ''
      }
    }

    let node = this.head

    while (node.next) {
      if (node.next.value === value) {
        node.next = node.next.next
      }

      if (node.next && node.next.value !== value) {
        node = node.next
      }

      if (!node.next) {
        this.tail = node
      }
    }

    return {
      value,
    }
  }

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {LinkedListNode}
   */
  find({
    value = undefined,
    callback = () => false,
  }) {
    if (!this.head) {
      return null
    }

    let node = this.head

    while (node) {
      const callbackResult = callback && callback(node.value)
      const comparatorResult = this.compare && this.compare.equal(node.value, value)
      const result = node.value === value

      if (callbackResult || comparatorResult || result) {
        return node
      }

      node = node.next
    }

    return null
  }

  /**
   * @return {LinkedListNode}
   */
  deleteTail() {
    if (!this.head) {
      return {
        value: null,
      }
    }

    if (!this.head.next) {
      const deletedValue = this.head.value
      this.head = null
      this.tail = null

      return {
        value: deletedValue,
      }
    }

    let node = this.head

    while (node.next.next) {
      node = node.next
    }

    const deletedValue = node.next
    this.tail = node
    node.next = null

    return {
      value: deletedValue.value,
    }
  }

  /**
   * @return {LinkedListNode}
   */
  deleteHead() {
    if (!this.head) {
      return null
    }

    const deletedValue = this.head

    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }

    return {
      value: deletedValue.value,
    }
  }

  /**
   * @return {LinkedListNode[]}
   */
  toArray() {
    let node = this.head
    const array = []

    while (node) {
      array.push(node)
      node = node.next
    }

    return array
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString()
  }
}
