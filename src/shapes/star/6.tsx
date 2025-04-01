import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M120 80L100 0 80 80 0 100l80 20 20 80 20-80 80-20-80-20z",

  fill: "#0E6FFF",
  gradient: "gradient-6",
};
const Component = createShapeComponent("star-6", data);
export { data, Component as default };
