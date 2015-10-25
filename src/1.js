var expect = require('chai').expect;

function sumOfNaturalNumbers(below, listOfDivisors) {
  var sum = 0;

  for (var number = 1; number < below; number++) {
    var added = false;
    listOfDivisors.forEach(function(divisor) {
      if (number % divisor == 0 && !added) {
        sum = sum + number;
        added = true;
      }
    });
  }

  return sum;
}

describe('Project Euler #1 - Multiples of 3 and 5', function () {
  it('should return 23 for numbers below 10 that are multiples of 3 or 5', function () {
    expect(sumOfNaturalNumbers(10, [3,5])).to.equal(23);
  });

  it('should return 233168 for numbers below 1000 that are multiples of 3 or 5', function() {
    expect(sumOfNaturalNumbers(1000, [3,5])).to.equal(233168);
  });
});
