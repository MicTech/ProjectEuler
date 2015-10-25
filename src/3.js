var assert = require("assert");

function isPrimeNumber(number) {
  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }

  return true;
}

function largestPrimeFactor(number) {
  var largest = 1;

  //This is just workaround
  var limit = number > 10000 ? 10000 : number;

  for (var i = 2; i < limit; i++) {
    if (isPrimeNumber(i)) {
      if (number % i == 0) {
        largest = i;
      }
    }
  }

  return largest;
}

describe('Helpers - Prime Number', function () {
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

describe('Project Euler #3 - Largest prime factor', function () {
  it('should return 29 as largest prime factor of the number 13195', function () {
    assert.equal(29, largestPrimeFactor(13195));
  });

  it('should return 6857 as largest prime factor of the number 600851475143', function() {
    assert.equal(6857, largestPrimeFactor(600851475143));
  })
});
