import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient37 from "../../gradients/gradient-37";

const data: ComponentDataType = {
  shape:
    "M139 39c0 21.54-17.461 39-39 39-21.54 0-39-17.46-39-39S78.46 0 100 0c21.539 0 39 17.46 39 39zM139 161c0 21.539-17.461 39-39 39-21.54 0-39-17.461-39-39s17.46-39 39-39c21.539 0 39 17.461 39 39zM161 139c-21.539 0-39-17.461-39-39 0-21.54 17.461-39 39-39s39 17.46 39 39c0 21.539-17.461 39-39 39zM39 139c-21.54 0-39-17.461-39-39 0-21.54 17.46-39 39-39s39 17.46 39 39c0 21.539-17.46 39-39 39z",

  gradient: Gradient37,
};
const Component = createShapeComponent("ellipse-8", data);
export { data, Component as default };
