var HPOS = 0
var VPOS = 0
var aim = 0

const fs = require("fs");

const getPuzzleInput = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const distanceDirectionArray = zipToArray(data);

    // distanceDirectionArray.forEach((directive) =>
    //   calculateNewPosition(directive)
    // );

    // PART TWO

    distanceDirectionArray.forEach(directive => {
      calculateNewPositionDayTwo(directive)
    });

    
    console.log(VPOS)
    console.log(HPOS)
    console.log(HPOS * VPOS)

    return data;
  });
};

getPuzzleInput("../puzzle_input.txt");

const zipToArray = (puzzleString) => {
  const directions = []
  const distances = []
  let tempString = ""
  for (i = 0; i < puzzleString.length; i++){
    if (puzzleString[i] != " " && "\n") {
      tempString = tempString.concat(puzzleString[i])
    } else {
      if (puzzleString[i] === " ") {
        tempString = tempString.replace('\n', '')
        directions.push(tempString)
        distances.push(puzzleString[i+1])
        i++
        tempString = ""
      }
    }
  }
  return zip(directions, distances)
}

const zip = (a, b) => a.map((k, i) => [k, b[i]]);

const calculateNewPosition = (directiveArray) => {
  const direction = directiveArray[0]
  const amount = Number(directiveArray[1])

  if (direction === 'forward') {
    HPOS = HPOS + amount
  } else if (direction === 'down') {
    VPOS = VPOS + amount
  } else if (direction === 'up') {
    VPOS = VPOS - amount
  }
}

const calculateNewPositionDayTwo = (directiveArray) => {
  const direction = directiveArray[0];
  const amount = Number(directiveArray[1]);

  if (direction === "forward") {
    HPOS = HPOS + amount;
    VPOS = VPOS + (aim * amount)
  } else if (direction === "down") {
    aim = aim + amount;
  } else if (direction === "up") {
    aim = aim - amount;
  }
};
