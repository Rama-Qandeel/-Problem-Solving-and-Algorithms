// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
for(i=0;i<=n;i++){
    // console.log('n',i);
    if(i%3===0 && i%5===0)
  {
      console.log('fizzBuzz');
      
      return "fizzBuzz"
  }
 else if(i%3===0 )
  {
    console.log('fizz');

      return "fizz"
  }
else  if(i%5===0){
    console.log('Buzz');

    return "buzz"
  }
  else{
    console.log(i);

      return i
  }
}

}

module.exports = fizzBuzz;
