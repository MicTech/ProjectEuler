var expect = require('chai').expect;

function isPrimeNumber(number) {
  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }

  return true;
}

function getNthPrime(n) {
  var i = 0;
  var number = 1;

  while (true) {
    number++;

    if(isPrimeNumber(number)) {
      i++
    }

    if(i === n) {
      return number;
    }
  }
}

describe('Project Euler #7 - 10001st prime', function () {
  describe('isPrimeNumber', function () {
    it('should return true for 2', function() {
      expect(isPrimeNumber(2)).to.equal(true);
    });

    it('should return false for 88', function() {
      expect(isPrimeNumber(88)).to.equal(false);
    });

    it('should return true for 269', function() {
      expect(isPrimeNumber(269)).to.equal(true);
    });

    it('should return false for 654', function() {
      expect(isPrimeNumber(654)).to.equal(false);
    });

    it('should return true for 853', function() {
      expect(isPrimeNumber(853)).to.equal(true);
    });
  });

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
