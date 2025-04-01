import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M0 0l66.445 200H0V0zM66.777 0l66.446 200H66.777V0zM200 200L133.555 0v200H200z",

  fill: "#06F",
  gradient: "gradient-86",
};
const Component = createShapeComponent("triangle-12", data);
export { data, Component as default };
