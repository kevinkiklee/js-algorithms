import HashTable from '../hash-table/HashTable';

export default class TrieNode {
  constructor(character, isCompleteWord = false) {}

  getChild(character) {}

  addChild(character, isCompleteWord = false) {}

  hasChild(character) {}

  suggestChildren() {}

  toString() {
    let childrenAsString = this.suggestChildren().toString();
    childrenAsString = childrenAsString ? `:${childrenAsString}` : '';
    const isCompleteString = this.isCompleteWord ? '*' : '';

    return `${this.character}${isCompleteString}${childrenAsString}`;
  }
}
