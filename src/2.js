var expect = require('chai').expect;

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
    expect(sumOfEvenFibonacciNumbers(100)).to.equal(44);
  });

  it('should return 4613732 as sum of even numbers in Fibonacci sequence below 4 000 000', function() {
    expect(sumOfEvenFibonacciNumbers(4000000)).to.equal(4613732);
  });
});
