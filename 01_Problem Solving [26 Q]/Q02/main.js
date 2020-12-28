console.log('Problem Solving Q: 2 ');

/* Longest Word 2 */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
*/
const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
function longestWord_2(sen) {
  // YOUR CODE HERE
  sen=sen.replace(punctuation,"").split(" ")
  console.log('sen :',sen);
let longWord=""
sen.forEach(element => {
  if(longWord.length<element.length){
longWord=element
  }
  
});
  
return longWord
}

/* 
Examples:
longestWord_2('lol!- time.'); // => 'time'
longestWord_2('I** love, cats'); // => 'love'
longestWord_2('coding&& is awesome'); // => 'awesome'
longestWord_2('hello|| world'); // => 'hello'
*/
