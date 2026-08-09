import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient109 from "../../gradients/gradient-109";

const data: ComponentDataType = {
  shape:
    "M10 0v70h25v60H10v70h125c30.376 0 55-24.624 55-55 0-18.602-9.234-35.046-23.369-45C180.766 90.046 190 73.602 190 55c0-30.376-24.624-55-55-55H10z",

  fill: "#07FFE1",
  gradient: Gradient109,
};
const Component = createShapeComponent("number-3", data);
export { data, Component as default };
