import Comparator from '../../utils/comparator/Comparator';
import HashTable from '../hash-table/HashTable';

export default class BinaryTreeNode {
  /**
   * @param {*} [value] - node value.
   */
  constructor(value = null) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
    this.meta = new HashTable()
    this.nodeComparator = new Comparator()
  }

  /**
   * @return {number}
   */
  get leftHeight() {
    let depth = 1

    if (this.left) {
      depth += this.left.leftHeight
    }

    return depth
  }

  /**
   * @return {number}
   */
  get rightHeight() {
    let depth = 1

    if (this.right) {
      depth += this.right.rightHeight
    }

    return depth
  }

  /**
   * @return {number}
   */
  get height() {
    return Math.max(this.leftHeight, this.rightHeight) - 1
  }

  /**
   * @return {number}
   */
  get balanceFactor() {
    return this.leftHeight - this.rightHeight
  }

  /**
   * Get parent's sibling if it exists.
   * @return {BinaryTreeNode}
   */
  get uncle() {
    if (!this.parent || !this.parent.parent) {
      return undefined
    }

    const grandParent = this.parent.parent

    if (grandParent.left && this.nodeComparator.equal(grandParent.right, this.parent)) {
      return grandParent.left
    }

    if (grandParent.right && this.nodeComparator.equal(grandParent.left, this.parent)) {
      return grandParent.right
    }

    return undefined
  }

  /**
   * @param {*} value
   * @return {BinaryTreeNode}
   */
  setValue(value) {
    this.value = value
    return this
  }

  /**
   * @param {BinaryTreeNode} node
   * @return {BinaryTreeNode}
   */
  setLeft(node) {
    if (node) {
      node.parent = this
    }

    this.left = node
    return this
  }

  /**
   * @param {BinaryTreeNode} node
   * @return {BinaryTreeNode}
   */
  setRight(node) {
    if (node) {
      node.parent = this
    }

    this.right = node
    return this
  }

  /**
   * @param {BinaryTreeNode} nodeToRemove
   * @return {boolean}
   */
  removeChild(nodeToRemove) {
    if (this.left && this.nodeComparator.equal(this.left, nodeToRemove)) {
      this.left = null
      return true
    }

    if (this.right && this.nodeComparator.equal(this.right, nodeToRemove)) {
      this.right = null
      return true
    }

    return false
  }

  /**
   * @param {BinaryTreeNode} nodeToReplace
   * @param {BinaryTreeNode} replacementNode
   * @return {boolean}
   */
  replaceChild(nodeToReplace, replacementNode) {
    if (!replacementNode) {
      return false
    }

    if (this.left && this.nodeComparator.equal(this.left, nodeToReplace)) {
      this.left = replacementNode
      replacementNode.parent = this
      return true
    }

    if (this.right && this.nodeComparator.equal(this.right, nodeToReplace)) {
      this.right = replacementNode
      replacementNode.parent = this
      return true
    }

    return false
  }

  /**
   * @param {BinaryTreeNode} sourceNode
   * @param {BinaryTreeNode} targetNode
   */
  static copyNode(sourceNode, targetNode) {
    targetNode.value = sourceNode.value
    targetNode.left = sourceNode.left
    targetNode.right = sourceNode.right
  }

  /**
   * @return {*[]}
   */
  traverseInOrder() {
    let nodes = []

    if (this.left) {
      nodes = [...nodes, ...this.left.traverseInOrder()]
    }

    nodes.push(this.value)

    if (this.right) {
      nodes = [...nodes, ...this.right.traverseInOrder()]
    }

    return nodes
  }

  /**
   * @return {string}
   */
  toString() {
    return this.traverseInOrder().toString();
  }
}
