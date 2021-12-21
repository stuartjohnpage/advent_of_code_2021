var bitBucket = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var gammaRate = []
var epsilonRate = []

const fs = require("fs");
const getPuzzleInput = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const dataArray = []
    let binaryArray = [];
    for(i = 0; i < data.length; ++i){
      if (data[i] != '\n') {
        binaryArray.push(data[i])
      } else {
        dataArray.push(binaryArray)
        binaryArray = [];
      }
    }
    const numInputs = dataArray.length;
    const checkValue = Number(numInputs / 2)
    console.log(dataArray);
    
    dataArray.forEach(binaryArray => {
      for (i = 0; i < binaryArray.length; i++){
        if (Number(binaryArray[i]) === 1) {
          bitBucket[i] ++
        }
      }
    });

    for (i = 0; i < bitBucket.length; ++i) {
      bitBucket[i] > checkValue ? gammaRate[i] = 1 : gammaRate[i] = 0
      bitBucket[i] < checkValue ? epsilonRate[i] = 1 : epsilonRate[i] = 0
    }

    const gammaActual = parseInt(gammaRate.join(''), 2)
    const epsilonActual = parseInt(epsilonRate.join(''), 2)
    const answer = gammaActual * epsilonActual
    console.log(answer)

  })
}

getPuzzleInput('puzzle_input.txt')
