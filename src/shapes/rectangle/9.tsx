import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient105 from "../../gradients/gradient-105";

const data: ComponentDataType = {
  shape:
    "M100 139.678L39.678 200 0 160.322 60.322 100 0 39.678 39.678 0 100 60.322 160.322 0 200 39.678 139.678 100 200 160.322 160.322 200 100 139.678z",

  gradient: Gradient105,
};
const Component = createShapeComponent("rectangle-9", data);
export { data, Component as default };
