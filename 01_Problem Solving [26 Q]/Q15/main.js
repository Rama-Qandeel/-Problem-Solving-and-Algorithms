console.log('Problem Solving Q:15 ');

/*  jointCharacters*/

/*  
Write a function that accepts two strings , and returns only the characters that are joint on both strings.
Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/

function jointCharacters(str1,str2) {
  let result = '';
  for (let ch of string1) {
    if (string2.includes(ch) && !result.includes(ch) && ch !== ' ') {
      result += ch;
    }
  }
  return result;
}

/* 
Examples:
jointCharacters('abc', 'abc') // => 'abc'
jointCharacters('What is love?', "Baby don't hurt me") // => 'hatoe'
jointCharacters('Riding on a buffalo makes me more approachable','so what') // => 'oash'
*/