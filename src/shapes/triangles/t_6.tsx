import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Triangle6: ShapeType = forwardRef((props, ref) => {
  const shapeId = "triangle-6";
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
            d="M200 0v200L0 0h200zM100 100v100L0 100h100z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#0E6FFF" d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4934)">
            <path fill="#8F5BFF" d="M243.892 107.197h-222v116h222v-116z"></path>
            <ellipse
              cx="68.935"
              cy="-27.395"
              fill="#00F0FF"
              rx="111.935"
              ry="63.605"></ellipse>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4934"
          width="406.892"
          height="434.197"
          x="-103"
          y="-151"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4934"
            stdDeviation="30"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Triangle6.displayName = "Triangle6";
export { Triangle6 };
