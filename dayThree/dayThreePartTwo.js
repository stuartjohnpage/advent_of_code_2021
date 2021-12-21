

const fs = require("fs");
const getPuzzleInput = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const dataArray = [];
    let binaryArray = [];
    for (i = 0; i < data.length; ++i) {
      if (data[i] != "\n") {
        binaryArray.push(data[i]);
      } else {
        dataArray.push(binaryArray);
        binaryArray = [];
      }
    }


    const lengthOfSubArrys = dataArray[0].length
    const numInputs = dataArray.length;
    const checkValue = Number(numInputs / 2);
    let oxyArray = [...dataArray]
    let co2Array = [...dataArray]
    let index = 0

    while ((oxyArray.length != 1) || co2Array.length != 1) {
      if (oxyArray.length != 1) {
        oxyArray = splitArraysByLeadingDigit(oxyArray, index, true);
      }
      if (co2Array.length != 1) {
        co2Array = splitArraysByLeadingDigit(co2Array, index, false)
      }  
      index++;
    }
    const oxyActual = parseInt(oxyArray[0].join(""), 2);
    console.log(oxyActual)
    const co2Actual = parseInt(co2Array[0].join(""), 2);
    console.log(co2Actual)
    const answer = oxyActual * co2Actual;
    console.log(answer);
  });
};

const splitArraysByLeadingDigit = (arrayOfData, i, commonSwitch) => {
  const splitArrays = [[],[]]

  arrayOfData.forEach((array) => {
    if (array[i] == 0) {
      splitArrays[0].push(array);
    } else {
      splitArrays[1].push(array);
    }   
  })
  if (commonSwitch) {
    return splitArrays[1].length >= splitArrays[0].length ? splitArrays[1] : splitArrays[0]
  } else {
    return splitArrays[0].length <= splitArrays[1].length ? splitArrays[0] : splitArrays[1];
  }
}


getPuzzleInput("puzzle_input.txt");


