import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M100 100L0 42v116l100-58zm0 0L158 0H42l58 100zm0 0l100-58v116l-100-58zm0 0l58 100H42l58-100z",
  blur: 40,
  gradientShapes: (
    <>
      <path fill="#FF37BB" d="M174 34H26v175h148V34z"></path>
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
        { color: "#00F0FF", offset: "1" },
      ],
    },
  ],
};
const Component = createShapeComponent("triangle-11", data);
export { data, Component as default };
