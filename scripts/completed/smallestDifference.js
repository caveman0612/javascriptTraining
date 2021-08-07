const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 135, 15, 17];

let answer = smallestDifference(arrayOne, arrayTwo)
console.log(answer);



function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => {return a - b})
  arrayTwo.sort((a, b) => {return a - b})
  // console.log(arrayOne, arrayTwo);
  let idx1 = 0;
  let idx2 = 0;
  let idx1S = Infinity;
  let idx2S = Infinity;
  let diff = Infinity;
  let temp;
  while (idx1 < arrayOne.length && idx2 < arrayTwo.length) {
    if (arrayOne[idx1] > arrayTwo[idx2]) {
      temp = arrayOne[idx1] - arrayTwo[idx2];
      if (temp < diff) {
        diff = temp;
        idx1S = idx1;
        idx2S = idx2;
      }
      idx2++;
    }
    else if (arrayOne[idx1] < arrayTwo[idx2]) {
      temp = arrayTwo[idx2] - arrayOne[idx1];
      if (temp < diff) {
        diff = temp;
        idx1S = idx1;
        idx2S = idx2;
      }
      idx1++;
    } else {
      return [arrayOne[idx1], arrayTwo[idx2]]
    }
  }
  return [arrayOne[idx1S], arrayTwo[idx2S]]
}