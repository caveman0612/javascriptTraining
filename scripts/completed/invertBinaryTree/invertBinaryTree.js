function invertBinaryTree(tree) {
    if (tree === null) return;
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
    let temp = tree.left;
    tree.left = tree.right;
    tree.right = temp;

    return tree
}
  
  // This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

module.exports = { invertBinaryTree, BinaryTree }