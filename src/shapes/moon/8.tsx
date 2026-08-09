import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient56 from "../../gradients/gradient-56";

const data: ComponentDataType = {
  shape:
    "M170.71 170.711A100.001 100.001 0 01100 200v-99.775C99.877 127.736 77.54 150 50 150c-27.614 0-50-22.386-50-50s22.386-50 50-50c27.54 0 49.878 22.264 50 49.775V0a99.999 99.999 0 0170.71 170.711z",
  fillOpacity: 0.6,
  fill: "#907CFF",
  gradient: Gradient56,
};
const Component = createShapeComponent("moon-8", data);
export { data, Component as default };
