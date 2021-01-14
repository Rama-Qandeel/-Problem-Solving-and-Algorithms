console.log('Problem Solving Q:24 ');

/* findBubbleSort */

/*  
Bubble sort is considered the most basic sorting algorithm . It works by starting at the first element of an array and comparing it to the second element:
  • If the first element is greater than the second element, it swaps the two.
  • It then compares the second to the third, and the third to the fourth, and so on.
    - In this way, the largest values 'bubble' to the end of the array.
  • Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
*/

function findBubbleSort(array) {
  // for (let i = 0; i < array.length - 1; i++) {
  //   if (array[i] > array[i + 1]) {
  //     [array[i], array[i + 1]] = [array[i + 1], array[i]];
     
  //   }
  // }
  // return array;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        // swap the elements using es6 array destructuring
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

/* 
Examples:
findBubbleSort() // =>
findBubbleSort() // =>
findBubbleSort() // =>
*/