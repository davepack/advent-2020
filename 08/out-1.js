const fs = require('fs')

let instructions = fs.readFileSync('input.txt', { encoding: 'utf8'}).split('\n')

let exececutedInstructionsIndexes = []
let acc = 0
let instructionIndex = 0
let execute = true
while (execute) {
  console.log('\ninstructionIndex', instructionIndex);
  console.log('acc', acc);
  let [instruction, signedNum] = instructions[instructionIndex].split(' ')
  console.log('instruction', instruction, signedNum);
  if (!exececutedInstructionsIndexes.includes(instructionIndex)){
    exececutedInstructionsIndexes.push(instructionIndex)
  } else {
    execute = false
  }
  if (execute) {
    switch (instruction) {
      case 'jmp': {
        instructionIndex = eval(`${instructionIndex}${signedNum}`)
        break
      }
      case 'acc': {
        acc = eval(`${acc}${signedNum}`)
      }
      case 'nop': {
        instructionIndex++ 
        break
      }
      default: {
        execute = false
        break
      }
    }
  }
  console.log('acc', acc);
}

console.log('acc', acc)