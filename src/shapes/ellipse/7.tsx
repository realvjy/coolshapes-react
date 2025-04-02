import * as React from "react";
import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";
import Gradient36 from "../../gradients/gradient-36";

const data: ComponentDataType = {
  shape: (
    <>
      <path
        fill="#fff"
        d="M200 100c0 55.228-44.772 100-100 100 37.555 0 68-30.445 68-68s-30.445-68-68-68-68 30.445-68 68 30.445 68 68 68C44.772 200 0 155.228 0 100S44.772 0 100 0s100 44.772 100 100z"></path>
      <path
        fill="#fff"
        d="M100 200c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48z"></path>{" "}
    </>
  ),
  fillOpacity: 0.6,
  fill: "#907CFF",
  gradient: Gradient36,
};
const Component = createShapeComponent("ellipse-7", data);
export { data, Component as default };
