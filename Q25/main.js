console.log('Problem Solving Q: 25');

/*is_array   */

/*  
Write a JavaScript function to check whether an `input` is an array or not.
*/

function is_array(input) {
  if(Array.isArray(input)){
  return true
}else{
  return false
}
}

/* 
Examples:
is_array('w3resource') => false
is_array ([1, 2, 4, 0]) // => true

*/