
function validateBst(tree, minRange=-Infinity, maxRange=Infinity) {
    if (tree === null) return true;
    if (tree.value < minRange || tree.value >= maxRange) return false;

    const isLeftValid = validateBst(tree.left, minRange, tree.value);
    return isLeftValid && validateBst(tree.right, tree.value, maxRange);
};


  module.exports = validateBst