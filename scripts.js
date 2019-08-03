/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Snapchat.

Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.
*/

/*
If two different time intervals overlap, you need a seperate room for each;

Determine what is considered overlap;

Check overlaps, in a loop, all permutations.

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
    console.log('unlegal arrays')
    return 0;
  }
  if ((arrayOne[0] > arrayTwo[1]) || (arrayOne[1] > arrayTwo[0])) {
    console.log('it does overlap');
    return 1;
  }
  console.log('does not overlap')
  return 0;
}

//create a function that counts the amount of overlaps in all intervals;
const checkAll = (arrayOfarrays) => {
  let answer = 0;
  for (i=0; i<arrayOfarrays.length; i++) {
    let now = arrayOfarrays[i];
    for (j=i+1; j<arrayOfarrays.length; j++) {
      if (checkOverlap(now,arrayOfarrays[j])) {
        answer++;
      }
    }
  }
  return answer;
}

$(document).ready(function() {
  let inter1 = [30,75];
  let inter2 = [0,50];
  let inter3 = [60,150];
  let inter4 = [0,180];

  console.log('compare array1 and array2 = ', checkOverlap(inter1,inter2))
  console.log('compare array2 and array3 = ', checkOverlap(inter2,inter3))
  console.log('compare array1 and array3 = ', checkOverlap(inter1,inter3))
  console.log('checkall = ', checkAll([inter1,inter2,inter3,inter4]))

  $('#output-section-1').text(JSON.stringify(1));
  $('#output-section-2').text(JSON.stringify(2));
});
