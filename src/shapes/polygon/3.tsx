import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient91 from "../../gradients/gradient-91";

const data: ComponentDataType = {
  shape:
    "M130.537 0a26.002 26.002 0 0118.395 7.598l43.372 43.285a26.004 26.004 0 017.634 18.379l.062 61.275a26 26 0 01-7.598 18.395l-43.285 43.372a26.002 26.002 0 01-18.379 7.634L69.463 200a26.001 26.001 0 01-18.395-7.598L7.696 149.117a26 26 0 01-7.634-18.379L0 69.463a26.003 26.003 0 017.598-18.395L50.883 7.696A26.003 26.003 0 0169.262.062L130.537 0z",

  gradient: Gradient91,
};
const Component = createShapeComponent("polygon-3", data);
export { data, Component as default };
