const _ = require("underscore")

const numArr = [5, 16, 25, 121, 81, 144, 225]

const isSquare = (num) => {
  return num > 0 && Math.sqrt(num) % 1 === 0
}

const square = _.some(numArr, isSquare)

console.log(square)
