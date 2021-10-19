const productSum = require("./productSum")

test('should work', () => {
    const newList = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
    // const newList1 = [1, 2]
    // expect(productSum(newList)).toBeTruthy();
    expect(productSum(newList)).toBe(12);
})
