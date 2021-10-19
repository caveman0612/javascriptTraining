function maxSubsetSumNoAdjacent(array) {
  if (array.length == 0) return 0;

  const newArray = Array.from(array);
  let max = -Infinity;

  if (newArray[0] > newArray[1]) newArray[1] = newArray[0];
  for (let i = 2; i < newArray.length; i++) {
    if (newArray[i - 1] > newArray[i - 2] + newArray[i]) {
      newArray[i] = newArray[i - 1];
    } else {
      newArray[i] = newArray[i - 2] + newArray[i];
    }
  }

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > max) max = newArray[i];
  }

  return max;
}

module.exports = maxSubsetSumNoAdjacent;
