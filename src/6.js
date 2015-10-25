var expect = require('chai').expect;

function generateSeries(start, end) {
  var numbers = [];

  for (var i = start; i < end + 1; i++) {
    numbers.push(i);
  }

  return numbers;
}

function getSumSquareDifference(sequence) {
  var sumSquares = sequence.reduce(function(prev, curr) {
    return prev + Math.pow(curr, 2);
  }, 0);

  var squareSum = sequence.reduce(function(prev, curr) {
    return prev + curr;
  }, 0);

  var squareSum = Math.pow(squareSum, 2);

  return squareSum - sumSquares;
}

describe('Project Euler #6 - Sum square difference', function () {
  describe('generateSeries', function() {
    it('should return array with 10 elements with numbers from 1 to 10', function() {
      var sequence = generateSeries(1, 10);

      expect(sequence).to.have.length(10);
      expect(sequence).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });

  describe('getSumSquareDifference', function() {
    it('should return 2640 as a difference between the sum of the squares and the square of the sum for first 10 natural numbers.', function() {
      expect(getSumSquareDifference([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.equal(2640);
    });

    it('should return 25164150 as a difference between the sum of the squares and the square of the sum for first 100 natural numbers.', function() {
      var sequence = generateSeries(1, 100);
      expect(getSumSquareDifference(sequence)).to.equal(25164150);
    });
  });
});
