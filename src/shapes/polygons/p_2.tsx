import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Polygon2: ShapeType = forwardRef((props, ref) => {
  const shapeId = "polygon-2";
  const clipId = `cs_clip_1_${shapeId}`;
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "alpha" }}
          width="200"
          height="174"
          x="0"
          y="13"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M200 100l-50 87H50L0 100l50-87h100l50 87z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#F2371F" fillOpacity="0.2" d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4396)">
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
          id="filter0_f_748_4396"
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
            result="effect1_foregroundBlur_748_4396"
            stdDeviation="31.25"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Polygon2.displayName = "Polygon2";
export { Polygon2 };
