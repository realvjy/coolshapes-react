import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M10 90h90v110h90V90c0-49.706-40.294-90-90-90H10v90z",
  fillOpacity: 0.44,
  fill: "#FFF500",
  gradient: "gradient-113",
};
const Component = createShapeComponent("number-7", data);
export { data, Component as default };
