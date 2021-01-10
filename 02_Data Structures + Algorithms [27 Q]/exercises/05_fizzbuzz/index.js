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
    console.log('n',n);
    

  for(i=0;i<n;i++){
 if((i+1)===0){
  console.log(i+1);
 }
  else  if((i+1)%3===0 &&( i+1)%5===0)
  {
      console.log('fizzBuzz');
      
    
  }
 else if((i+1)%3===0 )
  {
    console.log('fizz');

      
  }
else  if((i+1)%5===0){
    console.log('Buzz');


  }
  else{
    console.log(i+1);

   
  }
}

}

module.exports = fizzBuzz;
