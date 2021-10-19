const insertNum = require("./insertNum")



function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    insertNum(array, i);
  }
  return array;
}

  module.exports = insertionSort

