import BinarySearchTreeNode from './BinarySearchTreeNode';

export default class BinarySearchTree {
  /**
   * @param {function} [compareFn]
   */
  constructor(compareFn) {
    this.root = new BinarySearchTreeNode(null, compareFn);

    this.compare = this.root.compare;
  }

  /**
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  insert(value) {
    return this.root.insert(value)
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  contains(value) {
    return this.root.contains(value)
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  remove(value) {
    return this.root.remove(value)
  }

  /**
   * @return {string}
   */
  toString() {
    return this.root.toString();
  }
}
