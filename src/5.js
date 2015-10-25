var expect = require('chai').expect;
var lib = require('project-euler-lib');

function multiple(sequence) {
  var lastNumber = sequence[sequence.length - 1];
  var i = lastNumber;

  while (true) {
    var result = sequence.map(function(number) {
      return i % number === 0;
    }).reduce(function(prev, curr) {
      return prev && curr;
    });

    if (result) {
      return i;
    }

    i += lastNumber;
  }
}

function getSmallestMultiple(start, end) {
  var sequence = lib.generateNumberSequence(start, end);
  return multiple(sequence);
}

describe('Project Euler #5 - Smallest multiple', function () {
  describe('multiple', function() {
    it('should return 2520 as smallest number that can be divided by sequence of the numbers from 1 to 10', function() {
      expect(multiple([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.equal(2520);
    });
  });

  describe('getSmallestMultiple', function() {
    it('should return 2520 as smallest number that can be divided by each of the number from 1 to 10', function () {
      expect(getSmallestMultiple(1, 10)).to.equal(2520);
    });

    it('should return 232792560 as smallest number that can be divided by each of the number from 1 to 20', function () {
      this.timeout(80000);
      expect(getSmallestMultiple(1, 20)).to.equal(232792560);
    });
  });
});
