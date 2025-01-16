import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M170.71 170.711A100.001 100.001 0 01100 200v-99.775C99.877 127.736 77.54 150 50 150c-27.614 0-50-22.386-50-50s22.386-50 50-50c27.54 0 49.878 22.264 50 49.775V0a99.999 99.999 0 0170.71 170.711z",
  blur: 40,
  gradientShapes: (
    <>
      <path fill="#18A0FB" d="M212.25-20H100v139.75h112.25V-20z"></path>
      <path fill="#907CFF" d="M129.875 0H11v128.25h118.875V0z"></path>
      <path fill="#EE46D3" d="M84 75v142h136V75H84z"></path>
    </>
  ),
  opacity: 0.6,
  shapeFill: "#907CFF",
  gradient: [],
};
const Component = createShapeComponent("moon-8", data);
export { data, Component as default };
