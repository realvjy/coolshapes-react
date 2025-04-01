import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M10 90h90v110h90V0h-90L10 90z",
  fillOpacity: 0.44,
  fill: "#FFF500",
  gradient: "gradient-107",
};
const Component = createShapeComponent("number-1", data);
export { data, Component as default };
