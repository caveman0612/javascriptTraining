// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, level=1) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            sum += productSum(array[i], level + 1);
        } else {
            sum += array[i];
            console.log(`notarray:::array[i]: ${array[i]} sum: ${sum} level: ${level}`);
        }
    }
    return sum * level;
  }

  module.exports = productSum