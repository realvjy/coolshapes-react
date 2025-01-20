import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M140.395 59.605C175.502 64.644 200 77.28 200 100c0 22.72-24.498 35.356-59.605 40.395C135.356 175.502 122.72 200 100 200c-22.72 0-35.356-24.498-40.395-59.605C24.498 135.356 0 122.72 0 100c0-22.72 24.498-35.356 59.605-40.395C64.644 24.498 77.28 0 100 0c22.72 0 35.356 24.498 40.395 59.605z",
  blur: 31.25,
  gradientShapes: (
    <>
      <path fill="#FFC700" d="M194 128H41v118h153V128z"></path>
      <path fill="#FFE500" d="M106 13H21v87h85V13z"></path>
      <path fill="#00C5DF" d="M95 56H-23v87H95V56z"></path>
    </>
  ),
  opacity: 0.19,
  fill: "#FF6C02",
  gradient: [],
};
const Component = createShapeComponent("flower-5", data);
export { data, Component as default };
