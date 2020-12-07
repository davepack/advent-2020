const fs = require('fs')

let lines = fs.readFileSync('test.txt', { encoding: 'utf8'}).split('\n')

let requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
let validCount = 0

let currentRecord = ''
for (let line of lines) {
  if (line.trim() !== '') {
    console.log('line', line);
    currentRecord += `${line} `
  } else {
    console.log('currentRecord', currentRecord);
    let validRecord = true
    for (let field of requiredFields) {
      console.log('field', field);
      if (!currentRecord.includes(field)) {
        validRecord = false
      }
    }
    console.log('validRecord', validRecord, '\n')
    if (validRecord) {
      validCount++
    }
    currentRecord = ''
  }
}

console.log('valid count:', validCount)