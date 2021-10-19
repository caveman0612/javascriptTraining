const findThreeLargestNumbers = require('./findThreeLargestNumbers');

test('should work', () => {
    // expect(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])).toEqual([18, 141, 541]);
    expect(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])).toEqual([18, 141, 541]);
    expect(findThreeLargestNumbers([7,  7, 7])).toEqual([7, 7, 7]);
})
