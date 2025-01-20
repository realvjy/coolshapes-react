import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M180 40c0-22.091-35.817-40-80-40S20 17.909 20 40c0 11.947 10.475 22.67 27.084 30C30.474 77.33 20 88.053 20 100s10.475 22.671 27.084 30C30.474 137.329 20 148.053 20 160c0 22.091 35.817 40 80 40s80-17.909 80-40c0-11.947-10.475-22.671-27.084-30C169.525 122.671 180 111.947 180 100s-10.475-22.67-27.084-30C169.525 62.67 180 51.947 180 40z",
  blur: 30,
  gradientShapes: (
    <>
      <path fill="#8F5BFF" d="M222 126H0v108h222V126z"></path>
      <ellipse cx="100" cy="9.5" fill="#00F0FF" rx="100" ry="34.5"></ellipse>
    </>
  ),

  fill: "#0E6FFF",
  gradient: [],
};
const Component = createShapeComponent("flower-8", data);
export { data, Component as default };
