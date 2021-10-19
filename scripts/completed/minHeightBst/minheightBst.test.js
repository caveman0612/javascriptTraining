const {BST, minHeightBst} = require("./minHeightBst")

test('should make BST', () => {
    // const bst = minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22])
    const bst = minHeightBst([1, 5, 10, 14, 22])
    console.log(bst);
    expect(bst.value).toBe(10)
})
