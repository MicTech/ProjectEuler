var expect = require('chai').expect;
var lib = require('project-euler-lib');

function getNthPrime(n) {
  var i = 1;
  var number = 3;
  var primes = [2];

  while (i !== n) {
    number += 2;

    if(lib.isPrimeNumberWithListOfPrimeNumbers(number, primes)) {
      primes.push(number);
      i++;
    }
  }

  return number;
}

describe('Project Euler #7 - 10001st prime', function () {
  describe('getNthPrime', function() {
    it('should return 13 as a 6th prime number', function() {
      expect(getNthPrime(6)).to.equal(13);
    });

    it('should return 104743 as a 10001th prime number', function() {
      expect(getNthPrime(10001)).to.equal(104743);
    });
  });
});
