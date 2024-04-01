import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Polygon8: ShapeType = forwardRef((props, ref) => {
  const shapeId = "polygon-8";
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <mask
        id={maskId}
        style={{ maskType: "alpha" }}
        width="175"
        height="200"
        x="13"
        y="0"
        maskUnits="userSpaceOnUse">
        <path
          fill="#fff"
          d="M100.397 0l87 50v100l-87 50-87-50V50l87-50z"></path>
      </mask>
      <g mask={`url(#${maskId})`}>
        <path fill="#00B2FF" d="M200 0H0v200h200V0z"></path>
        <path
          fill="url(#paint0_radial_748_4346)"
          d="M200 0H0v200h200V0z"></path>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_748_4346"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(-83.01 163.01 43.495) scale(184.874)"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#F7C617"></stop>
          <stop offset="1" stopColor="#FFF500" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </ShapeBase>
  );
});

Polygon8.displayName = "Polygon8";
export { Polygon8 };
