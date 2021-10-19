function selectionSort(array) {
    let currentSortedIdx = 0;

    while (currentSortedIdx < array.length) {
        let smallestNumIdx = currentSortedIdx;
        let smallestNum = Infinity;
        for (let i = currentSortedIdx; i < array.length; i++) {
            if (array[i] < smallestNum) {
                smallestNum = array[i]
                smallestNumIdx = i;
            }
        }
        swap(currentSortedIdx, smallestNumIdx, array)
        currentSortedIdx++;
    }
    
    return array;
  }

  const swap = (currentSortedIdx, smallestNumIdx, array) => {
    let temp = array[smallestNumIdx];
    array[smallestNumIdx] = array[currentSortedIdx];
    array[currentSortedIdx] = temp;
    return array
  }

  module.exports = selectionSort