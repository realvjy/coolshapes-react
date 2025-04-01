import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M196.516 87.01a25.96 25.96 0 010 25.98l-36.997 64.02A26.012 26.012 0 01136.997 190H63.003a26.011 26.011 0 01-22.522-12.99L3.484 112.99a25.958 25.958 0 010-25.98l36.997-64.02A26.01 26.01 0 0163.003 10h73.994a26.011 26.011 0 0122.522 12.99l36.997 64.02z",

  gradient: "gradient-89",
};
const Component = createShapeComponent("polygon-1", data);
export { data, Component as default };
