import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Misc11: ShapeType = forwardRef((props, ref) => {
  const shapeId = "misc-11";
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
          <path fill="#fff" d="M200 100L100 0v70H0v60h100v70l100-100z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#07FFE1" d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_844_2825)">
            <path fill="#FFE500" d="M193 97H23v103h170V97z"></path>
            <path fill="#FF37BB" d="M116 54H-41v92h157V54z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_844_2825"
          width="394"
          height="306"
          x="-121"
          y="-26"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_844_2825"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Misc11.displayName = "Misc11";
export { Misc11 };
