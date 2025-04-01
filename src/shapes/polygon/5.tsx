import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M83.997 8.23a27.096 27.096 0 0132.006 0l72.752 53.16c9.56 6.986 13.561 19.378 9.907 30.687l-27.777 85.977C167.235 189.352 156.776 197 144.976 197H55.024c-11.8 0-22.259-7.648-25.91-18.946L1.339 92.077c-3.654-11.31.347-23.701 9.907-30.687L83.996 8.23z",

  gradient: "gradient-93",
};
const Component = createShapeComponent("polygon-5", data);
export { data, Component as default };
