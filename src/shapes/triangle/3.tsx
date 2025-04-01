import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M0 0v100h99.984L0 0zm99.984 100L200 0H99.984v100zm0 0L200 200V100H99.984zm0 0L0 200h99.984V100z",
  fillOpacity: 0.2,
  fill: "#F2371F",
  gradient: "gradient-77",
};
const Component = createShapeComponent("triangle-3", data);
export { data, Component as default };
