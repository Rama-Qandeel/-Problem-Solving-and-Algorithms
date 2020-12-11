console.log('Problem Solving Q:16 ');

/* evenOccurrence */

/*  
Find the first item that occurs an even number of times in an array.
*/

function evenOccurrence(array) {
 let evenNumber=[]
 
 array.forEach((ele)=>{

    if(ele%2===0 && !evenNumber.length){

      return evenNumber.push(ele)
}
    
  })

  return evenNumber

}
/* 
Examples:
evenOccurrence([1,2,6,6]) // => 6
evenOccurrence([1,2,9,8,8,6,6]) // => 8 
evenOccurrence([1,9,7,3,6,6,8,9,9]) // => 6
*/