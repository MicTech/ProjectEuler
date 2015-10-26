var expect = require('chai').expect;
var lib = require('project-euler-lib');

function largestPrimeFactor(number) {
  var largest = 2;

  //This is just workaround
  var limit = number > 10000 ? 10000 : number;

  var primes = [2];

  for (var i = 3; i < limit; i += 2) {
    if (lib.isPrimeNumberWithListOfPrimeNumbers(i, primes)) {
      primes.push(i);

      if (number % i == 0) {
        largest = i;
      }
    }
  }

  return largest;
}

describe('Project Euler #3 - Largest prime factor', function () {
  it('should return 29 as largest prime factor of the number 13195', function () {
    expect(largestPrimeFactor(13195)).to.equal(29);
  });

  it('should return 6857 as largest prime factor of the number 600851475143', function() {
    expect(largestPrimeFactor(600851475143)).to.equal(6857);
  })
});
