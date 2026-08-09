import { createFile } from "./createFile";
import { default as shapesData } from "./shapeData";

export default async function createShapeFiles() {
  await Promise.all(
    Object.entries(shapesData).map(
      async (
        [shapeKey, shapeData]: [shapeKey: string, shapeData: any],
        dataIndex
      ) => {
        const [category, index] = shapeKey.split("-");
        const isJsxPath = shapeData.shape && shapeData.shape.includes("<");
        const GradientObject = `Gradient${dataIndex + 1}`;
        const componentDataString = `
  {
    shape: ${isJsxPath ? shapeData.shape : `"${shapeData.shape}"`},
    ${shapeData.opacity != undefined ? `fillOpacity: ${shapeData.opacity},` : ``}
    ${shapeData.fill ? `fill: "${shapeData.fill}",` : ``}
    gradient: ${GradientObject}
  }
  `;

        await createFile(
          `${isJsxPath ? `import * as React from "react"` : ""};
  import { createShapeComponent } from "../../lib/shape";
  import { ComponentDataType } from "../../lib/types";
  import ${GradientObject} from "../../gradients/gradient-${dataIndex + 1}";

  const data: ComponentDataType = ${componentDataString};

  const Component = createShapeComponent("${shapeKey}", data);
  export { data, Component as default};
  `,
          `/shapes/${category}/${index}.tsx`
        );
      }
    )
  );
}
