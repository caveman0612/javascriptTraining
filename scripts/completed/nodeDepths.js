function nodeDepths(root) {
    answers = []
    nodeDepthsHelper(tree, answers);
    return answers.reduce((a, b) => a + b);
  }

const nodeDepthsHelper = (root, answers, sum=0) => {
    answers.push(sum);
    sum++

    if (root.left && root.right) {
        nodeDepthsHelper(root.left, answers, sum);
        nodeDepthsHelper(root.right, answers, sum);
    }
    else if (root.right) {
        nodeDepthsHelper(root.right, answers, sum);
    }
    else if (root.left) {
        nodeDepthsHelper(root.left, answers, sum);
    }
}
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  tree = new BinaryTree(1);
  tree.left = new BinaryTree(2);
  tree.right = new BinaryTree(3);
  tree.left.left = new BinaryTree(4);
  tree.left.right = new BinaryTree(5);
  tree.right.left = new BinaryTree(6);
  tree.right.right = new BinaryTree(7);
  tree.left.left.left = new BinaryTree(8);
  tree.left.left.right = new BinaryTree(9);
//   tree.left.right.left = new BinaryTree(10);

console.log(nodeDepths(tree));