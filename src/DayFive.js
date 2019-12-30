const firstParameter = (arrayInput, index) => {
  return Math.floor(arrayInput[index]/100)%10 === 1 ?  arrayInput[index + 1] : arrayInput[arrayInput[index + 1]];
};

const secondParameter = (arrayInput, index) => {
  return Math.floor(arrayInput[index]/1000) === 1 ? arrayInput[index + 2] : arrayInput[arrayInput[index + 2]];
};

const processInstruction = (arrayInput, input) => {
  const output = [];
  let instructionPointer = 0;
  for (let index = 0; index < arrayInput.length; index = index + instructionPointer) {
    if (arrayInput[index]%100 === 1) {
      instructionPointer = 4;
      arrayInput[arrayInput[index + 3]] = firstParameter(arrayInput, index) + secondParameter(arrayInput, index);
    }
    if (arrayInput[index]%100 === 2) {
      instructionPointer = 4;
      arrayInput[arrayInput[index + 3]] = firstParameter(arrayInput, index) * secondParameter(arrayInput, index);
    }

    if (arrayInput[index]%100 === 3) {
      instructionPointer = 2;
      arrayInput[arrayInput[index + 1]] = input;
    }

    if (arrayInput[index]%100 === 4) {
      instructionPointer = 2;
      output.push(firstParameter(arrayInput, index));
    }

    if (arrayInput[index]%100 === 5) {
      if (firstParameter(arrayInput, index) !== 0) {
        index = secondParameter(arrayInput, index);
        instructionPointer = 0;
      } else {
        instructionPointer = 3;
      }
    }

    if (arrayInput[index]%100 === 6) {
      if (firstParameter(arrayInput, index) === 0) {
        index = secondParameter(arrayInput, index);
        instructionPointer = 0;
      } else {
        instructionPointer = 3;
      }
    }

    if (arrayInput[index]%100 === 7) {
      instructionPointer = 4;
      if (firstParameter(arrayInput, index) < secondParameter(arrayInput, index)) {
        arrayInput[arrayInput[index + 3]] = 1;
      } else {
        arrayInput[arrayInput[index + 3]] = 0;
      }
    }

    if (arrayInput[index]%100 === 8) {
      instructionPointer = 4;
      if (firstParameter(arrayInput, index) === secondParameter(arrayInput, index)) {
        arrayInput[arrayInput[index + 3]] = 1;
      } else {
        arrayInput[arrayInput[index + 3]] = 0;
      }
    }

    if (arrayInput[index]%100 === 99) {
      return output
    }
  }
};

exports.processInstruction = processInstruction;