class HashTable {
  // 53 is a prime num
  constructor(size = 53) {
    // keyMap is where we store all the data
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      // modding by this.keyMap.length
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key); // get index in hash table
    // check if unoccupied
    if (!this.keyMap[index]) {
      // set as empty array
      this.keyMap[index] = [];
    }
    // either way, insert k-v pair at that idx as new sub-array
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    // if occupied at idx
    if (this.keyMap[index]) {
      // loop thru subarray
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) { // matching key?
          return this.keyMap[index][i][1] // return value of k-v pair
        }
      }
    }
    return undefined; // if key (e.g. 'yellow') is not found
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000")
ht.set("yellow", "#FFFF00")
ht.set("olive", "#808000")
ht.set("salmon", "#FA8072")
ht.set("lightcoral", "#F08080")
ht.set("mediumvioletred", "#C71585")
ht.set("plum", "#DDA0DD")

