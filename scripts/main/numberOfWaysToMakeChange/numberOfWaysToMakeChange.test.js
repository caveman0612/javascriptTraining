const numberOfWaysToMakeChange = require("./numberOfWaysToMakeChange");

test("should do things", () => {
  const answer = numberOfWaysToMakeChange(6, [1, 5]);
  console.log(answer);
  expect(answer).toBe(2);
});

// [
//     [],
//     [1, 1],
//     [2, 1],
//     [3, 1],
//     [4, 1],
//     [1, 5],
//     [
//       [1, 5],
//       [1, 1],
//     ],
//   ]
