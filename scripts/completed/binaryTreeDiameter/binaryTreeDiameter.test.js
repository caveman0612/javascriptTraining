const { BinaryTree, binaryTreeDiameter } = require('./binaryTreeDiameter')

describe("main tests", () => {
    test('should create BT', () => {
        const bt = new BinaryTree(1);
        expect(bt.value).toBe(1);
    })

    test("binary tree diameter for 3 node tree", () => {
        const bt = new BinaryTree(1);
        bt.right = new BinaryTree(2);
        bt.left = new BinaryTree(3);
        bt.left.left = new BinaryTree(7);
        bt.left.left.left = new BinaryTree(8);
        bt.left.left.left.left = new BinaryTree(9);
        bt.left.right = new BinaryTree(4);
        bt.left.right.right = new BinaryTree(5);
        bt.left.right.right.right = new BinaryTree(6);

        // console.log(bt);
        expect(binaryTreeDiameter(bt)).toEqual(6);
    })
    
})