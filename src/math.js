// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  if (a > b) {
    return a - b;
  }
  return b - a; // Logical error
}

module.exports = { add, subtract };
