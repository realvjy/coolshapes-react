import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";

import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M100 5l27.194 67.642L200 77.573l-56 46.737L161.803 195 100 156.242 38.197 195 56 124.31 0 77.573l72.806-4.93L100 5z",
  blur: 35,
  gradientShapes: (
    <>
      <path fill="#06F" d="M224 5H96v113h128V5z"></path>
      <path fill="#FF00D6" d="M99 72H0v97h99V72z"></path>
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
const Component = createShapeComponent("star-2", data);
export { data, Component as default };
