import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M0 0v100h99.984L0 0zm99.984 100L200 0H99.984v100zm0 0L200 200V100H99.984zm0 0L0 200h99.984V100z",
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
const Component = createShapeComponent("triangle-3", data);
export { data, Component as default };
