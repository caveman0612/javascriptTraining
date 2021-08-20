const array = [7, 6, 4, -1, 1, 2];
const targetSum = 16;

const array1 = [-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetSum1 = 4;

console.log(fourNumberSum(array1, targetSum1));



function fourNumberSum(array, targetSum) {
    array.sort((a, b) => a - b)
    const len = array.length;
    const answer = [];
    for (let i = 0; i < len - 3; i++) {
        for (let j = i + 1; j < len - 2; j++) {
            let first = array[i];
            let second = array[j];
            let thirdIdx = j + 1;
            let lastIdx = len - 1;
            while (thirdIdx < lastIdx) {
                let third = array[thirdIdx];
                let last = array[lastIdx];
                // console.log(i, j, thirdIdx, lastIdx);
                // console.log([first, second, third, last]);
                if ((first + second + third + last) > targetSum) {
                    lastIdx--;
                } else if ((first + second + third + last) < targetSum) {
                    thirdIdx++;
                } else {
                    answer.push([first, second, third, last])
                    thirdIdx++;
                    lastIdx--;
                }
            }
        }
    }
    return answer
  }