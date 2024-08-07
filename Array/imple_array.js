//basic implementation of array in javascript

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }
  /* The `shiftItems` method in the `MyArray` class is responsible for shifting the elements in the
 array to the left starting from a specific index. Here's a breakdown of what it does: */
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
const newarray = new MyArray();
newarray.push("Hi");
newarray.push("Hello");
newarray.push("!");

newarray.delete(1);

console.log(newarray);

//create a function that reverses a string
// 'Hi My name is Mrutunjay' should be:
// 'yajnuturM si eman yM iH'

function reverse(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

//using built in function
function reverse2(str) {
  return str.split("").reverse().join("");
}

//es6
const reverse3 = (str) => str.split("").reverse().join("");

console.log(reverse2("Hi My name is Mrutunjay"));

//merge sorted arrays
function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //check input
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    console.log(array1Item);
    console.log(array2Item);
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// [0, 3, 4, 4, 6, 30, 31]
