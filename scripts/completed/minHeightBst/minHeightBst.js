function minHeightBst(array) {
    return minHeightBstHelper(array, null, 0, array.length - 1);
    }

function minHeightBstHelper (array, bst, startIdx, endIdx) {
    if (startIdx > endIdx) return 
    let middleIdx = Math.floor((endIdx + startIdx) / 2);
    let valueToInster = array[middleIdx];
    if (bst === null) bst = new BST(valueToInster);
    else bst.insert(valueToInster);

    minHeightBstHelper (array, bst, startIdx, middleIdx -1)
    minHeightBstHelper (array, bst, middleIdx + 1, endIdx)
    return bst
}
  
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
}

    insert(value) {
        if (value < this.value) {
        if (this.left === null) {
            this.left = new BST(value);
        } else {
            this.left.insert(value);
        }
        } else {
        if (this.right === null) {
            this.right = new BST(value);
        } else {
            this.right.insert(value);
        }
        }
    }
}

  module.exports = {BST, minHeightBst}