import shapeData from "./shapeData";
import { createFile } from "./createFile";

export default async function createGradientPresetFiles() {
  await Promise.all(
    Object.values(shapeData).map(async (data, index) => {
      const gradientName = `gradient-${index + 1}`;
      const objectName = `Gradient${index + 1}`;
      const gradientFilePath = `/gradients/${gradientName}.tsx`;

      await createFile(
        `
     import * as React from "react";   
     const ${objectName} = {
      gradient: ${JSON.stringify(data.gradient)},
      shapes: ${(data as any).gradientShapes},
      blur: ${(data as any).blur}
      }
      export { ${objectName},  ${objectName} as default};
     `,
        gradientFilePath
      );
    })
  );
}
