import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient81 from "../../gradients/gradient-81";

const data: ComponentDataType = {
  shape: "M0 0l100 100L0 200h200L100 100 200.001 0H0z",

  gradient: Gradient81,
};
const Component = createShapeComponent("triangle-7", data);
export { data, Component as default };
