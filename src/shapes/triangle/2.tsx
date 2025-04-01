import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M50.94 0L0 200h100L50.94 0zM100 200h100L150.967 0 100 200z",

  gradient: "gradient-76",
};
const Component = createShapeComponent("triangle-2", data);
export { data, Component as default };
