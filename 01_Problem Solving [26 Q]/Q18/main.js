console.log('Problem Solving Q:18 ');

/*  findFactorial*/

/*  
Given an integer, n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1
*/

function factorial(n) {
  
  if(n===1 || n===0){
    return 1;
  }
  return n*factorial(n-1)
}


/* 
Examples:
findFactorial(1) // => 1
findFactorial(3) // => 6
findFactorial(4) // => 24
*/