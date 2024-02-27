import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { dts } from "rollup-plugin-dts";
import pkg from "./package.json" assert { type: "json" };
const inputFile = "src/index.tsx";

// rollup.config.mjs
export default [
  {
    input: inputFile,
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
      {
        name: "coolshapes",
        file: pkg["main:umd"],
        format: "umd",
        sourcemap: true,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    ],
    external: ["react", "react-dom"],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
  },

  {
    input: inputFile,
    output: [
      {
        file: `dist/index.d.ts`,
        format: "es",
      },
    ],
    plugins: [dts()],
  },
];
