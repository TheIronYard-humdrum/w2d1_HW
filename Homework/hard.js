var sumOfSquares = function(x, y, z) {
  numbers = [x, y, z];
  numbers = numbers.sort();

  sum = (Math.pow(numbers[numbers.length-1], 2) + Math.pow(numbers[numbers.length-2], 2));
  return sum;
};

// I'm the worst at remembering my punctuation since coding in
// Ruby for the last couple months.  But I'll get back into it!

sumOfSquares(12, 1, 15)

//Just to show that I know how to use the if else statements.

var sumOfSquares = function(x, y, z) {
  if (x <= y && x <= z) {
    return (y*y + z*z);
  };
  else if (y <= x && y <= z) {
    return (x*x + z*z);
  };
  else {
    return (x*x + y*y);
  };
};

sumOfSquares(12, 1, 15)

// Solution for infinite number of given numbers is numbers are givin in array

var sumOfSquares = function(numbers) {
  nums = numbers.sort(function(a, b){return a-b});
  sum = (Math.pow(numbers[numbers.length-1], 2) + Math.pow(numbers[numbers.length-2], 2));
  return sum
};

// I'm the worst at remembering my punctuation since coding in
// Ruby for the last couple months.  But I'll get back into it!
numbers = [1,4,7,3,9,3,8,12,45,78,23]
sumOfSquares(numbers)


