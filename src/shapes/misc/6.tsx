import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient69 from "../../gradients/gradient-69";

const data: ComponentDataType = {
  shape:
    "M200 100c-55.228 0-100 44.772-100 100H0V100c55.228 0 100-44.772 100-100h100v100z",

  gradient: Gradient69,
};
const Component = createShapeComponent("misc-6", data);
export { data, Component as default };
