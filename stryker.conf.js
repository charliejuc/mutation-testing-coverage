/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  incremental: true,
  ignoreStatic: true,
  packageManager: "npm",
  testRunner: "jest",
  reporters: ["clear-text", "progress", "dashboard"],
  coverageAnalysis: "perTest",
  mutate: ["src/**/*.js"],
  ignorePatterns: ["node_modules/**/*"],
  thresholds: {
    high: 90,
    low: 70,
    break: 60,
  },
  plugins: [
    "@stryker-mutator/jest-runner",
    "@stryker-mutator/javascript-mutator",
  ],
};
