import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M100 0C86.193 0 75 11.193 75 25v14.29l-9.967-9.968c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.763-9.763 25.593 0 35.356L40 75H25C11.193 75 0 86.193 0 100s11.193 25 25 25h14l-9.744 9.744c-9.763 9.763-9.763 25.592 0 35.355 9.763 9.763 25.593 9.763 35.356 0L75 159.711V175c0 13.807 11.193 25 25 25s25-11.193 25-25v-15l10.744 10.744c9.763 9.763 25.592 9.763 35.355 0 9.763-9.763 9.763-25.593 0-35.356L160.711 125H175c13.807 0 25-11.193 25-25s-11.193-25-25-25h-15.289l10.967-10.967c9.763-9.763 9.763-25.592 0-35.355-9.763-9.763-25.593-9.763-35.356 0L125 39V25c0-13.807-11.193-25-25-25z",
  blur: 30,
  gradientShapes: (
    <>
      <path fill="#18A0FB" d="M131 3H-12v108h143V3z"></path>
      <path fill="#FF58E4" d="M190 109H0v116h190V109z"></path>
      <ellipse
        cx="153.682"
        cy="64.587"
        fill="#FFD749"
        rx="83"
        ry="57"
        transform="rotate(-33.875 153.682 64.587)"></ellipse>
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
const Component = createShapeComponent("flower-7", data);
export { data, Component as default };
