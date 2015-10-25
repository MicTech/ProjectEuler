var expect = require('chai').expect;

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
      expect(isPrimeNumber(2, [2])).to.equal(true);
    });

    it('should return false for 88', function() {
      var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83];

      expect(isPrimeNumber(88, primeNumbers)).to.equal(false);
    });
  });

  describe('sumPrimeNumbersBelow', function() {
    it('should return 17 for sum primes below 10', function () {
      expect(sumPrimeNumbersBelow(10)).to.equal(17);
    });

    it('should return 142913828922 for sum primes below 2000000', function () {
      this.timeout(120000);
      expect(sumPrimeNumbersBelow(2000000)).to.equal(142913828922);
    });
  });
});
