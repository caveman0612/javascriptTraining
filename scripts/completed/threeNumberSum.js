
const array = [12, 3, 1, 2, -6, 5, -8, 6]
const targetSum = 0;

// [-8,2,6][-8,3,5][-6,1,5]

let answer = threeNumberSum(array, targetSum);
console.log(answer);

function threeNumberSum(array, targetSum) {

    // const sortedArray = 
    array.sort((a, b) => {return a - b});
    const len = array.length;
    let answers = [];
    for (let i = 0; i < (len - 2); i++) {
        let lIdx = i + 1;
        let rIdx = len - 1;
        let currentValue = array[i];
        while (lIdx < rIdx) {
            let left = array[lIdx];
            let right = array[rIdx];
            if ((currentValue + left + right) == targetSum) {
                answers.push([currentValue, left, right])
                lIdx++;
                rIdx--;
            }
            else if ((currentValue + left + right) < targetSum) {
                lIdx++;
            }
            else if ((currentValue + left + right) > targetSum) {
                rIdx--;
            }
        }
    }
    return answers
  }