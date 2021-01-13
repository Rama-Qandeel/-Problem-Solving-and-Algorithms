console.log('Problem Solving Q: 25');

/*array check   */

/*  
Write a JavaScript function to check whether an `input` is an array or not.
*/


function is_array(input) {
//   if(Array.isArray(input)){
//   return true
// }else{
//   return false
// }
// console.log(toString.call(input));

if (toString.call(input) === "[object Array]")
return true;
return false;
}

/* 
Examples:
array('w3resource') => false
array ([1, 2, 4, 0]) // => true

*/