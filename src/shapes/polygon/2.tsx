import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient90 from "../../gradients/gradient-90";

const data: ComponentDataType = {
  shape: "M200 100l-50 87H50L0 100l50-87h100l50 87z",
  fillOpacity: 0.2,
  fill: "#F2371F",
  gradient: Gradient90,
};
const Component = createShapeComponent("polygon-2", data);
export { data, Component as default };
