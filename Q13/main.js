console.log('Problem Solving Q: 13');

/* Largest Possible Sum */

/*  
Write a function that calculates the largest 
possible sum of any n consecutive numbers 
in an array arr of integers (where n ≥ 1).
*/

function largestPossibleSum(arr,n) {
  let largestSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;
  let currentN = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    currentSum += num;
    currentN += 1;
    if (currentN === n) {
      if (currentSum > largestSum) {
        largestSum = currentSum;
      }
      i = n - 1;
      currentN = 0;
      currentSum = 0;
    }
}
if (largestSum === Number.NEGATIVE_INFINITY) {
  return 0;
}
return largestSum;
}
/* 
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 1) // => 10
Examples:
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 2) // => 14 
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 3) // => 16 
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 4) // => 20 
largestPossibleSum([10, 2, 3, 4, 2, 6, 8], 5) // => 23 

largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 1) // => 10 
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 2) // => 14 
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 3) // => 22 
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 4) // => 26 
largestPossibleSum([5, 2, 9, 3, 10, 4, -7, 2, 6, 8], 5) // => 29 


largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 1) // => 10 
largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 2) // => 19 
largestPossibleSum([10, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 3) // => 22 
largestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 4) // => 32 
largestPossibleSum([5, 2, 10, 9, 3, 10, 4, -7, 2, 6, 8], 5) // => 36 
*/
