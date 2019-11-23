// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let sign = n < 0 ? -1 : 1;
  n = Math.abs(n);
  let rev = 0;

  while (n / 10 !== 0) {
    rev *= 10;
    let digit = n % 10;
    rev += digit;
    n = Math.floor(n / 10);
  }

  return rev * sign;
}

module.exports = reverseInt;
