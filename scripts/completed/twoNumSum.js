const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 1;

const arraySort = [-4, -1, 1, 3, 5, 6, 8, 11]




// twoPointers(arraySort)

// function twoPointers (array) {
//     let start = 0;
//     let end = array.length - 1;
//     while (start <= end) {
//         let idx1 = array[start];
//         let idx2 = array[end];
//         if ((idx1 + idx2) == 1) {
//             console.log(idx1, idx2);
//             break;ç
//         }
//         else {
//             end--;
//         }
        
//     }
// }


const val = twoNumberSum(array, targetSum);
console.log(val);

function twoNumberSum(array, targetSum){
    const len = array.length
    array.sort((a, b) => {
        return a - b;
    });
    let Idx1 = 0;
    let Idx2 = len - 1;
    // console.log(array);

    while (Idx1 <= Idx2){
        let start = array[Idx1];
        let end = array[Idx2];
        
        if ((start + end) < targetSum) {
            Idx1++;
            
        } 
        else if ((start + end) > targetSum) {
            Idx2--;
        }
        else {
            return [start, end]
        }
    }

    return []
}
    

