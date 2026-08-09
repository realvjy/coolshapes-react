import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient96 from "../../gradients/gradient-96";

const data: ComponentDataType = {
  shape: "M100.397 0l87 50v100l-87 50-87-50V50l87-50z",

  gradient: Gradient96,
};
const Component = createShapeComponent("polygon-8", data);
export { data, Component as default };
