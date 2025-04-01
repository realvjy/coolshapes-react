import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M155.71 170.711A100.003 100.003 0 0184.999 200v-99.629A69.999 69.999 0 0115 170V30a70 70 0 0169.999 69.629V0a100 100 0 0170.711 170.711z",
  fillOpacity: 0.112,
  fill: "#FFC700",
  gradient: "gradient-54",
};
const Component = createShapeComponent("moon-6", data);
export { data, Component as default };
