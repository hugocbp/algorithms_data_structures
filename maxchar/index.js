// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let count = {};
  for (let char of str) {
    if (count[char]) count[char]++;
    else count[char] = 1;
  }

  let maxChar = "";
  let maxCharCount = 0;

  for (let char in count) {
    if (count[char] > maxCharCount) {
      maxChar = char;
      maxCharCount = count[char];
    }
  }

  return maxChar;
}

module.exports = maxChar;
