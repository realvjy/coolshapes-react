import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M100 160H10V90l90-90h90v200h-90v-40z",
  fillOpacity: 0.54,
  fill: "#FFF500",
  gradient: "gradient-110",
};
const Component = createShapeComponent("number-4", data);
export { data, Component as default };
