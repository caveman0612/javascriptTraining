const BST = require('./bstConstruction');

test('should make BST', () => {
    const bst = new BST();
    expect(bst).toBeTruthy();
})


test('should make BST left and right', () => {
    const bst = new BST(10);
    bst.right = new BST(15)
    bst.left = new BST(5)
    expect(bst.right).toBeTruthy();
    expect(bst.left).toBeTruthy();
})

test('should insert value', () => {
    const bst = new BST(10);
    bst.insert(5);
    bst.insert(5);
    bst.insert(15);
    bst.insert(13);
    bst.insert(14);
    expect(bst.right.value).toBe(15);
    expect(bst.left.value).toBe(5);
    expect(bst.left.right.value).toBe(5);
    expect(bst.right.left.value).toBe(13);
    expect(bst.right.left.right.value).toBe(14);
})


test('should return true for values inside BST', () => {
    const bst = new BST(10);
    bst.right = new BST(15)
    bst.left = new BST(5)
    expect(bst.contain(10)).toBeTruthy();
    expect(bst.contain(15)).toBeTruthy();
    expect(bst.contain(11)).toBeFalsy();
})

test('should remove 5 from bst', () => {
    const bst = new BST(10);
    bst.right = new BST(15);
    bst.left = new BST(5);
    bst.remove(5);
    expect(bst.left).toBeNull();
})

test('should remove 15 from bst', () => {
    const bst = new BST(10);
    bst.right = new BST(15);
    bst.left = new BST(5);
    bst.remove(15);
    expect(bst.right).toBeNull();
})

test('should remove 5 and replace with 2', () => {
    const bst = new BST(10);
    bst.right = new BST(15);
    bst.left = new BST(5);
    bst.left.left = new BST(2)
    bst.remove(5);
    expect(bst.left.value).toBe(2);
})

test('should remove 5 and replace with 6', () => {
    const bst = new BST(10);
    bst.right = new BST(15);
    bst.left = new BST(5);
    bst.left.right = new BST(6)
    bst.remove(5);
    expect(bst.left.value).toBe(6);
})

test('should delete the root node', () => {
    const bst = new BST(10);
    bst.right = new BST(15);
    bst.left = new BST(5);
    bst.right.left = new BST(13);
    bst.remove(10);
    expect(bst.value).toBe(13);
})