import * as prettier from "prettier";

const cwd = import.meta.dirname;
const prettierConfig = await prettier.resolveConfig(cwd);
export default async function format(text) {
  return prettier.format(text, {
    prettierConfig,
    parser: "babel-ts",
  });
}
