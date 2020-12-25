console.log('Problem Solving Q: 22');

/* characterFrequency */

/*  
 Write a function that takes as its input a string and returns an array of 
 arrays as shown below sorted in descending order by frequency and then by 
 ascending order by character.
*/

function characterFrequency(str) {
 const output={}
 const result=[]
 for(const char of str){
  output[char]=output[char]+1||1
 }
 for(const key in output){
  let temp=[]
  temp[0]=key
  temp[1]=output[key]
  result.push(temp)
 }
 return result
}

/* 
Examples:
characterFrequency('mississippi') // =>  [ ['i', 4],['s', 4],  ['p', 2],  ['m', 1]  ]
characterFrequency('miaaiaaippi') // =>  [ ['a', 4],  ['i', 4],  ['p', 2],  ['m', 1] ]
*/