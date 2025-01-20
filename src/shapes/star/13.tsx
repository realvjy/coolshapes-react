import * as React from "react";
import { createShapeComponent } from "../../lib/utils/shape";
import { ComponentDataType } from "../../lib/types";

const data: ComponentDataType = {
  shape: (
    <>
      <path
        fill="#fff"
        d="M2.178 12.427C.158 5.905-.85 2.644.897.897 2.644-.85 5.905.159 12.427 2.177l50.984 15.781a24.58 24.58 0 0116.213 16.213L100 100 34.17 79.624a24.58 24.58 0 01-16.213-16.213L2.178 12.427z"></path>
      <path
        fill="#fff"
        d="M100.002 100l65.826 20.375a24.578 24.578 0 0116.213 16.213l15.781 50.984c2.019 6.522 3.028 9.783 1.281 11.53-1.748 1.748-5.009.738-11.53-1.28l-50.984-15.781a24.58 24.58 0 01-16.213-16.213l-20.375-65.827-20.375 65.828a24.582 24.582 0 01-16.213 16.213l-50.984 15.78c-6.522 2.019-9.783 3.028-11.53 1.281-1.748-1.747-.739-5.008 1.28-11.53l15.78-50.984a24.58 24.58 0 0116.214-16.213L100 100l20.376-65.828a24.58 24.58 0 0116.213-16.213l50.984-15.78c6.522-2.02 9.783-3.029 11.53-1.281 1.747 1.747.738 5.008-1.281 11.53l-15.78 50.984a24.582 24.582 0 01-16.213 16.213L100.002 100z"
      />
    </>
  ),
  blur: 40,
  gradientShapes: (
    <>
      <ellipse cx="100" cy="10.5" fill="#FF00D6" rx="88" ry="49.5"></ellipse>
      <ellipse cx="57.5" cy="160" fill="#07FFE1" rx="64.5" ry="45"></ellipse>
      <path fill="#06F" d="M211 131H93v120h118V131z"></path>
    </>
  ),
  opacity: 0.44,
  fill: "#FFF500",
  gradient: [],
};
const Component = createShapeComponent("star-13", data);
export { data, Component as default };
