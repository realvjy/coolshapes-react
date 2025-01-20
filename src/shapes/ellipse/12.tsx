import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: (
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M100 150c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50zm0 50c55.228 0 100-44.772 100-100S155.228 0 100 0 0 44.772 0 100s44.772 100 100 100z"
      clipRule="evenodd"
    />
  ),
  blur: 40,
  gradientShapes: (
    <>
      <path fill="#FFE500" d="M110 32H18v68h92V32z"></path>
      <path fill="#FF001F" d="M188-24H15v98h173v-98z"></path>
      <path fill="#18A0FB" d="M175 70H5v156h170V70z"></path>
      <path fill="#FF00D6" d="M230 51H100v103h130V51z"></path>
    </>
  ),
  opacity: 0.33,
  fill: "#FAFF02",
  gradient: [],
};
const Component = createShapeComponent("ellipse-12", data);
export { data, Component as default };
