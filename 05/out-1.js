const fs = require('fs')

let lines = fs.readFileSync('input.txt', { encoding: 'utf8'}).trim().split('\n')

let highest = 0

for (let line of lines) {
  let lower = 0
  let upper = 127
  let left = 0
  let right = 7
  let row
  let column

  let letters = line.split('')
  for (let letter of letters) {
    if (letter === 'F') {
      upper = Math.floor((lower + upper) / 2)
      row = lower
    }
    
    
    if (letter === 'B') {
      lower = Math.floor((lower + upper) / 2) + 1
      row = upper
    }

    if (letter === 'L') {
      right = Math.floor((left + right) / 2)
      column = left
    }
    
    if (letter === 'R') {
      left = Math.floor((left + right) / 2) + 1
      column = right
    }
  }

  let id = row * 8 + column

  if (highest < id ) {
    highest = id
  }
  
  console.log(row, column, row * 8 + column)
}

console.log('highest', highest);