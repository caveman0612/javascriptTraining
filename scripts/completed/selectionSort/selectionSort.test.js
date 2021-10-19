const selectionSort = require("./selectionSort")

test('selection sort test1', () => {
    expect(selectionSort([2, 1])).toEqual([1, 2])
    expect(selectionSort([1, 2])).toEqual([1, 2])
})

test('selection sort test2', () => {
    expect(selectionSort([8, 5, 2, 9, 5, 6, 3])).toEqual([2, 3, 5, 5, 6, 8, 9])
    // expect(selectionSort([1, 2, 3])).toEqual([1, 2])
})
