import Comparator from '../../utils/comparator/Comparator';

export default class MinHeap {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {}

  /**
   * @param {number} parentIndex
   * @return {number}
   */
  getLeftChildIndex(parentIndex) {}

  /**
   * @param {number} parentIndex
   * @return {number}
   */
  getRightChildIndex(parentIndex) {}

  /**
   * @param {number} childIndex
   * @return {number}
   */
  getParentIndex(childIndex) {}

  /**
   * @param {number} childIndex
   * @return {boolean}
   */
  hasParent(childIndex) {}

  /**
   * @param {number} parentIndex
   * @return {boolean}
   */
  hasLeftChild(parentIndex) {}

  /**
   * @param {number} parentIndex
   * @return {boolean}
   */
  hasRightChild(parentIndex) {}

  /**
   * @param {number} parentIndex
   * @return {*}
   */
  leftChild(parentIndex) {}

  /**
   * @param {number} parentIndex
   * @return {*}
   */
  rightChild(parentIndex) {}

  /**
   * @param {number} childIndex
   * @return {*}
   */
  parent(childIndex) {}

  /**
   * @param {number} indexOne
   * @param {number} indexTwo
   */
  swap(indexOne, indexTwo) {}

  /**
   * @return {*}
   */
  peek() {}

  /**
   * @return {*}
   */
  poll() {}

  /**
   * @param {*} item
   * @return {MinHeap}
   */
  add(item) {}

  /**
   * @param {*} item
   * @param {Comparator} [customFindingComparator]
   * @return {MinHeap}
   */
  remove(item, customFindingComparator) {}

  /**
   * @param {*} item
   * @param {Comparator} [customComparator]
   * @return {Number[]}
   */
  find(item, customComparator) {}

  /**
   * @param {number} [customStartIndex]
   */
  heapifyUp(customStartIndex) {}

  /**
   * @param {number} [customStartIndex]
   */
  heapifyDown(customStartIndex) {}

  /**
   * @return {boolean}
   */
  isEmpty() {}

  /**
   * @return {string}
   */
  toString() {
    return this.heapContainer.toString();
  }
}
