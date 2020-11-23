console.log("Problem Solving Q: 9");

/* Longest Sequence */

/*  
Write a function that returns the length of the longest sequence of 1s in an array of 1s and 0s.
*/

function longestSequence(arr) {
  // YOUR CODE HERE
  let count = 0;
  let arrcount = [];
  arr.forEach((element) => {
    if (1 === element) {
      return (count += 1);
    } else {
      arrcount.push(count);
      count = 0;
    }
  });
  // let result=(Math.max(...arrcount))
  let result = Math.max(...arrcount);
  // console.log('result',result);

  if (result) {
    return result;
  } else {
    return "There is no one sequenced";
  }
}

/* 
Examples:
longestSequence([0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1]) // => 2
longestSequence([1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1]) // => 3
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1]) // => 5
longestSequence([1, 0, 0, 1]) // => 1
longestSequence([0, 0, 0, 0]) // => 'There is no one sequenced'
*/
