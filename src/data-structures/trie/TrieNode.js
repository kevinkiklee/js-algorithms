// import HashTable from '../hash-table/HashTable'

export default class TrieNode {
  constructor(character, isCompleteWord = false) {
    this.character = character
    this.isCompleteWord = isCompleteWord
    this.children = []
  }

  getChild(character) {
    const node = this.children.filter(child => child.character === character)

    return node.length > 0 ? node[0] : undefined
  }

  addChild(character, isCompleteWord = false) {
    if (this.hasChild(character)) {
      return this.getChild(character)
    }

    const node = new TrieNode(character, isCompleteWord)
    this.children.push(node)

    return node
  }

  hasChild(character) {
    return this.suggestChildren().filter(char => char === character).length
  }

  suggestChildren() {
    return this.children.map(child => child.character)
  }

  toString() {
    let childrenAsString = this.suggestChildren().toString()
    childrenAsString = childrenAsString ? `:${childrenAsString}` : ''
    const isCompleteString = this.isCompleteWord ? '*' : ''

    return `${this.character}${isCompleteString}${childrenAsString}`
  }
}
