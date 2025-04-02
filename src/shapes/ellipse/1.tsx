import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient30 from "../../gradients/gradient-30";

const data: ComponentDataType = {
  shape:
    "M0 100C0 44.772 44.772 0 100 0s100 44.772 100 100-44.772 100-100 100S0 155.228 0 100z",

  gradient: Gradient30,
};
const Component = createShapeComponent("ellipse-1", data);
export { data, Component as default };
