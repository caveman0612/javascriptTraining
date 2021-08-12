const array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]

console.log(kadanesAlgorithm(array));


function kadanesAlgorithm(array) {
    let maxSoFar = -Infinity;
    let maxHere = -Infinity;
    const len = array.length;
    for (let i = 0; i < len; i++) {
        if ((maxHere + array[i]) > array[i]) {
            maxHere = maxHere + array[i];
        }
        else {
            maxHere = array[i];
        }
        if (maxHere > maxSoFar) {
            maxSoFar = maxHere;
        }
    }
    return maxSoFar
  }