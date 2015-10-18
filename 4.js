var assert = require("assert");

function isPalindrome(value) {
  var s = value.toString();

  var reversed = s.split('').reverse().join('');

  return s === reversed;
}

function getPalindrome(digitsCount, threshold) {
  var start = parseInt(Array(digitsCount + 1).join("9").toString());
  var end = parseInt(Array(digitsCount).join("9").toString());

  var palindrome = 0;

  for (var i = start; i > end; i--) {
    for (var j = start; j > end; j--) {
      var value = i * j;
      if (value < threshold) {
        break;
      }
      var result = isPalindrome(value);

      if(result && value > palindrome) {
        palindrome = value;
      }
    }
  }

  return palindrome;
};

describe('Project Euler #4 - Largest palindrome product', function () {
  describe('isPalindrome', function() {
    it('should return true for 123321', function() {
      assert.equal(true, isPalindrome(123321));
    });

    it('should return false for 123321123', function() {
      assert.equal(true, isPalindrome(123321));
    });

    it('should return true for racecar', function() {
      assert.equal(true, isPalindrome("racecar"));
    });

    it('should return false for tesla', function() {
      assert.equal(false, isPalindrome("tesla"));
    });
  });

  describe('getPalindrome', function() {
    it('should return 9009 for the product of two 2-digit numbers', function () {
      assert.equal(9009, getPalindrome(2, 9000));
    });

    it('should return 906609 for the product of two 3-digit numbers', function() {
      assert.equal(906609, getPalindrome(3, 900000));
    })

    it('should return 99000099 for the product of two 4-digit numbers', function() {
      assert.equal(99000099, getPalindrome(4, 90000000));
    })
  });
});
