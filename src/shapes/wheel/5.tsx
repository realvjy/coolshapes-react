import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M108 0H92v80.686L34.946 23.632 23.632 34.946 80.686 92H0v16h80.686l-57.054 57.054 11.314 11.314L92 119.314V200h16v-80.686l57.053 57.053 11.314-11.313L119.313 108H200V92h-80.686l57.053-57.054-11.313-11.313L108 80.686V0z",
  blur: undefined,
  gradientShapes: undefined,

  gradient: [
    {
      x1: "200",
      x2: "0",
      y1: "0",
      y2: "200",
      type: "linear",
      stops: [
        { color: "#FF1F00", offset: 0 },
        { color: "#FFD600", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("wheel-5", data);
export { data, Component as default };
