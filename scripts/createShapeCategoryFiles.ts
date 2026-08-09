import shapeData from "./shapeData";
import { shapeTypes } from "../src/lib/common";
import { createFile } from "./createFile";

export default async function createCategoryFiles() {
  await Promise.all(
    shapeTypes.map(async (category) => {
      let categoryName = category.charAt(0).toUpperCase() + category.slice(1);
      const shapes = Object.entries(shapeData).filter(([name]) => {
        return name.split("-")[0] === category;
      });
      const categoryIndexFilePath = `/shapes/${category}/index.tsx`;

      let imports = "";
      let shapeDataArrayEntries = "";

      // Special case for Number shapes.
      if (categoryName === "Number") {
        categoryName = "NumberShape";
      }

      // all the imports and categories data object
      shapes.forEach(([name]) => {
        const shapeName = name.split("-")[1];
        const componentName = `${categoryName}${shapeName}`;
        imports += `import * as ${componentName} from "./${shapeName}"; \n`;
        shapeDataArrayEntries += `  "${name}": ${componentName}.data,\n`;
      });

      // Wrap everything up into one string, add exports
      await createFile(
        `
    ${imports}
    import { getComponentWithShapeType } from "../../lib/shape";
    export const ${category}ShapeData = {
    ${shapeDataArrayEntries}
    };
    const ${categoryName} = getComponentWithShapeType(
      "${category}",
      Object.values(${category}ShapeData)
    );
    export {
      ${categoryName} as default,
      ${categoryName},
    };
  `,
        categoryIndexFilePath
      );
    })
  );
}
