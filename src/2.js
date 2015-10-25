var assert = require("assert");

function sumOfEvenFibonacciNumbers(below) {
  var sum = 0;

  var prev = 1;
  var curr = 1;

  while(curr < below) {
    if (curr % 2 == 0) {
      sum = sum + curr;
    }

    var t = prev;
    prev = curr;
    curr = t + curr;
  }

  return sum;
}

describe('Project Euler #2 - Even Fibonacci numbers', function () {
  it('should return 44 as sum of even numbers in Fibonacci sequence below 100', function () {
    assert.equal(44, sumOfEvenFibonacciNumbers(100));
  });

  it('should return 4613732 as sum of even numbers in Fibonacci sequence below 4 000 000', function() {
    assert.equal(4613732, sumOfEvenFibonacciNumbers(4000000));
  })
});
