const fs = require('fs')

let lines = fs.readFileSync('input.txt', { encoding: 'utf8'}).trim().split('\n')

let containerReg = RegExp(/^(\w+\s\w+)+/, 'g')
let containedReg = RegExp(/(?:(\d) (\w+\s\w+) bag\w*)/, 'g')

let containeds = {}

for (let line of lines) {
  let container = line.match(containerReg)[0]
  let containedArray = [...line.matchAll(containedReg)]
  for (let [, count, contained] of containedArray) {
    if (!containeds[contained]) containeds[contained] = { containedBy: [] }
    containeds[contained].containedBy.push(container)
  }
}

let containers = []

function getContainerCount(key) {
  let contained = containeds[key]
  if (contained) {
    for (let container of containeds[key].containedBy) {
      if (!containers.includes(container)) containers.push(container)
      getContainerCount(container)
    }
  }
}

let key = 'shiny gold'
getContainerCount(key)
console.log('containers', containers.length);