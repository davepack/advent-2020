const fs = require('fs')

let pwds = fs.readFileSync('input.txt', { encoding: 'utf8'}).trim().split('\n')

let sum = 0

for (let line of pwds) {
  let [min, rest] = line.split('-')
  let [maxLetter, pwd] = rest.split(':')
  pwd = pwd.trim()
  let [max, letter] = maxLetter.split(' ')

  const count = [...pwd.matchAll(RegExp(`${letter}`, 'g'))].length

  if (count >= Number(min) && count <= Number(max)) {
    sum++
  }
}

console.log('sum', sum)