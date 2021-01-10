// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  str.split("").forEach((char) => {
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  });
  let max = Number.NEGATIVE_INFINITY;
  let maxChar = "";
  for (const char in obj) {
    if (obj[char] >= max) {
      max = obj[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
