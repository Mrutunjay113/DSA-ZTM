// given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For example:
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "i"];
// should return false.
// -------------------
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];
// should return true.
//

// 2 parameters - arrays - no size limit
// return true or false

//0(n^2) - Time complexity
//0(1) - Space complexity

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
function containCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}
containCommonItem(array1, array2);
console.log(containCommonItem(array1, array2));

//0(a * b) - Time complexity

//
function containCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object.
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}
console.log(containCommonItem2(array1, array2));
