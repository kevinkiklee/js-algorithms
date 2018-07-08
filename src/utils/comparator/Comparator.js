export default class Comparator {
  /**
   * @param {function(a: *, b: *)} [compareFunction]
   */
  constructor(compareFunction) {
    this.compare = compareFunction || this.defaultCompareFunction
  }

  /**
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @returns {number}
   */
  defaultCompareFunction(a, b) {
    return a === b ? 0 : a < b ? -1 : 1
  }

  equal(a, b) {
    return this.compare(a, b) === 0
  }

  lessThan(a, b) {
    return this.compare(a, b) < 0
  }

  greaterThan(a, b) {
    return this.compare(a, b) > 0
  }

  lessThanOrEqual(a, b) {
    return this.equal(a, b) || this.lessThan(a, b)
  }

  greaterThanOrEqual(a, b) {
    return this.equal(a, b) || this.greaterThan(a, b)
  }

  reverse() {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
  }
}
