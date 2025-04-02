import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient8 from "../../gradients/gradient-8";

const data: ComponentDataType = {
  shape:
    "M100 0c12.424 62.382 37.256 87.456 100 100-62.759 12.544-87.591 37.618-100 100-12.424-62.382-37.256-87.471-100-100C62.758 87.456 87.591 62.382 100 0z",

  gradient: Gradient8,
};
const Component = createShapeComponent("star-8", data);
export { data, Component as default };
