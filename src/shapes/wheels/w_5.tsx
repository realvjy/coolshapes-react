import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Wheel5: ShapeType = forwardRef((props, ref) => {
  const shapeId = "wheel-5";
  const clipId = `cs_clip_1_${shapeId}`;
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "alpha" }}
          width="200"
          height="200"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M108 0H92v80.686L34.946 23.632 23.632 34.946 80.686 92H0v16h80.686l-57.054 57.054 11.314 11.314L92 119.314V200h16v-80.686l57.053 57.053 11.314-11.313L119.313 108H200V92h-80.686l57.053-57.054-11.313-11.313L108 80.686V0z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4824)"
            fillOpacity="0.75"
            d="M200 0H0v200h200V0z"></path>
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_748_4824"
          x1="200"
          x2="0"
          y1="0"
          y2="200"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF1F00"></stop>
          <stop offset="1" stopColor="#FFD600"></stop>
        </linearGradient>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Wheel5.displayName = "Wheel5";
export { Wheel5 };
