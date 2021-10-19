// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
function binaryTreeDiameter(tree) {
    let answer = binaryTreeDiameterHelper(tree);
    // console.log(answer);
    return answer["diameter"];
}

function binaryTreeDiameterHelper(tree) {
    if (tree === null) return {"diameter": 0, "height": 0};

    let leftSection = binaryTreeDiameterHelper(tree.left);
    let rightSection = binaryTreeDiameterHelper(tree.right);

    const diameter = Math.max(leftSection["diameter"], rightSection["diameter"], (leftSection["height"] + rightSection["height"]))
    const height = Math.max(leftSection["height"], rightSection["height"]) + 1;
    // console.log(leftSecion, rightSection, diameter, height);

    return {"diameter": diameter, "height": height}
}

module.exports = { BinaryTree, binaryTreeDiameter }