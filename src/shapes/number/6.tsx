import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient112 from "../../gradients/gradient-112";

const data: ComponentDataType = {
  shape:
    "M10 90c0-49.706 40.294-90 90-90v90h35c30.376 0 55 24.624 55 55s-24.624 55-55 55h-35c-49.706 0-90-40.294-90-90V90z",

  gradient: Gradient112,
};
const Component = createShapeComponent("number-6", data);
export { data, Component as default };
