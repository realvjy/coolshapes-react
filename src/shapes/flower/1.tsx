import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient14 from "../../gradients/gradient-14";

const data: ComponentDataType = {
  shape:
    "M150.005 128.863c66.681 38.481-49.997 105.828-49.997 28.861 0 76.967-116.658 9.62-49.997-28.861-66.681 38.481-66.681-96.207 0-57.727-66.681-38.48 49.997-105.827 49.997-28.86 0-76.967 116.657-9.62 49.997 28.86 66.66-38.48 66.66 96.208 0 57.727z",

  gradient: Gradient14,
};
const Component = createShapeComponent("flower-1", data);
export { data, Component as default };
