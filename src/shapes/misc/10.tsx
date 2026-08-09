import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient73 from "../../gradients/gradient-73";

const data: ComponentDataType = {
  shape:
    "M136 0l-36 36L64 0H0v64l36 36-36 36v64h64l36-36 36 36h64v-64l-36-36 36-36V0h-64z",
  fillOpacity: 0.19,
  fill: "#FF6C02",
  gradient: Gradient73,
};
const Component = createShapeComponent("misc-10", data);
export { data, Component as default };
