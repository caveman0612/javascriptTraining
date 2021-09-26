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
  tree.left.right.left = new BinaryTree(10);

  branchSums(tree);
  
  function branchSums(root) {
    const answers = [];
    branchSumsHelper(root, answers)
    return answers
  }

  function branchSumsHelper(root, answers, sum=0) {
      sum += root.value;
      if (!root.left && !root.right) {
          answers.push(sum);
      }else if (root.left && root.right){
        branchSumsHelper(root.left, answers, sum);
        branchSumsHelper(root.right, answers, sum);
      } else if (root.left) {
        branchSumsHelper(root.left, answers, sum);
      } else if (root.right) {
          branchSumsHelper(root.right, answers, sum);
      }
  }