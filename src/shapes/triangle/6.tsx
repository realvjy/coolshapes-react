import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M200 0v200L0 0h200zM100 100v100L0 100h100z",

  fill: "#0E6FFF",
  gradient: "gradient-80",
};
const Component = createShapeComponent("triangle-6", data);
export { data, Component as default };
