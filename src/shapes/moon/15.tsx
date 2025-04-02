import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient63 from "../../gradients/gradient-63";

const data: ComponentDataType = {
  shape:
    "M56.359 100C22.997 83.793 0 49.582 0 10h50c0 27.614 22.386 50 50 50s50-22.386 50-50h50c0 39.582-22.997 73.793-56.359 90C177.003 116.207 200 150.418 200 190h-50c0-27.614-22.386-50-50-50s-50 22.386-50 50H0c0-39.582 22.997-73.793 56.359-90z",
  fillOpacity: 0.44,
  fill: "#FFF500",
  gradient: Gradient63,
};
const Component = createShapeComponent("moon-15", data);
export { data, Component as default };
