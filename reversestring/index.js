// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let rev = [],
    start = 0,
    end = str.length - 1;

  while (start < end) {
    rev[start] = str[end];
    rev[end--] = str[start++];
  }

  return rev.join("");
}

module.exports = reverse;
