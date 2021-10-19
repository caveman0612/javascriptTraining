const { inOrderTraverse, preOrderTraverse, postOrderTraverse } = require('./bstTraversal');

class BST {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const bst = new BST(10)
bst.left = new BST(5)
bst.right = new BST(15)
bst.left.left = new BST(2)
bst.left.right = new BST(5);

describe("inOrderTraverse", () => {
    test('should return true', () => {

        expect(inOrderTraverse(bst, [])).toEqual([2, 5, 5, 10, 15]);
    })
})


describe("preOrderTraverse", () => {
    test('should return true', () => {

        expect(preOrderTraverse(bst, [])).toEqual([10, 5, 2, 5, 15]);
    })
})


describe("postOrderTraverse", () => {
    test('should return true', () => {

        expect(postOrderTraverse(bst, [])).toEqual([2, 5, 5, 15, 10]);
    })
})