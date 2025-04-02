import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient102 from "../../gradients/gradient-102";

const data: ComponentDataType = {
  shape:
    "M150 0v50H50V0h100zM50 150V50H0v100h50zM150 150V50h50v100h-50zM150 150H50v50h100v-50z",

  gradient: Gradient102,
};
const Component = createShapeComponent("rectangle-6", data);
export { data, Component as default };
