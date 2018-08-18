export default class Graph {
  /**
   * @param {boolean} isDirected
   */
  constructor(isDirected = false) {}

  /**
   * @param {GraphVertex} newVertex
   * @returns {Graph}
   */
  addVertex(newVertex) {}

  /**
   * @param {string} vertexKey
   * @returns GraphVertex
   */
  getVertexByKey(vertexKey) {}

  /**
   * @param {GraphVertex} vertex
   * @returns {GraphVertex[]}
   */
  getNeighbors(vertex) {}

  /**
   * @return {GraphVertex[]}
   */
  getAllVertices() {}

  /**
   * @return {GraphEdge[]}
   */
  getAllEdges() {}

  /**
   * @param {GraphEdge} edge
   * @returns {Graph}
   */
  addEdge(edge) {}

  /**
   * @param {GraphEdge} edge
   */
  deleteEdge(edge) {}

  /**
   * @param {GraphVertex} startVertex
   * @param {GraphVertex} endVertex
   * @return {(GraphEdge|null)}
   */
  findEdge(startVertex, endVertex) {}

  /**
   * @param {string} vertexKey
   * @returns {GraphVertex}
   */
  findVertexByKey(vertexKey) {}

  /**
   * @return {number}
   */
  getWeight() {}

  /**
   * Reverse all the edges in directed graph.
   * @return {Graph}
   */
  reverse() {}

  /**
   * @return {object}
   */
  getVerticesIndices() {}

  /**
   * @return {*[][]}
   */
  getAdjacencyMatrix() {}

  /**
   * @return {string}
   */
  toString() {
    return Object.keys(this.vertices).toString();
  }
}
