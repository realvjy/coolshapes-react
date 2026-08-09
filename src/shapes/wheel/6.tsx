import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient47 from "../../gradients/gradient-47";

const data: ComponentDataType = {
  shape:
    "M75.863 110H0V90h75.853L35.855 50l14.142-14.142L90 75.863V0h20v75.861l40.002-40.004L164.144 50l-39.998 40H200v20h-75.864l40.008 40.01-14.142 14.142L110 124.148V200H90v-75.853l-40.003 40.005-14.142-14.142L75.863 110z",

  gradient: Gradient47,
};
const Component = createShapeComponent("wheel-6", data);
export { data, Component as default };
