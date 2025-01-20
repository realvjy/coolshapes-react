import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: "M200 100l-50 87H50L0 100l50-87h100l50 87z",
  blur: 31.25,
  gradientShapes: (
    <>
      <path fill="#00C5DF" d="M176.75 67.875H60v118h116.75v-118z"></path>
      <path fill="#FFC700" d="M175.75 73H24v100.5h151.75V73z"></path>
      <path fill="#1BC47D" d="M222.125 26H90v101.75h132.125V26z"></path>
      <path
        fill="#00C5DF"
        d="M205.375 91.625H78.25v124.5h127.125v-124.5z"></path>
    </>
  ),
  opacity: 0.2,
  fill: "#F2371F",
  gradient: [],
};
const Component = createShapeComponent("polygon-2", data);
export { data, Component as default };
