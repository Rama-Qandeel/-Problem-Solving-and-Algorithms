// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
//input 2 string
/*
1-remove spaces or punctuation
2-cheak lenght of 2 string
3-check the char 
*/
//output boolean
var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ " "]/g;
stringA=stringA.replace(regex,"").toUpperCase().split("")
stringB=stringB.replace(regex,"").toUpperCase().split("")
let isAnagrams=true
// console.log('stringt',stringA);
// console.log('stringt',stringB);
if(stringA.length===stringB.length){
   stringA.forEach((char)=>{
     if(stringB.indexOf(char)===-1){
        isAnagrams=false
     } 
   })
}else{
    isAnagrams=false
   }
return isAnagrams
}





module.exports = anagrams;
