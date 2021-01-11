// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    fibonacciSeries=[]
    fibonacciSeries[0] = 0;
    fibonacciSeries[1] = 1; 
       for(i=2;i<=n;i++){
        fibonacciSeries[i] = fibonacciSeries[i - 2] + fibonacciSeries[i - 1]; 
       }
    console.log('fibonacciSeries',fibonacciSeries);
    return fibonacciSeries[fibonacciSeries.length-1]
}

module.exports = fib;
