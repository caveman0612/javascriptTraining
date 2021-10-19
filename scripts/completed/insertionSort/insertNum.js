function insertNum(array, idx) {
    let current = idx;
    let higher = idx + 1;

    if (array[higher] > array[current]) {
        return array;
    } else {
        while (array[current] > array[higher]) {
            let temp = array[higher];
            array[higher] = array[current];
            array[current] = temp;
            current--;
            higher--;
        }
 
    }
      return array;
    }
  
  
  module.exports = insertNum