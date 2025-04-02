import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient48 from "../../gradients/gradient-48";

const data: ComponentDataType = {
  shape:
    "M85.087 196v-80.513L9.223 140.369 0 111.717l75.86-24.881L28.98 21.7 53.114 4 100 69.14 146.886 4l24.135 17.7-46.882 65.136L200 111.717l-9.223 28.652-75.864-24.882V196H85.087z",

  fill: "#06F",
  gradient: Gradient48,
};
const Component = createShapeComponent("wheel-7", data);
export { data, Component as default };
