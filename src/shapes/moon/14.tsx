import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient62 from "../../gradients/gradient-62";

const data: ComponentDataType = {
  shape: "M34.315 0A117.157 117.157 0 10200 165.685L34.315 0z",
  fillOpacity: 0.79,
  fill: "#EE46D3",
  gradient: Gradient62,
};
const Component = createShapeComponent("moon-14", data);
export { data, Component as default };
