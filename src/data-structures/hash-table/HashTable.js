import LinkedList from '../linked-list/LinkedList';

// Hash table size directly affects on the number of collisions.
// The bigger the hash table size the less collisions you'll get.
// For demonstrating purposes hash table size is small to show how collisions
// are being handled.
const defaultHashTableSize = 32;

export default class HashTable {
  /**
   * @param {number} hashTableSize
   */
  constructor(hashTableSize = defaultHashTableSize) {
    const buckets = new Array(hashTableSize)
    this.buckets = buckets.fill(null).map(() => new LinkedList())

    this.keys = []
  }

  /**
   * Converts key string to hash number.
   *
   * @param {string} key
   * @return {number}
   */
  hash(key) {
    const hash = key.split('')
      .map(char => char.charCodeAt() - 96)
      .reduce((sum, num) => sum + num)

    return hash % this.buckets.length
  }

  /**
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
    const hash = this.hash(key)
    const bucket = this.buckets[hash]

    const node = this.buckets[hash].find({
      callback: nodeValue => nodeValue.key === key,
    })

    if (node) {
      bucket.delete(node.value)
    }

    bucket.append({ key, value })

    if (!this.has(key)) {
      this.keys.push(key)
    }
  }

  /**
   * @param {string} key
   * @return {*}
   */
  delete(key) {
    if (this.has(key)) {
      const hash = this.hash(key)
      const bucket = this.buckets[hash]

      const node = bucket.find({
        callback: value => value.key === key,
      })

      bucket.delete(node.value)
    }

    this.keys = this.keys.filter(el => el !== key)
    return null
  }

  /**
   * @param {string} key
   * @return {*}
   */
  get(key) {
    const hash = this.hash(key)

    const node = this.buckets[hash].find({
      callback: value => value.key === key,
    })

    return (node && node.value.value) || undefined
  }

  /**
   * @param {string} key
   * @return {boolean}
   */
  has(key) {
    return this.keys.includes(key)
  }

  /**
   * @return {string[]}
   */
  getKeys() {
    return this.keys
  }
}
