import DoublyLinkedListNode from './DoublyLinkedListNode'
import Comparator from '../../utils/comparator/Comparator'

export default class DoublyLinkedList {
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
   * @return {DoublyLinkedList}
   */
  prepend(value) {
    const node = new DoublyLinkedListNode(value)

    if (!this.head) {
      this.head = node
      this.tail = node
      return this
    }

    node.next = this.head
    this.head.previous = node
    this.head = node

    return this
  }

  /**
   * @param {*} value
   * @return {DoublyLinkedList}
   */
  append(value) {
    const node = new DoublyLinkedListNode(value)

    if (!this.head) {
      this.head = node
      this.tail = node
      return this
    }

    this.tail.next = node
    node.previous = this.tail
    this.tail = node

    return this
  }

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {DoublyLinkedListNode}
   */
  find({
    value = undefined,
    callback = undefined,
  }) {
    if (!this.head) {
      return null
    }

    let node = this.head

    while (node) {
      if (callback && callback(node.value)) {
        return node
      }

      if (this.compare.equal(node.value, value)) {
        return node
      }

      node = node.next
    }

    return null
  }

  /**
   * @return {DoublyLinkedListNode}
   */
  deleteHead() {
    if (!this.head) {
      return null
    }

    const deletedNode = this.head

    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.previous = null
    }

    return deletedNode
  }

  /**
   * @return {DoublyLinkedListNode}
   */
  deleteTail() {
    if (!this.head) {
      return null
    }

    const deletedNode = this.tail

    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.previous
      this.tail.next = null
    }

    return deletedNode
  }

  /**
   * @param {*} value
   * @return {DoublyLinkedListNode}
   */
  delete(value) {
    const node = this.find({
      value,
    })

    if (!node) {
      return null
    }

    if (node === this.head) {
      this.deleteHead()
    } else if (node === this.tail) {
      this.deleteTail()
    } else {
      node.previous.next = node.next
      node.next.previous = node.previous
    }


    return node
  }

  /**
   * @return {DoublyLinkedListNode[]}
   */
  toArray() {
    const nodes = []

    let currentNode = this.head
    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    return nodes
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString()
  }
}
