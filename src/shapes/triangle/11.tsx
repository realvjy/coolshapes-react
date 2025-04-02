import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient85 from "../../gradients/gradient-85";

const data: ComponentDataType = {
  shape:
    "M100 100L0 42v116l100-58zm0 0L158 0H42l58 100zm0 0l100-58v116l-100-58zm0 0l58 100H42l58-100z",

  gradient: Gradient85,
};
const Component = createShapeComponent("triangle-11", data);
export { data, Component as default };
