console.log('Problem Solving Q:15 ');

/*  commonCharacters*/

/*  
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/

function commonCharacters(str1,str2) {
  let output=""
  str1=str1.replace(/\s/g,"").split("")
  console.log(str1);
  str2=str2.replace(/\s/g,"").split("")
  console.log(str2);
  str1.forEach((ele1,i)=>{
    console.log('ele1',ele1);
    
    str2.forEach((ele2,i)=>{
      console.log('ele2',ele2);

      if(ele1[i]===ele2[i]){
        console.log('done');
        
        return output+=ele1[i]
      }
    })
  })
}

/* 
Examples:
commonCharacters('abc', 'abc') // => 'abc'
commonCharacters('What is love?', "Baby don't hurt me") // => 'hatoe'
commonCharacters('Riding on a buffalo makes me more approachable','so what') // => 'oash'
*/