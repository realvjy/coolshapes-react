import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M100.397 0l87 50v100l-87 50-87-50V50l87-50z",

  gradient: "gradient-96",
};
const Component = createShapeComponent("polygon-8", data);
export { data, Component as default };
