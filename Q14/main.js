console.log('Problem Solving Q:14 ');

/* ArrayMiddle */

/*  
Given an array of negative/positive integers, return the element in the center position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

function ArrayMiddle(arr) {
let avgArray=0;
if(arr.length%2===0){
  arr.forEach((ele)=>{
     return avgArray+=ele;
  })
  return avgArray/arr.length
}else{  
  avgArray=arr[(arr.length/2+0.5)-1]
  return avgArray;
}
}

/* 
Examples:
ArrayMiddle([200,5,100]) // => 5
ArrayMiddle([2,3,2,3,2]) // => 2
ArrayMiddle([2,3]) // => 2.5
*/