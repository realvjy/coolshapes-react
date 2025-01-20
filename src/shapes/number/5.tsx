import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M130 200c33.137 0 60-26.863 60-60v-10c0-33.129-26.849-59.987-59.975-60H190V0H10v70c0 33.125 26.844 59.981 59.965 60H10c0 38.66 31.34 70 70 70h50z",
  blur: 31.25,
  gradientShapes: (
    <>
      <path fill="#00F0FF" d="M195-58H0v92h195v-92z"></path>
      <path fill="#1400FF" d="M194 158H24v56h170v-56z"></path>
      <path fill="#FF58E4" d="M190-14H69v124h121V-14z"></path>
      <ellipse
        cx="157.5"
        cy="140.5"
        fill="#FFE500"
        fillOpacity="0.74"
        rx="50.5"
        ry="34.5"></ellipse>
    </>
  ),

  fill: "#0E6FFF",
  gradient: [],
};
const Component = createShapeComponent("number-5", data);
export { data, Component as default };
