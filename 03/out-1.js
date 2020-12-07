const fs = require('fs')

let lines = fs.readFileSync('input.txt', { encoding: 'utf8'}).trim().split('\n')

let treeCount = 0
let position = 0
for (let line of lines) {
  let index = position % line.length
  let char = line.charAt(index)

  if (char === '#') {
    treeCount++
  }

  position +=3
}

console.log('tree count', treeCount)