const array = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove = 2;

console.log(moveElementToEnd(array, toMove));



function moveElementToEnd(array, toMove) {
    const len = array.length;
    let idx = 0;
    let count = 0;
    while (idx < len) {
        if (array[count] == toMove) {
            array.push(array.splice(count, 1)[0]);
            idx++;
        }
        else {
            count++;
            idx++;
        }
    }
    return array
  }

//  array.push(array.splice(0, 2));
//  console.log(array);



