//hash table

//hash table is a data structure that stores key-value pairs. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
//Hash tables are a common way to implement the map data structure or objects.
//Hash tables are widely used because they are efficient at inserting, deleting, and finding elements.

//In JavaScript, objects are used to create hash tables. Objects have keys and values, and we can use the keys to access the values.
//The keys of an object are hashed to find the location of the value. This allows for constant time operations.

//In this example, we will create a hash table using an object in JavaScript. We will implement the following methods:
//1. set(key, value): This method will add a key-value pair to the hash table. If the key already exists, the value will be updated.
//2. get(key): This method will return the value associated with the key in the hash table. If the key does not exist, it will return undefined.
//3. delete(key): This method will remove the key-value pair from the hash table.
//4. has(key): This method will return true if the key exists in the hash table, and false otherwise.

let user = {
  age: 24,
  name: "Mrutunjay",
  magic: true,
  scream: function () {
    console.log("ahhhhhhhhh");
  },
};
user.age; //O(1)
user.scream(); //O(1)

//Implementing a hash table

class HashTable {
  constructor(size) {
    // [[grapes, 10000], [apples, 54], [oranges, 2]]
    this.data = new Array(size);
  }

  //hash method
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}
const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
myHashTable.get("grapes");

