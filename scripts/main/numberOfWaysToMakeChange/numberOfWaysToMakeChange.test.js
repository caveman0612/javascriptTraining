const numberOfWaysToMakeChange = require("./numberOfWaysToMakeChange");

test("should do things", () => {
  expect(numberOfWaysToMakeChange(6, [1, 5])).toEqual([5, 1]);
});

test("should do things", () => {
  expect(numberOfWaysToMakeChange(6, [1, 5])).toEqual([0, 1, 2, 3, 4, 5, 5]);
});
