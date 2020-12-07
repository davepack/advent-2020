const fs = require('fs')

let lines = fs.readFileSync('input.txt', { encoding: 'utf8' }).trim().split('\n')
let slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]
let treeArray = []

for (let index = 0; index < slopes.length; index++) {
  let [right, down] = slopes[index]
  let treeCount = 0
  let position = 0
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += down) {
    let line = lines[lineIndex]
    let index = position % line.length
    let char = line.charAt(index)

    if (char === '#') {
      treeCount++
    }

    position += right
  }
  treeArray.push(treeCount)
}

let product = treeArray.reduce((prod, treeCount) => prod * treeCount)

console.log('product', product)