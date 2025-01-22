import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M54.42 55.018c15.258-26.783 22.887-40.175 32.976-44.454a32.263 32.263 0 0125.208 0c10.089 4.28 17.718 17.67 32.975 44.454l32.998 57.923c15.101 26.507 22.651 40.766 21.26 51.627-1.111 8.678-4.645 15.537-11.582 20.82C179.571 192 163.38 192 132.998 192H67.002c-30.382 0-46.573 0-55.256-6.612-6.938-5.283-10.472-12.142-11.583-20.82-1.39-10.861 6.16-25.12 21.26-51.627L54.42 55.018z",
  blur: 30,
  gradientShapes: (
    <>
      <path fill="#18A0FB" d="M135.366 3H-13v108h148.366V3z"></path>
      <path fill="#FF58E4" d="M196.58 109H-.55v116h197.13V109z"></path>
      <ellipse
        cx="85.159"
        cy="57.673"
        fill="#FFD749"
        rx="85.159"
        ry="57.673"
        transform="matrix(.83957 -.54325 .57155 .82057 54.44 63.525)"></ellipse>
    </>
  ),

  gradient: [
    {
      x1: "200",
      x2: "0",
      y1: "0",
      y2: "200",
      type: "linear",
      opacity: "0.55",
      stops: [
        { color: "#FF1F00", offset: 0 },
        { color: "#FFD600", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("triangle-5", data);
export { data, Component as default };
