const fs = require('fs')

let instructions = fs.readFileSync('input.txt', { encoding: 'utf8' }).trim().split('\n')

let instructionIndex = 0
for (let line of instructions) {
  let [instruction] = line.split(' ')
  if (instruction === 'jmp' || instruction === 'nop') {
    let changedInstruction = instruction === 'jmp' ? 'nop' : 'jmp'
    let acc = executeInstructions(instructionIndex, changedInstruction)
    if (acc) {
      console.log('answer:', acc);
      break
    }
  }

  instructionIndex++
}

function executeInstructions(changedIndex, changedInstruction) {
  let exececutedInstructions = []
  let acc = 0
  let instructionIndex = 0
  let line = instructions[instructionIndex]
  while (line !== undefined) {
    let [instruction, signedNum] = line.split(' ')
    if (instructionIndex === changedIndex) {
      instruction = changedInstruction
    }
    if (!exececutedInstructions.includes(instructionIndex)) {
      exececutedInstructions.push(instructionIndex)
    } else {
      return false
    }
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
        console.log('default')
        return acc
      }
    }
    line = instructions[instructionIndex]
  }
  return acc
}