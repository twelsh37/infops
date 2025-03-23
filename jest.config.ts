// File: jest.config.ts
import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig: Config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/app/(.*)$": "<rootDir>/app/$1",
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/server/(.*)$": "<rootDir>/server/$1",
    "^@/(.*)$": "<rootDir>/$1",
  },
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 20,
      branches: 10,
      functions: 15,
      lines: 20,
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig);
