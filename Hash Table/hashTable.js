class HashTable {
  constructor(size = 10) {
    this.table = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.table[index]) {
      for (let pair of this.table[index]) {
        if (pair[0] === key) return pair[1];
      }
    }
    return undefined;
  }

  delete(key) {
    let index = this._hash(key);
    if (this.table[index]) {
      this.table[index] = this.table[index].filter(pair => pair[0] !== key);
    }
  }
}

// Example Usage
const ht = new HashTable();
ht.set("name", "Alice");
ht.set("age", 25);
console.log(ht.get("name")); // Output: Alice
ht.delete("name");
console.log(ht.get("name")); // Output: undefined


// but in js we have  Built in hash : Map() or object 

const map = new Map();

map.set("name", "Alice");
map.set("age", 25);
map.set("city", "Cairo");
map.set(1, "Numeric Key"); 
map.set(true, "Boolean Key"); 

console.log("🚀 Map Content:", map);

console.log(" Name:", map.get("name")); 
console.log(" Age:", map.get("age")); 
console.log(" City:", map.get("city")); 
console.log(" Boolean Key:", map.get(true)); 

console.log( map.has("age")); // true
console.log(map.has("email")); // false

map.delete("city");

console.log( map.size); // 4

for (let key of map.keys()) {
  console.log( key);
}

for (let value of map.values()) {
  console.log( value);
}

for (let [key, value] of map.entries()) {
  console.log(` ${key} -> ${value}`);
}

map.clear();


