import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient5 from "../../gradients/gradient-5";

const data: ComponentDataType = {
  shape:
    "M115.13 60.52L100 0 84.87 60.52 46.26 46.26l14.262 38.61L0 100l60.521 15.13-14.26 38.61 38.609-14.261L100 200l15.13-60.522 38.611 14.262-14.261-38.61L200 100l-60.521-15.13 14.261-38.61-38.61 14.26z",

  gradient: Gradient5,
};
const Component = createShapeComponent("star-5", data);
export { data, Component as default };
