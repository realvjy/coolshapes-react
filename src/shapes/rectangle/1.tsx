import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient97 from "../../gradients/gradient-97";

const data: ComponentDataType = {
  shape: "M200 0H0v200h200V0z",
  fillOpacity: 0.2,
  fill: "#FFF9C5",
  gradient: Gradient97,
};
const Component = createShapeComponent("rectangle-1", data);
export { data, Component as default };
