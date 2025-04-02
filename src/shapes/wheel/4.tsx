import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient45 from "../../gradients/gradient-45";

const data: ComponentDataType = {
  shape:
    "M120 0H80v51.716L43.431 15.147 15.148 43.431 51.716 80H0v40h51.716l-36.569 36.568 28.285 28.285L80 148.284V200h40v-51.716l36.569 36.569 28.284-28.284L148.284 120H200V80h-51.716l36.569-36.569-28.284-28.284L120 51.716V0z",
  fillOpacity: 0.371,
  fill: "#F2371F",
  gradient: Gradient45,
};
const Component = createShapeComponent("wheel-4", data);
export { data, Component as default };
