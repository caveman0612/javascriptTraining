const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]


const val = isValidSubsequence(array, sequence);
console.log(val);

function isValidSubsequence(array, sequence) {
    const lenL = array.length;
    const lenS = sequence.length;
    let mainCount = 0;
    let seqCount = 0;
    while(mainCount <= lenL) {
        // console.log(mainCount, seqCount, lenL, lenS);
        if (array[mainCount] == sequence[seqCount]) {
            mainCount++;
            seqCount++;
        }
        else {
            mainCount++;
        }
        
    }
    console.log(seqCount, lenS);
    if (seqCount >= lenS) {
        return true;
    } 
    else {
        return false;
    }
  }