import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../types";

const data: ComponentDataType = {
  shape:
    "M15.535 188.281c40.654-30.669 60.98-46.003 84.465-46.003 23.485 0 43.812 15.334 84.466 46.003L200 200l-11.719-15.534c-30.669-40.654-46.003-60.981-46.003-84.466 0-23.484 15.334-43.811 46.003-84.465L200 0l-15.534 11.72C143.812 42.388 123.485 57.722 100 57.722c-23.484 0-43.811-15.334-84.465-46.003L0 0l11.72 15.535C42.387 56.19 57.721 76.515 57.721 100c0 23.485-15.334 43.812-46.002 84.465L0 200l15.535-11.719z",
  blur: 30,
  gradientShapes: (
    <>
      <ellipse cx="100" cy="130" fill="#FFD749" rx="82" ry="43"></ellipse>
      <ellipse cx="41" cy="167" fill="#F2371F" rx="82" ry="43"></ellipse>
    </>
  ),
  opacity: 0,
  shapeFill: "#0E6FFF",
  gradient: [],
};

const Component = createShapeComponent("star-4", data);
export { data, Component as default };
