const {invertBinaryTree, BinaryTree} = require('./invertBinaryTree')

describe ("Binary Tree tests", () => {

    test('should create Binary tree', () => {
        const BT = new BinaryTree(1)
        expect(BT.value).toBe(1)
    });

    test('should make binary tree children', () => {
        const BT = new BinaryTree(1)
        BT.left = new BinaryTree(2)
        BT.right = new BinaryTree(3)
        expect(BT.left.value).toBe(2)
        expect(BT.right.value).toBe(3)
    });
    
});

describe ('inverting the tree', () => {
    test('first level' , () => {
        const BT = new BinaryTree(1)
        BT.left = new BinaryTree(2)
        BT.right = new BinaryTree(3)
        BT.left.left = new BinaryTree(4)
        invertBinaryTree(BT)
        expect(BT.left.value).toBe(3)
        expect(BT.right.value).toBe(2)
    })

    test('lower levels' , () => {
        let BT = new BinaryTree(1)
        BT.left = new BinaryTree(2)
        BT.right = new BinaryTree(3)
        BT.left.left = new BinaryTree(4)
        BT.right.right = new BinaryTree(7)
        BT = invertBinaryTree(BT)
        expect(BT.left.value).toBe(3)
        expect(BT.right.value).toBe(2)
        expect(BT.right.right.value).toBe(4)
        expect(BT.left.left.value).toBe(7)
    })
})