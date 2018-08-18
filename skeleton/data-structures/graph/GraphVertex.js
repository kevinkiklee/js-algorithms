import LinkedList from '../linked-list/LinkedList';

export default class GraphVertex {
  /**
   * @param {*} value
   */
  constructor(value) {}

  /**
   * @param {GraphEdge} edge
   * @returns {GraphVertex}
   */
  addEdge(edge) {}

  /**
   * @param {GraphEdge} edge
   */
  deleteEdge(edge) {}

  /**
   * @returns {GraphVertex[]}
   */
  getNeighbors() {}

  /**
   * @return {GraphEdge[]}
   */
  getEdges() {}

  /**
   * @return {number}
   */
  getDegree() {}

  /**
   * @param {GraphEdge} requiredEdge
   * @returns {boolean}
   */
  hasEdge(requiredEdge) {}

  /**
   * @param {GraphVertex} vertex
   * @returns {boolean}
   */
  hasNeighbor(vertex) {}

  /**
   * @param {GraphVertex} vertex
   * @returns {(GraphEdge|null)}
   */
  findEdge(vertex) {}

  /**
   * @returns {string}
   */
  getKey() {}

  /**
   * @return {GraphVertex}
   */
  deleteAllEdges() {}

  /**
   * @param {function} [callback]
   * @returns {string}
   */
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
