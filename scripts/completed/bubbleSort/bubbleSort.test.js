const bubbleSort = require("./bubbleSort");

test('bubbleSort', () => {
    expect(bubbleSort([4, 3, 2, 5, 8, 6])).toEqual([2, 3, 4, 5, 6, 8])
})

test('no change', () => {
    expect(bubbleSort([3, 4, 5, 6, 7])).toEqual([3, 4, 5, 6, 7])
})
