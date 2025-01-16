import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M200 100L100 0 0 100h100L0 200h200L100 100h100z",
  blur: 40,
  gradientShapes: (
    <>
      <path fill="#06F" d="M220 56H100v155h120V56z"></path>
    </>
  ),

  gradient: [
    {
      x1: "162",
      x2: "49.5",
      y1: "38",
      y2: "150.5",
      type: "linear",
      stops: [
        { color: "#FF1F00", offset: 0 },
        { color: "#FF58E4", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("triangle-8", data);
export { data, Component as default };
