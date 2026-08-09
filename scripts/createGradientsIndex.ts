import shapesData from "./shapeData";
import { createFile } from "./createFile";

export async function createGradientsIndexFile() {
  const indexPath = "/gradients/index.ts";
  let exports = "";
  let imports = "";
  let objectEntries = "";
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Object.keys(shapesData).map((_, index) => {
    const objectName = `Gradient${index + 1}`;
    const name = `gradient-${index + 1}`;
    exports += `export {default as ${objectName}} from './${name}';`;
    imports += `import ${objectName} from './${name}';`;
    objectEntries += `"${name}": ${objectName},`;
  });
  await createFile(
    `
    ${exports}
    ${imports}
    export const gradients = {
      ${objectEntries}
    }
  `,
    indexPath
  );
}
