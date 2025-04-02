import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient57 from "../../gradients/gradient-57";

const data: ComponentDataType = {
  shape:
    "M100 200a100.001 100.001 0 000-200v200zM0 200a100.002 100.002 0 00100-100A100 100 0 000 0v200z",

  gradient: Gradient57,
};
const Component = createShapeComponent("moon-9", data);
export { data, Component as default };
