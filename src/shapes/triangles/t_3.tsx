import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Triangle3: ShapeType = forwardRef((props, ref) => {
  const shapeId = "triangle-3";
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
            d="M0 0v100h99.984L0 0zm99.984 100L200 0H99.984v100zm0 0L200 200V100H99.984zm0 0L0 200h99.984V100z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#F2371F" fillOpacity="0.2" d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4957)">
            <path fill="#00C5DF" d="M176.75 67.875H60v118h116.75v-118z"></path>
            <path fill="#FFC700" d="M175.75 73H24v100.5h151.75V73z"></path>
            <path fill="#1BC47D" d="M222.125 26H90v101.75h132.125V26z"></path>
            <path
              fill="#00C5DF"
              d="M205.375 91.625H78.25v124.5h127.125v-124.5z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4957"
          width="323.125"
          height="315.125"
          x="-38.5"
          y="-36.5"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4957"
            stdDeviation="31.25"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Triangle3.displayName = "Triangle3";
export { Triangle3 };
