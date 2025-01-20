import * as fs from "node:fs";
import * as path from "node:path";
import shapeData from "./shapeData.js";
import * as prettier from "prettier";
import { shapesType } from "../src/lib/common";
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
  const isJsxPath = shapeData.shape && shapeData.shape.includes("<");

  const componentDataString = `
  {
    shape: ${isJsxPath ? shapeData.shape : `"${shapeData.shape}"`},
    blur: ${shapeData.blur},
    gradientShapes: ${shapeData.gradientShapes || null},
    ${shapeData.opacity ? `opacity: ${shapeData.opacity},` : ``}
    ${shapeData.fill ? `fill: "${shapeData.fill}",` : ``}
    gradient: ${JSON.stringify(shapeData.gradient) || "[]"}
  }
  `;
  // Create file content
  const fileContent = `${shapeData.gradientShapes || isJsxPath ? `import * as React from "react"` : ""};
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
await Promise.all(
  Object.entries(shapeData).map(async ([shapeKey, shapeData]) => {
    await createShapeFile(shapeKey, shapeData);
  })
);

await Promise.all(
  shapesType.map(async (type) => {
    const shapes = Object.entries(shapeData).filter(([name]) => {
      return name.split("-")[0] === type;
    });
    console.log(shapes);
    const categoryIndexFilePath = path.join(outputDir, `${type}/index.tsx`);
    let categoryName = type.charAt(0).toUpperCase() + type.slice(1);
    let imports = "";
    let shapeDataArrayEntries = "";
    if (categoryName === "Number") {
      categoryName = "NumberShape";
    }

    shapes.forEach(([name]) => {
      const shapeName = name.split("-")[1];
      const componentName = `${categoryName}${shapeName}`;
      imports += `import * as ${componentName} from "./${shapeName}"; \n`;
      shapeDataArrayEntries += `  "${name}": ${componentName}.data,\n`;
    });

    const content = `
    ${imports}
    import { getComponentWithShapeType } from "../../lib/utils/shape";
    export const ${type}ShapeData = {
    ${shapeDataArrayEntries}
    };
    const ${categoryName} = getComponentWithShapeType(
      "${type}",
      Object.values(${type}ShapeData)
    );
    export {
      ${categoryName} as default,
      ${categoryName},
    };
  `;
    const formatedContent = await format(content);
    fs.writeFileSync(categoryIndexFilePath, formatedContent, "utf8");
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

shapesType.forEach((type) => {
  imports += `export * from './${type}'; \n`;
});
const formatedImports = await format(imports);

fs.writeFileSync(indexPath, formatedImports, "utf8");

const dynamicImportsString = await format(`
  export const dynamicImports = {
    ${dynamicImportsPropsString}
  }
`);
fs.writeFileSync(dynamicImportsPath, dynamicImportsString, "utf-8");
