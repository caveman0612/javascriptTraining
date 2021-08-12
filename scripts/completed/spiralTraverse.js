const array = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
]

console.log(spiralTraverse(array));

function spiralTraverse(array) {
    const answer = [];
    let startRow = 0, endRow = array.length -1;
    let startCol = 0, endCol = array[0].length - 1;

    while (startRow <= endRow && startCol <= endCol) {
        for(let i = startCol; i <= endCol; i++){
            answer.push(array[startRow][i])
        }
        for(let i = startRow + 1; i <= endRow; i++) {
            answer.push(array[i][endCol])
        }
        for (let i = endCol - 1; i >= startCol; i--) {
            if (startRow === endRow) break;
            answer.push(array[endRow][i])
        }
        for (let i = endRow - 1; i > startRow; i--) {
            if (startCol === endCol) break;
            answer.push(array[i][startCol])
        }
        startCol++;
        endCol--;
        startRow++;
        endRow--;
    }

    return answer
  }