import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M100 139.678L39.678 200 0 160.322 60.322 100 0 39.678 39.678 0 100 60.322 160.322 0 200 39.678 139.678 100 200 160.322 160.322 200 100 139.678z",
  blur: 40,
  gradientShapes: (
    <>
      <path fill="#FF37BB" d="M95 46H-12v154H95V46z"></path>
      <path fill="#00F0FF" d="M212 0H79v110h133V0z"></path>
    </>
  ),

  gradient: [
    {
      x1: "158.5",
      x2: "29",
      y1: "12.5",
      y2: "200",
      type: "linear",
      stops: [
        { color: "#0E6FFF", offset: 0 },
        { color: "#0B9DFF", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("rectangle-9", data);
export { data, Component as default };
