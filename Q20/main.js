console.log('Problem Solving Q: 20');

/* largestProductOfThree */

/*  
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
*/

function largestProductOfThree(array) {
//   let max=1
//   let maxArray=[]
// let copyArr=[...array]
//   for(i=0;i<copyArr.length;i++){
//     if(maxArray.length!==3){    
//       maxArray.push(Math.max(...array))
//       max*=Math.max(...array)
// let index=array.indexOf(Math.max(...array))
// array.splice(index,1)
// }
// }
array=array.sort((a,b)=>b-a)
let max=array[0]*array[1]*array[2]
return max
}

/* 
Examples:
largestProductOfThree([2, 1, 3, 7]) // => 42
largestProductOfThree([0, 2, 3]) // => 0
largestProductOfThree([2, 3, 5]) // => 30
*/