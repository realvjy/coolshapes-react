import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M34.315 0A117.157 117.157 0 10200 165.685L34.315 0z",
  blur: 31.25,
  gradientShapes: (
    <>
      <path fill="#FFC700" d="M137 60H26v140h111V60z"></path>
      <path fill="#1BC47D" d="M236 106H78v136h158V106z"></path>
    </>
  ),
  opacity: 0.79,
  shapeFill: "#EE46D3",
  gradient: [],
};
const Component = createShapeComponent("moon-14", data);
export { data, Component as default };
