import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M0 0h40v40H0V0zM40 40h40v40H40V40zM0 80h40v40H0V80zM40 120h40v40H40v-40zM120 40h40v40h-40V40zM80 80h40v40H80V80zM0 160h40v40H0v-40zM160 80h40v40h-40V80zM80 0h40v40H80V0zM120 120h40v40h-40v-40zM80 160h40v40H80v-40zM160 0h40v40h-40V0zM160 160h40v40h-40v-40z",
  blur: 30,
  gradientShapes: (
    <>
      <path fill="#FF58E4" d="M190 109H0v116h190V109z"></path>
      <path fill="#00C5DF" d="M106-37H-33v150h139V-37z"></path>
      <ellipse
        cx="151.215"
        cy="65.167"
        fill="#FFD749"
        rx="94.157"
        ry="64.662"
        transform="rotate(-33.875 151.215 65.167)"></ellipse>
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
const Component = createShapeComponent("misc-7", data);
export { data, Component as default };
