const path = require("path");

module.exports = {
  rootDir: path.resolve(__dirname, "../../"),
  moduleFileExtensions: ["js", "json", "vue", "ts"],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: [
    "<rootDir>/test/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  testPathIgnorePatterns: ["<rootDir>/test/e2e"],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/test/unit/coverage",
  collectCoverageFrom: ["src/**/*.{js,vue,ts}", "!**/node_modules/**"]
};
