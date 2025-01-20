import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M150 0v50H50V0h100zM50 150V50H0v100h50zM150 150V50h50v100h-50zM150 150H50v50h100v-50z",
  blur: undefined,
  gradientShapes: null,

  gradient: [
    {
      x1: "38",
      x2: "119",
      y1: "14.5",
      y2: "181.5",
      type: "linear",
      stops: [
        { color: "#FFE500", offset: 0 },
        { color: "#07FFE1", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("rectangle-6", data);
export { data, Component as default };
