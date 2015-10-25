var assert = require("assert");

function isPrimeNumber(number, primeNumbers) {
  if(number === 2) {
    return true;
  }

  for (var i = 0; i < primeNumbers.length; i++) {
    if(number % primeNumbers[i] === 0) {
      return false;
    }
  }

  return true;
}

function sumPrimeNumbersBelow(end) {
  var primeNumbers = [2];

  for (var i = 3; i < end; i += 2) {
    if(isPrimeNumber(i, primeNumbers)) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers.reduce(function(prev, curr) {
    return prev + curr;
  });
}

describe('Project Euler #10 - Summation of primes', function () {
  describe('isPrimeNumber', function () {
    it('should return true for 2', function() {
      assert.equal(true, isPrimeNumber(2, [2]));
    });

    it('should return false for 88', function() {
      assert.equal(false, isPrimeNumber(88, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83]));
    });
  });

  describe('sumPrimeNumbersBelow', function() {
    it('should return 17 for sum primes below 10', function () {
      assert.equal(17, sumPrimeNumbersBelow(10));
    });

    it('should return 142913828922 for sum primes below 2000000', function () {
      this.timeout(120000);
      assert.equal(142913828922, sumPrimeNumbersBelow(2000000));
    });
  });
});
