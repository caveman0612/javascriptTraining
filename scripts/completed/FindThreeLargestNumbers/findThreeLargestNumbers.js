function findThreeLargestNumbers(array) {

    const threeBiggestNumbers = [-Infinity, -Infinity, -Infinity]

    for (let i = 0; i < array.length; i++) {

        if (array[i] >= threeBiggestNumbers[2]) {

            if (threeBiggestNumbers[1] > threeBiggestNumbers[0]) {
                threeBiggestNumbers[0] = threeBiggestNumbers[1];
            }
            if (threeBiggestNumbers[2] > threeBiggestNumbers[1]) {
                threeBiggestNumbers[1] = threeBiggestNumbers[2];
            }
            
            threeBiggestNumbers[2] = array[i]

        } else if (array[i] <= threeBiggestNumbers[2] && array[i] >= threeBiggestNumbers[1]) {

            if (threeBiggestNumbers[1] > threeBiggestNumbers[0]) {
                threeBiggestNumbers[0] = threeBiggestNumbers[1];
            }

            threeBiggestNumbers[1] = array[i]

        } else if (array[i] <= threeBiggestNumbers[1] && array[i] >= threeBiggestNumbers[0]) {
            threeBiggestNumbers[0] = array[i];
        }
    }
    return threeBiggestNumbers;
  }

  module.exports = findThreeLargestNumbers;