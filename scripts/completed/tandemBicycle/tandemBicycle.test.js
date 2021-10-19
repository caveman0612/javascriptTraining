const tandemBicycle = require('./tandemBicycle')

// test("", () => {

// })

// test("fast sorting", () => {
//     // expect(tandemBicycle([1, 2], [1, 2], true)).toEqual([[1, 2], [2, 1]]);
//     expect(tandemBicycle([1, 2], [1, 2], true)).toBe(4);
// })

// test("slow sorting", () => {
//     // expect(tandemBicycle([1, 2], [1, 2], false)).toEqual([[1, 2], [1, 2]]);
//     expect(tandemBicycle([1, 2], [1, 2], false)).toBe(3);
// })

test("failed test", () => {
    expect(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true)).toBe(32);
})

