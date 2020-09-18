const _ = require("underscore")

const numArr = [5, 16, 25, 121, 81, 144, 225]

const isSquare = (num) => {
  return num > 0 && Math.sqrt(num) % 1 === 0
}

const square = _.some(numArr, isSquare) // returns true if even one element in the array fits the criteria established by the function

const foundNum = _.contains(numArr, 82) // returns true only if the given value is in the array

console.log(square)
console.log(foundNum)
