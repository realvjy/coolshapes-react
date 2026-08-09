import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient44 from "../../gradients/gradient-44";

const data: ComponentDataType = {
  shape:
    "M110 0H90l6.39 91.284-60.03-69.066L22.218 36.36l69.066 60.03L0 90v20l91.284-6.39-69.066 60.03 14.142 14.142 60.03-69.066L90 200h20l-6.39-91.284 60.03 69.066 14.142-14.142-69.066-60.03L200 110V90l-91.284 6.39 69.066-60.03-14.142-14.142-60.03 69.066L110 0z",

  fill: "gray",
  gradient: Gradient44,
};
const Component = createShapeComponent("wheel-3", data);
export { data, Component as default };
