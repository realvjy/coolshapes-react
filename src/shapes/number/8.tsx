import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M190 55c0-30.376-24.624-55-55-55H65C34.624 0 10 24.624 10 55c0 18.602 9.235 35.046 23.37 45C19.234 109.954 10 126.398 10 145c0 30.376 24.624 55 55 55h70c30.376 0 55-24.624 55-55 0-18.602-9.234-35.046-23.369-45C180.766 90.046 190 73.602 190 55z",
  blur: 31.25,
  gradientShapes: (
    <>
      <path fill="#07FFE1" d="M218 145H112v70h106v-70z"></path>
      <path fill="#FFE500" fillOpacity="0.74" d="M143-29H58V91h85V-29z"></path>
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
const Component = createShapeComponent("number-8", data);
export { data, Component as default };
