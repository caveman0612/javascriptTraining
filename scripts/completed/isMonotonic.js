const array = [-1, -5, -10, -1100, -1101, -1102, -99001]

console.log(isMonotonic(array));

function isMonotonic(array) {
    const len = array.length;
    const cloneArray = Array.from(array);
    const answer = [];
    if (array[0] <= array[len-1]) {
        cloneArray.sort((a, b) => {return a -b});
        for (let i = 0; i < len; i++) {
            if (array[i] == cloneArray[i]) {
                answer.push(1);
            }
            else {
                answer.push(0)
            }
        }
    }
    else {
        cloneArray.sort((a, b) => {return b - a});
        for (let i = 0; i < len; i++) {
            if (array[i] == cloneArray[i]) {
                answer.push(1);
            }
            else {
                answer.push(0)
            }
        }
    }
    return (len == answer.reduce((a, b) => a + b, 0))
  }