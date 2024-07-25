// user.test.js
const User = require("../src/user");

test("getUserInfo returns correct object for adult", () => {
  const user = new User("John Doe", 30);
  expect(user.getUserInfo()).toMatchSnapshot();
});

test("getUserInfo with different user", () => {
  const user = new User("Jane Doe", 25);
  expect(user.getUserInfo()).toMatchSnapshot();
});

test("getUserInfo returns correct object for minor", () => {
  const user = new User("Johnny Doe", 16);
  expect(user.getUserInfo()).toMatchSnapshot();
});

test("isAdult returns true for age >= 18", () => {
  const user = new User("John Doe", 30);
  expect(user.isAdult()).toBe(true);
});
