class JankyHashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const hash = this._hash(key);
    if (this.keyMap[hash]) {
      for (let item of this.keyMap[hash]) {
        if (item[0] === key) {
          item[1] = value;
          return;
        }
      }
      this.keyMap[hash] = this.keyMap[hash].concat([[key, value]]);
    } else {
      this.keyMap[hash] = [[key, value]];
    }
  }

  get(key) {
    const hash = this._hash(key);
    if (!this.keyMap[hash]) return undefined;
    if (this.keyMap[hash].length > 1) {
      for (let item of this.keyMap[hash]) {
        if (key === item[0]) return item[1];
      }
    } else {
      return this.keyMap[hash][0][1];
    }
  }

  keys() {
    return String(this.keyMap)
      .split(",")
      .filter((item, i) => i % 2 !== 0 && item !== "");
  }

  values() {
    let resultSet = new Set();
    this.keyMap.forEach((item) => {
      if (item.length > 1) {
        for (const inner of item) resultSet.add(inner[1]);
      } else {
        resultSet.add(item[0][1]);
      }
    });
    return Array.from(resultSet);
  }
}

let ht = new JankyHashTable(17);
ht.set("cool", "nick");
ht.set("wonderful", "nick");
ht.set("great", "jim");

console.log(ht.values());
