import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient53 from "../../gradients/gradient-53";

const data: ComponentDataType = {
  shape: "M50 102a75 75 0 00150 0H50zM0 98a75 75 0 11150 0H0z",
  fillOpacity: 0.19,
  fill: "#FF6C02",
  gradient: Gradient53,
};
const Component = createShapeComponent("moon-5", data);
export { data, Component as default };
