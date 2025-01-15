import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
const inputFile = "src/index.tsx";
import { visualizer } from "rollup-plugin-visualizer";
import pkg from "./package.json" assert { type: "json" };
// rollup.config.mjs
export default [
  {
    input: inputFile,
    output: [
      {
        dir: "./dist/cjs",
        format: "cjs",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "src",
      },
      {
        // file: pkg.module,
        dir: "./dist/esm",
        format: "esm",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "src",
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
      visualizer({
        template: "treemap",
        projectRoot: "dist",
      }),
    ],
  },
  // {
  //   input: inputFile,
  //   dir: './dist/types',
  //   format: 'esm',
  //   plugins: [typescript({
  //       tsconfig: "./tsconfig.json", compilerOptions: {
  //       declarationDir: './dist/types',
  //       declaration: true,
  //       declarationMap: true,
  //       emitDeclarationOnly: true,
  //     }
  //   })],
  // },
];
