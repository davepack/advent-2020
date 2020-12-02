const fs = require('fs')

const nums = fs.readFileSync('input.txt', { encoding: 'utf8'}).trim().split('\n')
let answer
for (const num of nums) {
  for (const num2 of nums) {
    for (const num3 of nums) {
      if (Number(num) + Number(num2) + Number(num3) === 2020) {
        answer = num * num2 * num3
      }
    }
  }
}


console.log('answer', answer);