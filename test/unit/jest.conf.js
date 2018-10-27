const path = require("path");

module.exports = {
  rootDir: path.resolve(__dirname, "../../"),
  moduleFileExtensions: ["js", "json", "vue"],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  testPathIgnorePatterns: ["<rootDir>/test/e2e"],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/test/unit/coverage",
  collectCoverageFrom: ["src/**/*.{js,vue}", "!**/node_modules/**"]
};
