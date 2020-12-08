const fs = require('fs')

let lines = fs.readFileSync('input.txt', { encoding: 'utf8'}).trim().split('\n')

let containerReg = RegExp(/^(\w+\s\w+)+/, 'g')
let containedReg = RegExp(/(?:(\d) (\w+\s\w+) bag\w*)/, 'g')

let containers = {}

for (let line of lines) {
  let containerKey = line.match(containerReg)[0]
  let containsArray = [...line.matchAll(containedReg)]
  let container = {}
  
  for (let [, count, contained] of containsArray) {
    container[contained] = count
  }

  containers[containerKey] = container
}

function getContainerCount(key) {
  let containeds = containers[key]
  let count = 0

  for (let containedKey in containeds) {
    let containedCount = Number(containeds[containedKey])
    count += containedCount + containedCount * getContainerCount(containedKey)
  }

  return count
}

console.log(getContainerCount('shiny gold'))
