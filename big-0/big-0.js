//check the time complexity of the function

/* const nemo = ["nemo"];

 function findNemo(array) {
   for (let index = 0; index < array.length; index++) {
     if (array[index] === "nemo") {
       console.log("Found Nemo!");
     }
   }
 }
 findNemo(nemo);
*/

//Time complexity of the function

/*const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const large = new Array(100).fill("nemo");
function findNemo(array) {
  //performance.now() is a method that returns a DOMHighResTimeStamp representing the number of milliseconds elapsed since a reference instant.

  let t0 = performance.now();
  for (let index = 0; index < array.length; index++) {
    if (array[index] === "nemo") {
      console.log("Found Nemo!");
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds");
}
 findNemo(large); //18.565 milliseconds
findNemo(everyone); //4.556 milliseconds
findNemo(nemo); //4.77 milliseconds
*/

//BIG O NOTATION
//O(n) --> Linear Time

//O(1) --> Constant Time
//O(1) is the best time complexity
//O(n) is the worst time complexity

const boxes = [0, 1, 2, 3, 4, 5];
function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); //O(1)
  console.log(boxes[1]); //O(1)
}
logFirstTwoBoxes(boxes); //O(2)
