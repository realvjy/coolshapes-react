import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";

import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M58.579 0L100 31.485 141.421 0l7.027 51.552L200 58.58 168.515 100 200 141.421l-51.552 7.027L141.421 200 100 168.515 58.579 200l-7.027-51.552L0 141.421 31.485 100 0 58.579l51.552-7.027L58.58 0z",
  blur: 40,
  gradientShapes: (
    <>
      <ellipse cx="106" cy="22.5" fill="#FF00D6" rx="88" ry="49.5"></ellipse>
      <ellipse cx="64.5" cy="155" fill="#07FFE1" rx="64.5" ry="45"></ellipse>
      <path fill="#06F" d="M218 126H100v120h118V126z"></path>
    </>
  ),
  opacity: 0.44,
  shapeFill: "#FFF500",
  gradient: [],
};
const Component = createShapeComponent("star-3", data);
export { data, Component as default };
