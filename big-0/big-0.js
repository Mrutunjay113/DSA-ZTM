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

