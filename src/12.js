var expect = require('chai').expect;

function generateFirstNTriangularNumber(n) {
  var result = [];
  var number = 0;

  for (var i = 1; i < n + 1; i++) {
     number += i;
     result.push(number);
  }

  return result;
}

function generateTriangularNumberWithNDivisors(divisorsCount) {
  //Hack to optimize number of triangular numbers
  var triangularNumbers = generateFirstNTriangularNumber(divisorsCount * 26);

  for (var i = divisorsCount; i < triangularNumbers.length; i++) {
    var triangularNumber = triangularNumbers[i];

    var half = Math.sqrt(triangularNumber);

    var counter = 0;

    for (var j = 1; j < half; j++) {
      if (triangularNumber % j == 0) {
        counter += 2;
      }
    }

    if (counter >= divisorsCount) {
      return triangularNumber;
    }
  }
}

describe('Project Euler #12 - Highly divisible triangular number', function () {
  describe('generateTriangularNumberSequence', function() {
    it('should return 1, 3, 6, 10, 15, 21 as first 7 Triangular Numbers', function () {
      expect(generateFirstNTriangularNumber(7)).to.eql([1, 3, 6, 10, 15, 21, 28]);
    });

    it('should return 1, 3, 6 as first 3 Triangular Numbers', function () {
      expect(generateFirstNTriangularNumber(3)).to.eql([1, 3, 6]);
    });
  });

  describe('generateTriangularNumberWithNDivisors', function() {
    it('should return triangular number 28 as number with 6 divisors', function () {
      expect(generateTriangularNumberWithNDivisors(6)).to.equal(28);
    });

    it('should return triangular number 73920 as number with 100 divisors', function () {
      expect(generateTriangularNumberWithNDivisors(100)).to.equal(73920);
    });

    it('should return triangular number 2031120 as number with 200 divisors', function () {
      expect(generateTriangularNumberWithNDivisors(200)).to.equal(2031120);
    });

    it('should return triangular number 2162160 as number with 300 divisors', function () {
      expect(generateTriangularNumberWithNDivisors(300)).to.equal(2162160);
    });

    it('should return triangular number 17907120 as number with 400 divisors', function () {
      expect(generateTriangularNumberWithNDivisors(400)).to.equal(17907120);
    });

    it('should return triangular number 76576500 as number with 500 divisors', function () {
      expect(generateTriangularNumberWithNDivisors(500)).to.equal(76576500);
    });
  });
});
