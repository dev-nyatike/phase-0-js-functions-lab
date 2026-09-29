function calculateTax(amount) {
  return amount * 0.1;
}

function convertToUpperCase(str) {
  return str.toUpperCase();
}

function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice * (1 - discountPercentage / 100);
}

module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};