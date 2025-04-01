import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M200 0c0 110.457-89.543 200-200 200C0 89.543 89.543 0 200 0z",
  fillOpacity: 0.2,
  fill: "#F2371F",
  gradient: "gradient-59",
};
const Component = createShapeComponent("moon-11", data);
export { data, Component as default };
