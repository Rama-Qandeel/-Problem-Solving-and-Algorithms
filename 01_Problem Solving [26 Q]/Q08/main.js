console.log('Problem Solving Q: 8');

/* Unique Item */

/*  
Write a function that returns the number of unique items in an array.
*/
//20min
function uniqueItems(arr) {
  // YOUR CODE HERE
  let first=[]
  arr.forEach(element=>{
    if (!first.includes(element)){
      first.push(element)
    }
    
  })

return first.length;
}

/* 
Examples:
uniqueItems([1, 1, 1, 1, 1]) // => 1
uniqueItems([3, 3, 5, 3]) // => 2
uniqueItems([5, 1, 1, 5, 1]) // => 2
uniqueItems([1, 6, 7]) // => 3
uniqueItems([1, 2, 3, 1, 2, 3]) // => 3
uniqueItems([5, 1, 2, 2, 1, 5]) // => 3
uniqueItems([5, 77, 1, 3]) // => 4
*/
