var expect = require('chai').expect;
var lib = require('project-euler-lib');

function getNthPrime(n) {
  var i = 0;
  var number = 1;

  while (true) {
    number++;

    if(lib.isPrimeNumber(number)) {
      i++
    }

    if(i === n) {
      return number;
    }
  }
}

describe('Project Euler #7 - 10001st prime', function () {
  describe('getNthPrime', function() {
    it('should return 13 as a 6th prime number', function() {
      expect(getNthPrime(6)).to.equal(13);
    });

    it('should return 104743 as a 10001th prime number', function() {
      this.timeout(80000);
      expect(getNthPrime(10001)).to.equal(104743);
    });
  });
});
