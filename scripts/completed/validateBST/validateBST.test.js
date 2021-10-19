const BST = require('./BST')
const validateBst = require('./validateBST');

describe('BST testing', () => {
    test('should create BST', () => {
        const bst = new BST(10);
        expect(bst).toBeTruthy()
    })
})

describe('validate BST function', () => {
    test('should validate to true', () => {
        const bst = new BST(10);
        expect(validateBst(bst)).toBeTruthy()
    })

    test('should validate to true complex', () => {
        const bst = new BST(10);
        bst.right = new BST(15);
        bst.right.left = new BST(13);
        expect(validateBst(bst)).toBeTruthy()
    })

    test('should validate to false complex', () => {
        const bst = new BST(10);
        bst.right = new BST(15);
        bst.right.left = new BST(13);
        bst.right.right = new BST(14)
        expect(validateBst(bst)).toBeFalsy()
    })
})