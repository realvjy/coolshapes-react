import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient99 from "../../gradients/gradient-99";

const data: ComponentDataType = {
  shape: "M100 0l100 100-100 100.001L0 100 100 0z",

  fill: "#FFF2AF",
  gradient: Gradient99,
};
const Component = createShapeComponent("rectangle-3", data);
export { data, Component as default };
