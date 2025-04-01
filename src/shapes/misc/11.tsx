import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M200 100L100 0v70H0v60h100v70l100-100z",

  fill: "#07FFE1",
  gradient: "gradient-74",
};
const Component = createShapeComponent("misc-11", data);
export { data, Component as default };
