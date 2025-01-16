import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M60.87 29.427c14.184-35.236 64.076-35.236 78.26 0a25.028 25.028 0 0021.519 15.608c37.828 2.56 53.333 49.971 24.205 74.248a24.967 24.967 0 00-8.222 25.283c9.275 36.775-31.175 65.993-63.313 45.867a25.138 25.138 0 00-26.638 0c-32.138 20.126-72.587-9.092-63.313-45.867a24.967 24.967 0 00-8.221-25.283C-13.983 95.006 1.522 47.594 39.35 45.035A25.028 25.028 0 0060.87 29.427z",
  blur: 40,
  gradientShapes: (
    <>
      <ellipse cx="106" cy="22.5" fill="#FF00D6" rx="88" ry="49.5"></ellipse>
      <ellipse cx="55.5" cy="160" fill="#07FFE1" rx="64.5" ry="45"></ellipse>
      <path fill="#FFC700" d="M218 126H100v120h118V126z"></path>
    </>
  ),
  opacity: 0.44,
  shapeFill: "#FFF500",
  gradient: [],
};
const Component = createShapeComponent("flower-14", data);
export { data, Component as default };
