export default class GraphEdge {
  /**
   * @param {GraphVertex} startVertex
   * @param {GraphVertex} endVertex
   * @param {number} [weight=1]
   */
  constructor(startVertex, endVertex, weight = 0) {}

  /**
   * @return {string}
   */
  getKey() {}

  /**
   * @return {GraphEdge}
   */
  reverse() {}

  /**
   * @return {string}
   */
  toString() {
    return this.getKey();
  }
}
