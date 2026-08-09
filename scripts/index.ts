import createGradientPresetFiles from "./createGradientPresetsFiles";
import { createGradientsIndexFile } from "./createGradientsIndex";
import createShapeFiles from "./createShapeFiles";
import createCategoryFiles from "./createShapeCategoryFiles";
import createShapesIndexFile from "./createShapesIndexFile";
import createDynamicImportsFile from "./createDynamicImports";

async function createFiles() {
  await createShapeFiles();
  await createCategoryFiles();
  await createShapesIndexFile();
  await createGradientPresetFiles();
  await createGradientsIndexFile();
  await createDynamicImportsFile();
}

await createFiles();
