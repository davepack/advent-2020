const fs = require('fs')

let lines = fs.readFileSync('input.txt', { encoding: 'utf8' }).split('\n')

let requiredFields = [
  ['byr', (val) => val > 1919 && val < 2003], 
  ['iyr', (val) => val > 2009 && val < 2021], 
  ['eyr', (val) => val > 2019 && val < 2031], 
  ['hgt', (val) => RegExp(/^(59|6\d|7[1-6])in|(1[5-8]\d|19[0-3])cm$/).test(val)], 
  ['hcl', (val) => RegExp(/^#[a-f|\d]{6}$/).test(val)], 
  ['ecl', (val) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(val)], 
  ['pid', (val) => RegExp(/^\d{9}$/).test(val)],
]

let validCount = 0

let currentRecord = ''
for (let line of lines) {
  if (line.trim() !== '') {
    currentRecord += `${line} `
  } else {
    let recFields = currentRecord.trim().split(' ').reduce((rec, field) => {
      let [key, value] = field.trim().split(':')
      rec[key] = value
      return rec
    }, {})
    let validRecord = true
    for (let [field, validateFnc] of requiredFields) {
      if (!currentRecord.includes(field)) {
        validRecord = false
      } else {
        let value = recFields[field]
        if (!validateFnc(value)) {
          validRecord = false
        }
      }
    }
    if (validRecord) {
      validCount++
    }
    currentRecord = ''
  }
}

console.log('valid count:', validCount)