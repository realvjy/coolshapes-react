import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient84 from "../../gradients/gradient-84";

const data: ComponentDataType = {
  shape: "M100 13l100 174H0L100 13z",
  fillOpacity: 0.19,
  fill: "#FF6C02",
  gradient: Gradient84,
};
const Component = createShapeComponent("triangle-10", data);
export { data, Component as default };
