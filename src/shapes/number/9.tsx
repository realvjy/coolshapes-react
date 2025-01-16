import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M190 110c0 49.706-40.294 90-90 90v-90H65c-30.376 0-55-24.624-55-55S34.624 0 65 0h35c49.706 0 90 40.294 90 90v20z",
  blur: 40,
  gradientShapes: (
    <>
      <path fill="#FF37BB" d="M151 70H26v125h125V70z"></path>
      <path fill="#FF58E4" d="M184-29H63v59h121v-59z"></path>
      <path fill="#FFE500" fillOpacity="0.74" d="M208 40h-64v120h64V40z"></path>
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
const Component = createShapeComponent("number-9", data);
export { data, Component as default };
