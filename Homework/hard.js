var sumOfSquares = function(x, y, z) {
  numbers = [x, y, z];
  numbers = numbers.sort()

  sum = (Math.pow(numbers[2], 2) + Math.pow(numbers[1], 2))
  return sum
}

sumOfSquares(12, 1, 15)