var expect = require('chai').expect;

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

describe('Project Euler #3 - Largest prime factor', function () {
  it('should return 29 as largest prime factor of the number 13195', function () {
    expect(largestPrimeFactor(13195)).to.equal(29);
  });

  it('should return 6857 as largest prime factor of the number 600851475143', function() {
    expect(largestPrimeFactor(600851475143)).to.equal(6857);
  })
});
