var expect = require('chai').expect;

function generateNext(number) {
  if (number % 2 === 0) {
    return number / 2;
  } else {
    return 3 * number + 1;
  }
}

function generateCollatzSequence(number, sequence) {
  if (sequence == undefined) {
    sequence = [];
  }

  sequence.push(number);

  if (number > 1) {
    var n = generateNext(number);
    generateCollatzSequence(n, sequence);
  }

  return sequence;
}

function longestCollatzSequence(threshold) {
  var sequenceLength = 0;
  var number = 0;

  for (var i = threshold; i > 0; i--) {
    if (i % 2 === 0) {
      continue;
    }

    var sequence = generateCollatzSequence(i);

    if (sequence.length > sequenceLength) {
      sequenceLength = sequence.length;
      number = i;
    }

    if (i < sequenceLength) {
      break;
    }
  }

  return number;
}

describe('Project Euler #14 - Longest Collatz sequence', function () {
  describe('generateNext', function() {
    it('should return 40 for 13', function () {
      expect(generateNext(13)).to.equal(40);
    });

    it('should return 20 for 40', function () {
      expect(generateNext(40)).to.equal(20);
    });

    it('should return 10 for 20', function () {
      expect(generateNext(20)).to.equal(10);
    });

    it('should return 5 for 10', function () {
      expect(generateNext(10)).to.equal(5);
    });

    it('should return 16 for 5', function () {
      expect(generateNext(5)).to.equal(16);
    });

    it('should return 8 for 16', function () {
      expect(generateNext(16)).to.equal(8);
    });

    it('should return 4 for 8', function () {
      expect(generateNext(8)).to.equal(4);
    });

    it('should return 2 for 4', function () {
      expect(generateNext(4)).to.equal(2);
    });

    it('should return 1 for 2', function () {
      expect(generateNext(2)).to.equal(1);
    });
  });

  describe('generateCollatzSequence', function() {
    it('should return [13, 40, 20, 10, 5, 16, 8, 4, 2, 1] for number 13', function() {
      expect(generateCollatzSequence(13)).to.eql([13, 40, 20, 10, 5, 16, 8, 4, 2, 1]);
    });
  });

  describe('longestCollatzSequence', function() {
    it('should return 10 for number 13', function() {
      this.timeout(120000);
      expect(longestCollatzSequence(1000000)).to.equal(837799);
    });
  });
});
