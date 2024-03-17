import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Wheel4: ShapeType = forwardRef((props, ref) => {
  const shapeId = "wheel-4";
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
            fillRule="evenodd"
            d="M120 0H80v51.716L43.431 15.147 15.148 43.431 51.716 80H0v40h51.716l-36.569 36.568 28.285 28.285L80 148.284V200h40v-51.716l36.569 36.569 28.284-28.284L148.284 120H200V80h-51.716l36.569-36.569-28.284-28.284L120 51.716V0z"
            clipRule="evenodd"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#F2371F"
            fillOpacity="0.371"
            d="M200 0H0v200h200V0z"></path>
          <g filter={`url(#filter0_f_748_${shapeId})`}>
            <path
              fill="#EE46D3"
              d="M125.125 32.625H14.375v133.25h110.75V32.625z"></path>
            <path fill="#18A0FB" d="M182.75 18.25H54.25v140h128.5v-140z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id={`filter0_f_748_${shapeId}`}
          width="293.375"
          height="272.625"
          x="-48.125"
          y="-44.25"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result={`effect1_foregroundBlur_748_${shapeId}`}
            stdDeviation="31.25"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Wheel4.displayName = "Wheel4";
export { Wheel4 };
