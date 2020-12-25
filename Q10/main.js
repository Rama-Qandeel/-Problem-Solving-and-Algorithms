console.log("Problem Solving Q: 10");

/* Times Of Most Freq Char */

/*  
Write a function that returns the number of occurrences of the most frequent character in a sentence.
*/

function timesOfMostFreqChar(sentence) {
  let obj = {};
  sentence.split("").forEach((char) => {
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  });
  console.log(obj);
  let max = Number.NEGATIVE_INFINITY;
  for (const char in obj) {
    if (obj[char] > max) {
      max = obj[char];
    }
  }
  return max;
}

/* 
Examples:
timesOfMostFreqChar('hello world') // => 3
answer1('hello world lol') // => 5
answer1('hello world lol woooow') // => 7
answer1('hello world lol wow www.com') // => 6
*/
