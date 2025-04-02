import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient82 from "../../gradients/gradient-82";

const data: ComponentDataType = {
  shape: "M200 100L100 0 0 100h100L0 200h200L100 100h100z",

  gradient: Gradient82,
};
const Component = createShapeComponent("triangle-8", data);
export { data, Component as default };
