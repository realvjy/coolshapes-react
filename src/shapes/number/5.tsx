import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient111 from "../../gradients/gradient-111";

const data: ComponentDataType = {
  shape:
    "M130 200c33.137 0 60-26.863 60-60v-10c0-33.129-26.849-59.987-59.975-60H190V0H10v70c0 33.125 26.844 59.981 59.965 60H10c0 38.66 31.34 70 70 70h50z",

  fill: "#0E6FFF",
  gradient: Gradient111,
};
const Component = createShapeComponent("number-5", data);
export { data, Component as default };
