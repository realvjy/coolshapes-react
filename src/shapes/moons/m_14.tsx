import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Moon14: ShapeType = forwardRef((props, ref) => {
  const shapeId = "moon-14"; // Updated shapeId
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
            d="M34.315 0A117.157 117.157 0 10200 165.685L34.315 0z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          {" "}
          <path fill="#000" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#EE46D3"
            fillOpacity="0.79"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4428)">
            <path fill="#FFC700" d="M137 60H26v140h111V60z"></path>
            <path fill="#1BC47D" d="M236 106H78v136h158V106z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4428" // This ID remains unchanged as requested
          width="335"
          height="307"
          x="-36.5"
          y="-2.5"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4428"
            stdDeviation="31.25"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          {" "}
          {/* Updated to use clipId */}
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Moon14.displayName = "Moon14";
export { Moon14 };
