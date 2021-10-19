const binarySearch = require("./binarySearch")

test('is working?', () => {
    expect(binarySearch([0, 1, 21, 33, 45, 61, 71, 72, 73], 33)).toEqual(3)
})