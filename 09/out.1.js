const fs = require('fs')
// let fileName = 'input.txt', preambleSize = 25
let fileName = 'test.1.txt', preambleSize = 5

let numbers = fs.readFileSync(fileName, { encoding: 'utf8'}).trim().split('\n').map(int => Number(int))

let index = 0
let ints = []

for (let number of numbers) {
  if (index < preambleSize) {
    ints.push(number)
  } else {
    let hasSum = false
    ints.forEach((int1, i) => {
      for (let j = i + 1; j < ints.length; j++) {
        let int2 = ints[j]
        let sum = int1 + int2
        if (sum === number) {
          hasSum = true
        }
      }
    })
    if (!hasSum) {
      break
    }
    ints.shift()
    ints.push(number)
  }
  index++
}

console.log('answer:', numbers[index])
