// math.test.js
const { add, subtract } = require("../src/math");

test("adds two numbers", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(-1, -1)).toBe(-2);
});

test("subtracts two numbers", () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(3, 5)).toBe(2); // Passes but doesn't catch the logical error
});
