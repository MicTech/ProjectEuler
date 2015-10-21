var assert = require("assert");

function findProductOfPythagoreanTriplet(sum) {
  for (var a = 1; a < sum; a++) {
    for (var b = 2; b < sum; b++) {
      for (var c = 3; c < sum; c++) {
        if ((a + b + c) === sum) {
          if(Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
            console.log(a + " < " + b + " < " + c);
            return a * b * c;
          }
        }
      }
    }
  }
}

describe('Project Euler #9 - Special Pythagorean triplet', function () {
  it('should return 60 for product of triplet with sum is 12', function () {
    assert.equal(60, findProductOfPythagoreanTriplet(12));
  });

  it('should return 31875000 for product of triplet with sum is 1000', function () {
    assert.equal(31875000, findProductOfPythagoreanTriplet(1000));
  });
});
