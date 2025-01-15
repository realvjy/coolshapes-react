import * as fs from "node:fs";
import * as path from "node:path";
import shapeData from "./shapeData.js";

// Directory where the shape files will be stored
const outputDir = path.join(import.meta.dirname, "../src/shapes");
//
// // Ensure the output directory exists
// if (!fs.existsSync(outputDir)) {
//   fs.mkdirSync(outputDir, { recursive: true });

// Sample data (imported JSON or JS object from your file)
const shapes = fs.readdirSync(outputDir); // Adjust path as needed

console.log(shapes);
//
// // Function to create shape files
function createShapeFile(shapeKey, shapeData) {
  const [category, index] = shapeKey.split("-"); // Split key into category and index
  const categoryDir = path.join(outputDir, category);
  // Ensure category directory exists
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
  const fileContent = `import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = ${componentDataString};

const Component = createShapeComponent("${shapeKey}", data);
export { data, Component as default};
`;
  //
  //   // Write file
  fs.writeFileSync(filePath, fileContent, "utf8");
}

let finishedShapes = {};

Object.entries(shapeData).forEach(([shapeKey, shapeData]) => {
  const category = shapeKey.split("-")[0];
  const categoryIndex = finishedShapes[category];
  if (!categoryIndex) {
    finishedShapes[category] = 0;
  }
  createShapeFile(shapeKey, shapeData);
  finishedShapes[category]++;
});

Object.entries(finishedShapes).forEach(([category, maxFiles]) => {
  const indexPath = path.join(outputDir, `${category}/index.tsx`);
  let imports = "";
  const CategoryName = category.charAt(0).toUpperCase() + category.slice(1);
  let shapeDataArrayEntries = "";
  [...Array(maxFiles)].forEach((_, i) => {
    const fileNumber = i + 1;
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
  fs.writeFileSync(indexPath, content, "utf8");
});
let imports = "";
const indexPath = path.join(outputDir, `index.tsx`);

// console.log("Shape files have been generated successfully.");
Object.keys(shapeData).forEach((key) => {
  const seperatedKey = key.split("-");
  const index = seperatedKey[1];
  const name = seperatedKey[0];
  const categoryName = name.charAt(0).toUpperCase() + name.slice(1);
  imports += `export {default as ${categoryName}${index}} from './${name}/${index}.jsx'; \n`;
});
Object.keys(finishedShapes).forEach((key) => {
  imports += `export * from './${key}'; \n`;
});
fs.writeFileSync(indexPath, imports, "utf8");
