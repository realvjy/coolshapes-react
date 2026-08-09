import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient22 from "../../gradients/gradient-22";

const data: ComponentDataType = {
  shape:
    "M50 0C22.386 0 0 22.386 0 50s22.386 50 50 50c-27.614 0-50 22.386-50 50s22.386 50 50 50h100c27.614 0 50-22.386 50-50s-22.386-50-50-50c27.614 0 50-22.386 50-50S177.614 0 150 0H50z",

  gradient: Gradient22,
};
const Component = createShapeComponent("flower-9", data);
export { data, Component as default };
