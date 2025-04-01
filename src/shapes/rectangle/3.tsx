import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M100 0l100 100-100 100.001L0 100 100 0z",

  fill: "#FFF2AF",
  gradient: "gradient-99",
};
const Component = createShapeComponent("rectangle-3", data);
export { data, Component as default };
