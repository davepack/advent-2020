const fs = require('fs')

let lines = fs.readFileSync('input.txt', { encoding: 'utf8'}).split('\n')

let currentGroup = {}
let sum = 0

for (let line of lines) {
  if (line.trim() !== '') {
    const letters = line.split('')
    for (let letter of letters) {
      if (!currentGroup[letter]) {
        currentGroup[letter] = true
        sum++
      }
    }
  } else {
    currentGroup = {}
  }
}

console.log('sum', sum);