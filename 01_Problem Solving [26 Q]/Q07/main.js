console.log('Problem Solving Q: 7');

/* Sum Array Odd */

/*  
Write a function that returns the sum of odd numbers in an array.
*/

function SumOddNumber(arr) {
 if (arr.length===0){
   return "please enter numbers in array"
 }
let sumOdd=0;
arr.forEach(element => {
  if(element%2!==0){
    sumOdd+=element
  }
});
return sumOdd
}

/* 
Examples:
SumOddNumber([1, 2, 3, 4, 5]) // => 9
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
*/
