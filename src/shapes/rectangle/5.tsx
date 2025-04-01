import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M130 0H70v70H0v60h70v70h60v-70h70V70h-70V0z",

  fill: "#fff",
  gradient: "gradient-101",
};
const Component = createShapeComponent("rectangle-5", data);
export { data, Component as default };
