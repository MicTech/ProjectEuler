var assert = require("assert");

function generateSeries(start, end) {
  var numbers = [];

  for (var i = start; i < end + 1; i++) {
    numbers.push(i);
  }

  return numbers;
}

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
  var sequence = generateSeries(start, end);
  return multiple(sequence);
}

describe('Project Euler #5 - Smallest multiple', function () {
  describe('generateSeries', function() {
    it('should return array with 10 elements with numbers from 1 to 10', function() {
      assert.equal(generateSeries(1, 10).length, 10);
      assert.deepEqual(generateSeries(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    })
  })

  describe('multiple', function() {
    it('should return 2520 as smallest number that can be divided by sequence of the numbers from 1 to 10', function() {
      assert.equal(2520, multiple([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    })
  });

  describe('getSmallestMultiple', function() {
    it('should return 2520 as smallest number that can be divided by each of the number from 1 to 10', function () {
      assert.equal(2520, getSmallestMultiple(1, 10));
    });

    it('should return 232792560 as smallest number that can be divided by each of the number from 1 to 20', function () {
      this.timeout(80000);
      assert.equal(232792560, getSmallestMultiple(1, 20));
    });
  });
});
