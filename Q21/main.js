console.log('Problem Solving Q: 21');

/* onlyUnique */

/*  
Given a string, remove any characters that are not unique from the string.
*/

function onlyUnique(str) {
let uniqueChar=""
for(i=0;i<str.length;i++){
  let char = str[i];  
  if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
    uniqueChar+=char;
  }
}
return uniqueChar
}

/* 
Examples:
onlyUnique('hello there') // => 'o tr'
onlyUnique('xyz') // => 'xyz'
onlyUnique('iiii') // => ''
*/