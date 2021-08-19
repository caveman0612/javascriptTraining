const intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9,10]];
const intervals1 = [[1, 3], [2, 8], [9, 10]]
const intervals2 = [[100, 105], [1, 104]]

// answer = [[1,2], [3, 8], [9, 10]]

console.log(mergeOverlappingIntervals(intervals1));


function mergeOverlappingIntervals(array) {
    array.sort((a, b) => a[0] - b[0])

    const mergedArray = [];
    let currentSection = array[0];
    mergedArray.push(currentSection);

    for (const nextSection of array) {
        console.log("1", mergedArray);
        const [_, startEnding] = currentSection;
        const [nextStarting, nextEnding] = nextSection;
        if (startEnding >= nextStarting) {
            currentSection[1] = Math.max(startEnding, nextEnding)
            console.log("if", mergedArray);
        } 
        else {
            currentSection = nextSection;
            mergedArray.push(currentSection);
            console.log("else", mergedArray);

        }
        console.log("2", mergedArray);
    }
    return mergedArray
  }


// function mergeOverlappingIntervals(array) {
//     const sortedArray = array.sort((a, b) => a[0] - b[0])
//     const answer = [];
    
//     let index = 0;
//     let counter = 0;

//     while (true) {
//         let len = array.length;
//         console.log(len, counter);
//         if (counter === len - 1) {
//             break;
//         }
//         const [currentStart, currentEnd] = sortedArray[index];
//         const [nextStart, nextEnd] = sortedArray[index + 1];
//         console.log(index, counter);
//         if (currentEnd >= nextStart) {
//             const temp = [currentStart, Math.max(currentEnd, nextEnd)];
//             sortedArray[index] = temp;
//             sortedArray.splice(index + 1, 1)
//             counter++;
//         } else {
//             index++;
//         }
//     }
//     return sortedArray;
//   }


// function mergeOverlappingIntervals(array) {
//     const copyArray = Array.from(array);
//     const sortedArray = copyArray.sort((a, b) => {return a[0] - b[0]})
//     let index = 0;
//     while (true) {
//         let len = sortedArray.length;
//         let first = sortedArray[index];
//         let second = sortedArray[index + 1];
        
//         if (first[1] >= second[0]) {
//             first[1] = second[1];
//             sortedArray.splice((index + 1), 1)
//         } else {
//             index++;
//         }
//         // console.log(index, len);

//         if (index === (len - 1)) {
//             // console.log("if");
//             break;
//         }
        
//     }
//     return sortedArray;
//   }