
# Mutation Testing

This repository contains a simple code written in JavaScript with accompanying Jest tests. The main goal is to demonstrate how to achieve 100% test coverage with Jest and then fail mutation testing with Stryker(actual coverage).

## Getting Started

Follow the instructions below to set up the project, run the tests, and perform mutation testing.

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:charliejuc/mutation-testing-coverage.git
   cd mutation-testing-coverage
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Tests

To run the Jest tests and check for 100% test coverage, use the following command:
```bash
npm test
```

This command will execute the tests defined in the project and generate snapshot files if they do not already exist.

### Mutation Testing with Stryker

To perform mutation testing and check the robustness of the tests, use the following command:
```bash
npm run stryker
```

This command will run Stryker, which will mutate the code and verify if the existing tests can detect these mutations. The goal is to demonstrate that while Jest tests pass with 100% coverage, they may fail to catch certain mutations, highlighting potential weaknesses in the test suite.
