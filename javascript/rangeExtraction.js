// get each number in array in turn
    // set carry-forward count to 0
// if completion array is empty
    // append current number to return string
    // return
// if current number is 1 greater than last competion array number
    // add 1 to carry-forward count
        // return
    // else
        // if current number is prev number + 1
          // return:
            // carryForward: previous carry-forward + 1
            // outputString: previous output string
            // lastNumber: current number
        // else
          // if carry forward is 0
            // return:
              // carryForward: 0
              // outputString: previous outputString + currentNumber
              // lastNumber: current number
            // else if carry forward is 1
                // return:
                // carryForward: 0
                // outputString: previous outputString + "," + lastNumber + "," + currentNumber
                // lastNumber: current number
          // else
            // return:
              // carryForward: 0
              // outputString: previousOutputString + "-" + last Number + "," + currentNumber
              // lastNumber: currentNumber

    // need to tidy up any numbers not written when reduce finishes

function solution(list) {
  if (list.length < 2) {return list.join('')};
  const outputs = list.reduce((prev, current) => {
    if (prev.outputString.length === 0) {return {outputString: current.toString(), carryForward: 0, lastNumber: current}};

    if (current === prev.lastNumber + 1) {
        return {outputString: prev.outputString, carryForward: prev.carryForward + 1, lastNumber: current}
    }

    if (prev.carryForward === 0) {
      return { outputString: `${prev.outputString},${current}`, carryForward: 0, lastNumber: current };
    }


    if (prev.carryForward === 1) {
        return {outputString: `${prev.outputString},${prev.lastNumber},${current}` , carryForward: 0, lastNumber: current}
    }

    return {outputString: `${prev.outputString}-${prev.lastNumber},${current}`, carryForward: 0, lastNumber: current}
  }, {outputString: "", carryForward: 0, lastNumber: 0})

  if (outputs.carryForward === 0) {return outputs.outputString};
  if (outputs.carryForward === 1) {return `${outputs.outputString},${lastNumber}`};
  return `${outputs.outputString}-${outputs.lastNumber}`;
}


// console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
console.log(solution([-6]));