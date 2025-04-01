import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M149.999 50c0 27.614-22.386 50-50 50s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50zM149.999 150c0 27.615-22.386 50-50 50s-50-22.385-50-50c0-27.614 22.386-50 50-50s50 22.386 50 50z",

  fill: "#0E6FFF",
  gradient: "gradient-33",
};
const Component = createShapeComponent("ellipse-4", data);
export { data, Component as default };
