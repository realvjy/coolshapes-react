import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape:
    "M149.921 50C122.336 50.086 100 72.44 100 100c0-27.561-22.336-49.915-49.921-50C77.664 49.915 100 27.562 100 0c0 27.562 22.336 49.915 49.921 50zM99.842 100c-27.585.086-49.921 22.439-49.921 50 0-27.561-22.336-49.915-49.921-50 27.585-.085 49.921-22.438 49.921-50 0 27.562 22.336 49.915 49.921 50zM200 100c-27.585.086-49.921 22.439-49.921 50 0-27.561-22.336-49.915-49.921-50 27.585-.085 49.921-22.438 49.921-50 0 27.562 22.336 49.915 49.921 50zM149.921 150c-27.585.086-49.921 22.439-49.921 50 0-27.561-22.336-49.915-49.921-50C77.664 149.915 100 127.562 100 100c0 27.562 22.336 49.915 49.921 50z",
  blur: 31.25,
  gradientShapes: (
    <>
      <path fill="#F2371F" d="M121 15H15v92h106V15z"></path>
      <path fill="#00F0FF" d="M173 90H58v86h115V90z"></path>
    </>
  ),

  fill: "#EE46D3",
  gradient: [],
};
const Component = createShapeComponent("star-7", data);
export { data, Component as default };
