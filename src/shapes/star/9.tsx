import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient9 from "../../gradients/gradient-9";

const data: ComponentDataType = {
  shape:
    "M199.686.315C144.773 55.57 144.877 144.877 200 200c-55.123-55.123-144.432-55.229-199.686-.315C55.227 144.432 55.123 55.123 0 0c55.123 55.123 144.432 55.23 199.686.315z",

  gradient: Gradient9,
};
const Component = createShapeComponent("star-9", data);
export { data, Component as default };
