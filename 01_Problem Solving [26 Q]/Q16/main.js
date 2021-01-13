console.log('Problem Solving Q:16 ');

/* evenAppearance */

/*  
Find the first item that appear an even number of times in an array.
*/

function evenAppearance() {
  var storage = {};
  array.forEach(function (value, index) {
    storage[value] = storage[value] + 1 || 1;
  });
  for (var i = 0; i < array.length; i++) {
    var current = array[i];

    if (storage[current] % 2 === 0) {
      return current;
    }
  }
  return null;
}

/* 
Examples:
evenAppearance([1,2,6,6]) // => 6
evenAppearance([1,2,9,8,8,6,6]) // => 8 
evenAppearance([1,9,7,3,6,6,8,9,9]) // => 6
*/