import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M200 100c0 55.228-44.772 100-100 100 37.555 0 68-30.445 68-68s-30.445-68-68-68-68 30.445-68 68 30.445 68 68 68C44.772 200 0 155.228 0 100S44.772 0 100 0s100 44.772 100 100z",
  blur: 40,
  gradientShapes: (
    <>
      <path fill="#18A0FB" d="M212.25-15H100v139.75h112.25V-15z"></path>
      <path fill="#907CFF" d="M133.875-7H15v128.25h118.875V-7z"></path>
      <path fill="#EE46D3" d="M223 68H81v146h142V68z"></path>
    </>
  ),
  opacity: 0.6,
  shapeFill: "#907CFF",
  gradient: [],
};
const Component = createShapeComponent("ellipse-7", data);
export { data, Component as default };
