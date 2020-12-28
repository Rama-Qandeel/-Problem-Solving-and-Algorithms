// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count=0
    str=str.split("")
    for(i=0;i<str.length;i++){
        if(str[i]==="a"
            || str[i]==="e"
            ||str[i]==="i"||
            str[i]==="o"||
            str[i]==="u"||
            str[i]==="A"
            || str[i]==="E"
            ||str[i]==="I"||
            str[i]==="O"||
            str[i]==="U"){
                count+=1
            }
    }
    return count
}

module.exports = vowels;
