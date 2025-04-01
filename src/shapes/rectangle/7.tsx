import * as React from "react";
import { createShapeComponent } from "../../lib/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: (
    <>
      <path
        fill="#fff"
        d="M128 28L100 0 72 28l28 28 28-28zM56 100L28 72 0 100l28 28 28-28z"
      />
      <path
        fill="#fff"
        d="M128 100l36 36-28 28-36-36-36 36-28-28 36-36-36-36 28-28 36 36 36-36 28 28-36 36z"
      />
      <path
        fill="#fff"
        d="M172 72l28 28-28 28-28-28 28-28zM128 172l-28-28-28 28 28 28 28-28z"
      />
    </>
  ),
  gradient: "gradient-103",
};
const Component = createShapeComponent("rectangle-7", data);
export { data, Component as default };
