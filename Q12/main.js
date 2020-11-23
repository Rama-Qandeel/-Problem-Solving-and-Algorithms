console.log("Problem Solving Q: 12");

/* Reverse Each Word */

/*  
Write a function that reverses the characters of every word of a sentence. Input sentences contain only English letter and space characters.
*/

function reverseEachWord(str) {
  // YOUR CODE HERE
  str = str.split(" ");
  reverseStr = "";
  for (i = 0; i <= str.length - 1; i++) {
    reverseStr += " ";
    let world = str[i];

    for (j = world.length - 1; j >= 0; j--) {
      // console.log('world ',world[j]);

      reverseStr = reverseStr + world[j];
    }
  }
  return reverseStr;
}

/* 
Examples:
reverseEachWord("This is a test") // => "sihT si a tset"
reverseEachWord("Lets code guys") // => "steL edoc syug"
reverseEachWord("Jouza admire Fried Chicken") // => "azuoJ erimda deirF nekcihC"
*/
