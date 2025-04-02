import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient16 from "../../gradients/gradient-16";

const data: ComponentDataType = {
  shape:
    "M200 50c0-27.614-22.386-50-50-50s-50 22.386-50 50c0-27.614-22.386-50-50-50S0 22.386 0 50s22.386 50 50 50c-27.614 0-50 22.386-50 50s22.386 50 50 50 50-22.386 50-50c0 27.614 22.386 50 50 50s50-22.386 50-50c0-27.608-22.375-49.989-49.98-50C177.625 99.99 200 77.608 200 50z",

  gradient: Gradient16,
};
const Component = createShapeComponent("flower-3", data);
export { data, Component as default };
