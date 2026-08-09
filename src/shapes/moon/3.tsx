import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient51 from "../../gradients/gradient-51";

const data: ComponentDataType = {
  shape:
    "M200 9V0H0v9c0 39.994 23.478 74.504 57.403 90.5C23.478 115.496 0 150.006 0 190v10h200v-10c0-39.994-23.478-74.504-57.403-90.5C176.522 83.504 200 48.994 200 9z",

  gradient: Gradient51,
};
const Component = createShapeComponent("moon-3", data);
export { data, Component as default };
