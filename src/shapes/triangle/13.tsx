import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M40 100v100L0 100 40 0v100zM100 0L40 100l60 100 60-100L100 0zM160 100v100l40-100L160 0v100z",

  fill: "#07FFE1",
  gradient: "gradient-87",
};
const Component = createShapeComponent("triangle-13", data);
export { data, Component as default };
