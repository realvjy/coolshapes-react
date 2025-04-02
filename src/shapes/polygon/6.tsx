import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient94 from "../../gradients/gradient-94";

const data: ComponentDataType = {
  shape: "M100 5l100 72.573L161.803 195H38.197L0 77.573 100 5z",

  gradient: Gradient94,
};
const Component = createShapeComponent("polygon-6", data);
export { data, Component as default };
