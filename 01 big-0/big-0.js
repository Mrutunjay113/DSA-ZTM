//check the time complexity of the function

const nemo = ["nemo"];

function findNemo(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === "nemo") {
      console.log("Found Nemo!");
    }
  }
}
findNemo(nemo);

//Time complexity of the function

const nemo1 = ["nemo"];
const everyone1 = [
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

const large1 = new Array(100).fill("nemo");
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
findNemo(large1); //18.565 milliseconds
findNemo(everyone1); //4.556 milliseconds
findNemo(nemo1); //4.77 milliseconds

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

//check big 0
function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let index = 0; index < input?.length; index++) {
    anotherFunction(); //O(n)
    let stranger = true; //O(n)
    a++; //O(n)
  }
  return a; //O(1)
}
funChallenge(); //O(3 + 3n)

//Simplifying Big O Notation
//Rule 1: Worst Case
const nemo2 = ["nemo"];
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
const large = new Array(10000).fill("nemo");

function findNemo(array) {
  for (let index = 0; index < array.length; index++) {
    console.log("Running");
    if (array[index] === "nemo") {
      console.log("Found Nemo!");
      break;
    }
  }
}
findNemo(everyone);

//Rule 2: Remove Constants
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); //O(1)

  let middleIndex = Math.floor(items.length / 2);
  let index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (let index = 0; index < 100; index++) {
    console.log("Hi");
  }
}
//O(1 + n/2 + 100) => O(n)

//Rule 3: Different terms for inputs
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach((box) => {
    console.log(box);
  });

  boxes2.forEach((box) => {
    console.log(box);
  });
}
//O(a + b) => O(a + b)

//Log all pairs of array
const boxes2 = ["a", "b", "c", "d", "e"];
function logAllPairsOfArray(array) {
  for (let index = 0; index < array.length; index++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[index], array[j]);
    }
  }
}
logAllPairsOfArray(boxes2);
//O(n * n) => O(n^2)

//Rule 4: Drop Non Dominants

function printAllNumbersThenAllPairSums(numbers) {
  console.log("These are the numbers:");
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log("And these are their sums:");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}
printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

//Excercise
//Find 1st, Find Nth...
const array = ["hi", "my", "teddy"];
array[0]; //O(1)
array[array.length - 1]; //O(1)
