import { createDefaultEsmPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultEsmPreset().transform;

/** @type {import("jest").Config} **/
export default {
   testEnvironment: "node",
   transform: {
      ...tsJestTransformCfg,
   },
   collectCoverage: true,
   coverageDirectory: "./coverage",
   collectCoverageFrom: ["src/**/*.ts"],
};
