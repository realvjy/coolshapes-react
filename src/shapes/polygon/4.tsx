import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient92 from "../../gradients/gradient-92";

const data: ComponentDataType = {
  shape:
    "M141.304 0l58.613 58.495.083 82.809-58.495 58.613-82.809.083L.083 141.505 0 58.696 58.495.083 141.304 0z",

  fill: "#07FFE1",
  gradient: Gradient92,
};
const Component = createShapeComponent("polygon-4", data);
export { data, Component as default };
