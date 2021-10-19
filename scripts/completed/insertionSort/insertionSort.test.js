const insertionSort = require("./insertionSort")
const insertNum = require("./insertNum")


test('insertSort test', () => {
    expect(insertionSort([3, 2, 1, 4, 7, 6])).toEqual([1, 2, 3, 4, 6, 7]);
})

test('insertNum test', () => {
    expect(insertNum([2, 3, 1], 1)).toEqual([1, 2, 3]);
})

