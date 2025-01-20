import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M50 102a75 75 0 00150 0H50zM0 98a75 75 0 11150 0H0z",
  blur: 31.25,
  gradientShapes: (
    <>
      <path fill="#FF58E4" d="M112-30H-10v130h122V-30z"></path>
      <path fill="#FFE500" d="M204 71H100v129h104V71z"></path>
    </>
  ),
  opacity: 0.19,
  fill: "#FF6C02",
  gradient: [],
};
const Component = createShapeComponent("moon-5", data);
export { data, Component as default };
