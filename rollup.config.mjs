import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { dts } from "rollup-plugin-dts";

const filename = "coolshape.js"
// rollup.config.mjs
export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: "dist/cjs/coolshapes.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/esm/coolshapes.js",
        format: "esm",
        sourcemap: true,
      },
      {
        name: "coolshapes",
        file: "dist/umd/coolshapes.js",
        format: "umd",
        sourcemap: true,
      },
    ],
    external: ["react", "react-dom"],

    plugins: [resolve(), commonjs(),	typescript({ tsconfig: "./tsconfig.json" }),
    , terser()],
  },
  {
    input: "src/index.tsx",
    output: [
      {
        file: `dist/index.d.ts`,
        format: 'es',
      },
    ],
    plugins: [dts()],
  }
];
