import TrieNode from './TrieNode';

const HEAD_CHARACTER = '*';

export default class Trie {
  constructor() {
    this.head = new TrieNode(HEAD_CHARACTER)
  }

  addWord(word) {
    const chars = word.split('')

    let node = this.head
    let i = 0

    while (i < chars.length) {
      const isFinalChar = i === chars.length - 1
      node = node.addChild(chars[i], isFinalChar)

      i += 1
    }
  }

  suggestNextCharacters(word) {
    const node = this.getLastCharacterNode(word)

    return node ? node.suggestChildren() : null
  }

  doesWordExist(word) {
    return !!this.getLastCharacterNode(word)
  }

  getLastCharacterNode(word) {
    const chars = word.split('')

    let node = this.head
    let i = 0

    while (i < chars.length) {
      const child = node.getChild(chars[i])

      if (!child) {
        return null
      }

      node = child

      i += 1
    }

    return node
  }
}
