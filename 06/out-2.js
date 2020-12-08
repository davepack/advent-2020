const fs = require('fs')

let lines = fs.readFileSync('input.txt', { encoding: 'utf8'}).split('\n')

let intersection = null
let sum = 0

for (let line of lines) {
  if (line.trim() !== '') {
    const letters = line.split('')
    if (intersection === null) {
      intersection = letters
    } else {
      intersection = letters.filter(l => intersection.includes(l))
    }
  } else {
    sum += intersection.length
    intersection = null 
  }
}

console.log('sum', sum);