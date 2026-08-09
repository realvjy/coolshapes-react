import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient31 from "../../gradients/gradient-31";

const data: ComponentDataType = {
  shape:
    "M100 72c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zM0 100C0 44.772 44.772 0 100 0s100 44.772 100 100-44.772 100-100 100S0 155.228 0 100z",

  gradient: Gradient31,
};
const Component = createShapeComponent("ellipse-2", data);
export { data, Component as default };
