import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient115 from "../../gradients/gradient-115";

const data: ComponentDataType = {
  shape:
    "M190 110c0 49.706-40.294 90-90 90v-90H65c-30.376 0-55-24.624-55-55S34.624 0 65 0h35c49.706 0 90 40.294 90 90v20z",

  gradient: Gradient115,
};
const Component = createShapeComponent("number-9", data);
export { data, Component as default };
