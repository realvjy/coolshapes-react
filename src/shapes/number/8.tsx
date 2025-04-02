import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient114 from "../../gradients/gradient-114";

const data: ComponentDataType = {
  shape:
    "M190 55c0-30.376-24.624-55-55-55H65C34.624 0 10 24.624 10 55c0 18.602 9.235 35.046 23.37 45C19.234 109.954 10 126.398 10 145c0 30.376 24.624 55 55 55h70c30.376 0 55-24.624 55-55 0-18.602-9.234-35.046-23.369-45C180.766 90.046 190 73.602 190 55z",

  gradient: Gradient114,
};
const Component = createShapeComponent("number-8", data);
export { data, Component as default };
