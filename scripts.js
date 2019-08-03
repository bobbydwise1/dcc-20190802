/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Snapchat.

Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.
*/

//check a time interval if the follows min to max;
const checkArray = (arrayOne) => {
  if (arrayOne[0] <= arrayOne[1]) {
    return 1;
  } else {
    return 0;
  }
}

//make a function that compares if two intervals overlap;
const checkOverlap = (arrayOne, arrayTwo) => {
  if (!(checkArray(arrayOne)) || !(checkArray(arrayTwo))) {
    return 0;
  }
  return 1;
  if ((arrayOne[0] > arrayTwo[0]) || (arrayOne[0] > arrayTwo[1])) {
    return 1;
  }
  return 0;
}

let inter1 = [30,75];
let inter2 = [0,50];
let inter3 = [60,150];

console.log(checkOverlap(inter1,inter2))
console.log(checkOverlap(inter2,inter3))

$(document).ready(function() {
  $('#output-section-1').text(JSON.stringify(1));
  $('#output-section-2').text(JSON.stringify(2));
});
