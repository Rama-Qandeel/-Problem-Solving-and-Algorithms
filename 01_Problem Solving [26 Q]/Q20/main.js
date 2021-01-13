console.log('Problem Solving Q: 20');

/* MaximumProductOfThree */

/*  
Write a function that accepts an array of integers and returns the Maximum product possible from three of those numbers.
*/

function MaximumProductOfThree(array) {
  sortArray=array.sort((a,b)=>b-a)
 maximumProduct=sortArray[0]*sortArray[1]*sortArray[2]
  return maximumProduct
}

/* 
Examples:
MaximumProductOfThree([2, 1, 3, 7]) // => 42
MaximumProductOfThree([0, 2, 3]) // => 0
MaximumProductOfThree([2, 3, 5]) // => 30
*/