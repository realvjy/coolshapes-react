import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient19 from "../../gradients/gradient-19";

const data: ComponentDataType = {
  shape:
    "M124.486 75.514C167.877 77.436 200 84.874 200 100c0 15.126-32.123 22.564-75.514 24.486C122.564 167.877 115.126 200 100 200c-15.126 0-22.564-32.123-24.486-75.514C32.123 122.564 0 115.126 0 100c0-15.126 32.123-22.564 75.514-24.486C77.436 32.123 84.874 0 100 0c15.126 0 22.564 32.123 24.486 75.514z",

  fill: "#07FFE1",
  gradient: Gradient19,
};
const Component = createShapeComponent("flower-6", data);
export { data, Component as default };
