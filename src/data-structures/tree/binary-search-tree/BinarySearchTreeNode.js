import BinaryTreeNode from '../BinaryTreeNode'
import Comparator from '../../../utils/comparator/Comparator'
import HashTable from '../../hash-table/HashTable'

export default class BinarySearchTreeNode extends BinaryTreeNode {
  /**
   * @param {*} [value] - node value.
   * @param {function} [compareFunction] - comparator function for node values.
   */
  constructor(value = null, compareFunction = undefined) {
    super()
    this.value = value
    this.compare = new Comparator(compareFunction)
    this.meta = new HashTable()
  }

  /**
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  insert(value) {
    if (!this.value) {
      this.value = value
      return this
    }

    if (this.compare.equal(value, this.value)) {
      return this
    }

    const node = new BinarySearchTreeNode(value)

    if (this.compare.lessThan(value, this.value)) {
      if (this.left) {
        return this.left.insert(value)
      }

      this.setLeft(node)
    } else {
      if (this.right) {
        return this.right.insert(value)
      }

      this.setRight(node)
    }

    node.parent = this
    return node
  }

  /**
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  find(value) {
    if (this.compare.equal(value, this.value)) {
      return this
    }

    const leftResult = this.left && this.left.find(value)
    const rightResult = this.right && this.right.find(value)

    return leftResult || rightResult
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  contains(value) {
    return !!this.find(value)
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  remove(value) {
    const node = this.find(value)

    if (!node) {
      throw new Error()
    }

    const {
      parent,
    } = node

    if (!node.left && !node.right) {
      if (parent) {
        parent.removeChild(node)
      } else {
        node.setValue(null)
      }
    } else if (node.left && node.right) {
      const minNode = node.right.findMin()

      this.remove(minNode.value)
      node.setValue(minNode.value)
    } else {
      const child = node.left || node.right

      if (parent) {
        parent.replaceChild(node, child)
      } else {
        BinaryTreeNode.copyNode(child, node)
      }
    }

    return true
  }

  /**
   * @return {BinarySearchTreeNode}
   */
  findMin() {
    let node = this

    while (node.left) {
      node = node.left
    }

    return node
  }
}
