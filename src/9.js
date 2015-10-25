var expect = require('chai').expect;

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
    expect(findProductOfPythagoreanTriplet(12)).to.equal(60);
  });

  it('should return 31875000 for product of triplet with sum is 1000', function () {
    expect(findProductOfPythagoreanTriplet(31875000)).to.equal(1000);
  });
});
