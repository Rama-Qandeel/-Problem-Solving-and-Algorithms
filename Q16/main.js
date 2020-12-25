console.log('Problem Solving Q:16 ');

/* evenOccurrence */

/*  
Find the first item that occurs an even number of times in an array.
*/

function evenOccurrence(array) {
let even={}

array.forEach((ele,i)=>{
    if(even[ele]){
      even[ele]+=1
    }else{
      even[ele]=1
    }
  
})
for(let char in even){
  if (even[char]%2===0)
  {
    return char
  }
}



}
/* 
Examples:
evenOccurrence([1,2,6,6]) // => 6
evenOccurrence([1,2,9,8,8,6,6]) // => 8 
evenOccurrence([1,9,7,3,6,6,8,9,9]) // => 6
*/