import shapeData from "./shapeData";
import { shapeTypes } from "../src/lib/common";
import { createFile } from "./createFile";

export default async function createShapesIndexFile() {
  let imports = "";
  const path = "/shapes/index.tsx";
  Object.keys(shapeData).forEach((key) => {
    const seperatedKey = key.split("-");
    const index = seperatedKey[1];
    const name = seperatedKey[0];
    const categoryName = name.charAt(0).toUpperCase() + name.slice(1);
    imports += `export {default as ${categoryName}${index}} from './${name}/${index}.jsx'; \n`;
  });
  shapeTypes.forEach((type) => {
    imports += `export * from './${type}'; \n`;
  });
  await createFile(imports, path);
}
