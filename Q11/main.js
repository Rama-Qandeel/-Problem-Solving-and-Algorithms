console.log('Problem Solving Q: 11');

/* Is Power Of Two */

/*  
Write a function that returns YES if a number is a power of 2, and NO otherwise.
*/

function isPowerOfTwo(num) {
  // YOUR CODE HERE
 // return v && !(v & (v - 1));
 //& bitwise operator compares each operand bitwise.
 //&& logical operator operates on boolean operands.
 var log_n = Math.log(n)/Math.log(2);
 // console.log('log_n : ',log_n); 
 let result=1
 for(i=1;i<=log_n;i++){
   result*=2
 }
 // console.log('result ',result);
 
 if(result===n)
 {
   return true
 }else
 {
   return false
 }
}

/* 
Examples:
isPowerOfTwo(0) // => 'NO'  
isPowerOfTwo(1) // => 'YES'  
// I am sure not a typo 1 => YES

isPowerOfTwo(2) // => 'YES'
isPowerOfTwo(4) // => 'YES'
isPowerOfTwo(6) // => 'NO'
isPowerOfTwo(11) // => 'NO'
isPowerOfTwo(16) // => 'YES'
isPowerOfTwo(18) // => 'NO'
isPowerOfTwo(24) // => 'NO'
isPowerOfTwo(25) // => 'NO'
isPowerOfTwo(28) // => 'NO'
isPowerOfTwo(32) // => 'YES'
isPowerOfTwo(63) // => 'NO'
isPowerOfTwo(64) // => 'YES'
isPowerOfTwo(1023) // => 'NO'
isPowerOfTwo(1024) // => 'YES'
*/
