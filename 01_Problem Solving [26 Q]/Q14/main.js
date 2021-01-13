console.log('Problem Solving Q:14 ');

/* ArrayCenter */

/*  
Given an array of negative/positive integers, return the element in the middle position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/


function ArrayMiddle(arr) {
let mid=Math.floor(arr.length/2)
let even=arr.length%2===0
return (even?((arr[mid]+arr[mid-1])/2):(arr[mid]))
}

/* 
Examples:
ArrayCenter([200,5,100]) // => 5
ArrayCenter([2,3,2,3,2]) // => 2
ArrayCenter([2,3]) // => 2.5
*/