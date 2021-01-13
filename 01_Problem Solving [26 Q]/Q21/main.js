console.log('Problem Solving Q: 21');

/* removeNotUnique */

/*  
Given a string, delete any characters that are not unique from the string.
*/

function removeNotUnique(str) {
  let result=""
let obj={}
str.split("").forEach(element => {
  if(obj[element]){
    obj[element]+=1
  }else{
    obj[element]=1
  }
})
console.log(obj);

for(const char in obj){
  if(obj[char]===1)  result+=char
}
return result
}

/* 
Examples:
removeNotUnique('hello there') // => 'o tr'
removeNotUnique('xyz') // => 'xyz'
removeNotUnique('iiii') // => ''
*/