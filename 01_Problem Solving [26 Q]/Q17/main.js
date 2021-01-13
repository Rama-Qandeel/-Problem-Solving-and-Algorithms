console.log('Problem Solving Q:17 ');

/* findFirstNonIterativedCharacter */

/*  
Given an arbitrary input string, return the first Non Iteratived character. For strings with all repeats, return 'sorry'
*/

function findFirstNonIterativedCharacter(str) {
  let obj={}
  str.split("").forEach(element => {
    if(obj[element]){
      obj[element]+=1
    }else{
      obj[element]=1
    }
  })
  // console.log(obj);
  for(const char in obj){
    if(obj[char]===1)   return char
  }
 
}

/* 
Examples:
findFirstNonIterativedCharacter('ABCDBIRDUP') // => 'A'
findFirstNonIterativedCharacter('ALABAMA') // => 'L'
findFirstNonIterativedCharacter('Uber for horses') // => 'U'
*/