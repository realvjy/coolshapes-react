import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape: "M0 0l100 100L0 200h200L100 100 200.001 0H0z",
  blur: 30,
  gradientShapes: (
    <>
      <ellipse
        cx="56.994"
        cy="-11.874"
        fill="#FF58E4"
        rx="91.994"
        ry="58.126"></ellipse>
    </>
  ),

  gradient: [
    {
      x1: "100",
      x2: "100",
      y1: "0",
      y2: "200",
      type: "linear",
      stops: [
        { color: "#FFE500", offset: 0 },
        { color: "#00F0FF", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("triangle-7", data);
export { data, Component as default };
