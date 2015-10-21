var assert = require("assert");

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
      assert.equal(true, isPrimeNumber(2));
    });

    it('should return false for 88', function() {
      assert.equal(false, isPrimeNumber(88));
    });

    it('should return true for 269', function() {
      assert.equal(true, isPrimeNumber(269));
    });

    it('should return false for 654', function() {
      assert.equal(false, isPrimeNumber(654));
    });

    it('should return true for 853', function() {
      assert.equal(true, isPrimeNumber(853));
    });
  });

  describe('getNthPrime', function() {
    it('should return 13 as a 6th prime number', function() {
      assert.equal(13, getNthPrime(6));
    });

    it('should return 104743 as a 10001th prime number', function() {
      this.timeout(80000);
      assert.equal(104743, getNthPrime(10001));
    });
  });
});
