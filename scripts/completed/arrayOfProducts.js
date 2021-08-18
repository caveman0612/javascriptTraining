const array = [5, 1, 4, 2]

console.log(arrayOfProducts(array)); 

function arrayOfProducts(array) {
    const len = array.length;
    const leftArray = [];
    const rightArray = Array.from(array);
    const answer = [];

    leftArray.push(array[0]);
    for (let i = 1; i < len; i++) {
        let preSum = leftArray[i - 1];
        let curSum = preSum * array[i];
        leftArray.push(curSum)
    }
    for (let i = len - 2; i >= 0; i--) {
        let preSum = rightArray[i + 1];
        let curSum = preSum * array[i];
        rightArray[i] = curSum;
    }

    answer.push(rightArray[1])
    for (let i = 1; i <= len - 2; i++) {
        let leftSum = leftArray[i - 1];
        let rightSum = rightArray[i + 1];
        answer.push(leftSum * rightSum);
    }
    answer.push(leftArray[len - 2])
    return answer
  }