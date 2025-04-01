import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M-.028.003l100 100v-100h-100zm100 0l100 100v-100h-100zm100 100h-100l100 99.994v-99.994zm-100 0h-100l100 99.994v-99.994z",
  fillOpacity: 0.44,
  fill: "#FFF9C5",
  gradient: "gradient-75",
};
const Component = createShapeComponent("triangle-1", data);
export { data, Component as default };
