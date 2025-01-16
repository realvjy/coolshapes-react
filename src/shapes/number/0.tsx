import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M100 110c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0 90c55.228 0 100-44.772 100-100S155.228 0 100 0 0 44.772 0 100s44.772 100 100 100z",
  blur: 35,
  gradientShapes: (
    <>
      <path fill="#06F" d="M115-19H-13V94h128V-19z"></path>
      <path fill="#FF00D6" d="M87 91H-20v99H87V91z"></path>
      <path fill="#FFD749" d="M168 125H87v75h81v-75z"></path>
      <path fill="#07FFE1" d="M200-22H93v99h107v-99z"></path>
    </>
  ),

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
const Component = createShapeComponent("number-0", data);
export { data, Component as default };
