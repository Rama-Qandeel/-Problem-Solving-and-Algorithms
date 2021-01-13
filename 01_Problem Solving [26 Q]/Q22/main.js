console.log('Problem Solving Q: 22');

/* characterRecurrence */

/*  
 Write a function that takes as its input a string and returns an array of 
 arrays as shown below sorted in descending order by recurrence and then by 
 ascending order by character.
*/

function characterRecurrence(str) {
let result=[]
let obj={}
str.split("").forEach(element => {
  if(obj[element]){
    obj[element]+=1
  }else{
    obj[element]=1
  }
})
for(const char in obj){
  result.push([char,obj[char]])
}

return result
}

/* 
Examples:
characterRecurrence('mississippi') // =>  [ ['i', 4],['s', 4],  ['p', 2],  ['m', 1]  ]
characterRecurrence('miaaiaaippi') // =>  [ ['a', 4],  ['i', 4],  ['p', 2],  ['m', 1] ]
*/