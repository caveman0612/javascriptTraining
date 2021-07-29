const array = [-5, -4, -3, -2, -1]

const answer = sortedSquaredArray(array)
console.log(answer);

function sortedSquaredArray(array) {
    let newArray = []
      for (let num of array) {
          newArray.push(num**2)
          console.log(num);
      }
      newArray.sort((a, b) => {return a - b;})
    return newArray;
  }