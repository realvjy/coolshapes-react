import shapeData from "./shapeData";
import { createFile } from "./createFile";

export default async function createDynamicImportsFile() {
  let dynamicImportsPropsString = ``;

  Object.keys(shapeData).forEach((key) => {
    const [name, index] = key.split("-");
    dynamicImportsPropsString += `"${key}": () => import('./shapes/${name}/${index}'), \n`;
  });

  await createFile(
    `
  export const dynamicImports = {
    ${dynamicImportsPropsString}
  }
`,
    "/dynamicImports.ts"
  );
}
