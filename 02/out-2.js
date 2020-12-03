const fs = require('fs')

let pwds = fs.readFileSync('input.txt', { encoding: 'utf8'}).trim().split('\n')

let validCount = 0

for (let line of pwds) {
  let [min, rest] = line.split('-')
  min = Number(min) - 1
  let [maxLetter, pwd] = rest.split(':')
  pwd = pwd.trim()
  let [max, letter] = maxLetter.split(' ')
  max = Number(max) - 1
  let firstCharGood = pwd.charAt(min) === letter
  let secondCharGood = pwd.charAt(max) === letter

  if ((firstCharGood && !secondCharGood) || (!firstCharGood && secondCharGood)) {
    validCount++
  }
}

console.log('validCount', validCount)