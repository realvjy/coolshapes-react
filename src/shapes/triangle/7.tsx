import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M0 0l100 100L0 200h200L100 100 200.001 0H0z",

  gradient: "gradient-81",
};
const Component = createShapeComponent("triangle-7", data);
export { data, Component as default };
