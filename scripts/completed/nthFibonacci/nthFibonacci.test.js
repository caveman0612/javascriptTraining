const getNthFib = require("./nthFibonacci");

test('should work', () => {
    expect(getNthFib(1)).toBe(0);
    expect(getNthFib(2)).toBe(1);
    expect(getNthFib(3)).toBe(1);
    expect(getNthFib(4)).toBe(2);
    expect(getNthFib(5)).toBe(3);
    expect(getNthFib(6)).toBe(5);
})
