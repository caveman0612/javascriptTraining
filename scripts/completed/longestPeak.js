const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
// answer = 6 [0, 10, 6, 5, -1, -3]

console.log(longestPeak(array));

function longestPeak(array) {
    const end = array.length - 1;
    const peaks = [];
    const lengths = [];
    // if (array.length == 0) {
    //     return 0
    // }
    for (let i = 1; i < end; i++) {
        if (array[i] > array[i-1] && array[i] > array[i + 1]) {
            peaks.push(i)
        }
    }
    for (const peak of peaks) {
        lengths.push(lengthOfPeaks(array, peak))
    }
    if (lengths.length == 0) {
        return 0
    }
    return Math.max(...lengths)
  }

  function lengthOfPeaks(array, index) {
      let counter = 3;
      let sPointer = index - 1;
      let lPointer = index + 1;
      while (true) {
          if (array[sPointer - 1] < array[sPointer]) {
              counter++;
              sPointer--;
          } else {
              break;
          }
      }
      while (true) {
          if (array[lPointer] > array[lPointer + 1]) {
              counter++;
              lPointer++;
          } else {
              break;
          }
      }
      return counter
  }