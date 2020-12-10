const fs = require('fs')
let fileName = 'input.txt', preambleSize = 25

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

let target = numbers[index]
let sumInts = []
let sum = 0

let i = 0
let busted = false
while (i < numbers.length) {
  if (!busted) {
    let number = numbers[i]
    if (sum < target) {
      sumInts.push(number)
      i++
      sum += number
    } else if (sum > target) {
      busted = true
      let subtract = sumInts.shift()
      sum -= subtract
    } else {
      break
    }
  } else if (sum < target) {
    busted = false
  } else {
    i--
    let number = numbers[i]
    let subtract = sumInts.pop()
    sum -= subtract
  }

  if (sum === target) {
    break
  }
}

sumInts.sort()
let answer = sumInts.shift() + sumInts.pop()
console.log('answer', answer);