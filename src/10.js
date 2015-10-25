var expect = require('chai').expect;
var lib = require('project-euler-lib');

function sumPrimeNumbersBelow(end) {
  var primeNumbers = [2];

  for (var i = 3; i < end; i += 2) {
    if(lib.isPrimeNumberWithListOfPrimeNumbers(i, primeNumbers)) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers.reduce(function(prev, curr) {
    return prev + curr;
  });
}

describe('Project Euler #10 - Summation of primes', function () {
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
