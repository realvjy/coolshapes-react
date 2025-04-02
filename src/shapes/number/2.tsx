import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient108 from "../../gradients/gradient-108";

const data: ComponentDataType = {
  shape:
    "M130 0c33.137 0 60 26.863 60 60v10c0 33.129-26.849 59.987-59.975 60H190v70H10v-70c0-33.125 26.844-59.98 59.965-60H10C10 31.34 41.34 0 80 0h50z",

  gradient: Gradient108,
};
const Component = createShapeComponent("number-2", data);
export { data, Component as default };
