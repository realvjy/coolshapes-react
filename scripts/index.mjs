import * as fs from "node:fs";
import * as path from "node:path";
import shapeData from "./shapeData.mjs";
import * as prettier from "prettier";

const cwd = import.meta.dirname;
const outputDir = path.join(cwd, "../src/shapes");
const prettierConfig = await prettier.resolveConfig(cwd);
const dynamicImportsPath = path.join(cwd, "../src/dynamicImports.ts");

async function format(text) {
  return prettier.format(text, {
    prettierConfig,
    parser: "babel-ts",
  });
}

async function createShapeFile(shapeKey, shapeData) {
  const [category, index] = shapeKey.split("-");
  const categoryDir = path.join(outputDir, category);
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }
  const filePath = path.join(categoryDir, `${index}.tsx`);
  const componentDataString = `
  {
    shape: "${shapeData.shape}",
    blur: ${shapeData.blur},
    gradientShapes: ${shapeData.gradientShapes},
    ${shapeData.shapeFill ? `opacity: ${shapeData.opacity},` : ``}
    ${shapeData.shapeFill ? `shapeFill: "${shapeData.shapeFill}",` : ``}
    gradient: ${JSON.stringify(shapeData.gradient)}
  }
  `;
  // Create file content
  const fileContent = `${shapeData.gradientShapes ? `import * as React from "react"` : ""};
  import { createShapeComponent } from "../../lib/utils/shape";
  import { ComponentDataType } from "../../lib/types";
  
  const data: ComponentDataType = ${componentDataString};
  
  const Component = createShapeComponent("${shapeKey}", data);
  export { data, Component as default};
  `;
  const formattedContent = await format(fileContent);
  fs.writeFileSync(filePath, formattedContent, "utf8");
}

//
let finishedShapes = {};
await Promise.all(
  Object.entries(shapeData).map(async ([shapeKey, shapeData]) => {
    const category = shapeKey.split("-")[0];
    const categoryIndex = finishedShapes[category];
    if (!categoryIndex) {
      finishedShapes[category] = 0;
    }
    await createShapeFile(shapeKey, shapeData);
    finishedShapes[category]++;
  })
);

await Promise.all(
  Object.entries(finishedShapes).map(async ([category, maxFiles]) => {
    const indexPath = path.join(outputDir, `${category}/index.tsx`);
    const isNumberCategory = category.startsWith("number");
    let imports = "";
    const CategoryName = category.charAt(0).toUpperCase() + category.slice(1);
    let shapeDataArrayEntries = "";
    [...Array(maxFiles)].forEach((_, i) => {
      const fileNumber = isNumberCategory ? i : i + 1;
      const nameCapital = `${CategoryName}${fileNumber}`;
      imports += `import * as ${nameCapital} from "./${fileNumber}"; \n`;
      shapeDataArrayEntries += `  "${category}-${fileNumber}": ${nameCapital}.data,\n`;
    });
    const content = `
    ${imports}
    import { getComponentWithShapeType } from "../../lib/utils/shape";
    export const ${CategoryName}Data = {
    ${shapeDataArrayEntries}
    };
    const ${CategoryName} = getComponentWithShapeType(
      "${category}",
      Object.values(${CategoryName}Data)
    );
    export {
      ${CategoryName} as default,
      ${CategoryName},
    };
  `;
    const formatedContent = await format(content);
    fs.writeFileSync(indexPath, formatedContent, "utf8");
  })
);

let imports = "";
const indexPath = path.join(outputDir, `index.tsx`);
let dynamicImportsPropsString = ``;

Object.keys(shapeData).forEach((key) => {
  const seperatedKey = key.split("-");
  const index = seperatedKey[1];
  const name = seperatedKey[0];
  const categoryName = name.charAt(0).toUpperCase() + name.slice(1);
  imports += `export {default as ${categoryName}${index}} from './${name}/${index}.jsx'; \n`;
  dynamicImportsPropsString += `"${key}": () => import('./shapes/${name}/${index}'), \n`;
});

Object.keys(finishedShapes).forEach((key) => {
  imports += `export * from './${key}'; \n`;
});
const formatedImports = await format(imports);

fs.writeFileSync(indexPath, formatedImports, "utf8");

const dynamicImportsString = await format(`
  export const dynamicImports = {
    ${dynamicImportsPropsString}
  }
`);
fs.writeFileSync(dynamicImportsPath, dynamicImportsString, "utf-8");
