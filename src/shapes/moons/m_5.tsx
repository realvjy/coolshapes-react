import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Moon5: ShapeType = forwardRef((props, ref) => {
  const shapeId = "moon-5";
  const clipId = `cs_clip_1_${shapeId}`;
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "alpha" }}
          width="200"
          height="154"
          x="0"
          y="23"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M50 102a75 75 0 00150 0H50zM0 98a75 75 0 11150 0H0z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#FF6C02"
            fillOpacity="0.19"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4518)">
            <path fill="#FF58E4" d="M112-30H-10v130h122V-30z"></path>
            <path fill="#FFE500" d="M204 71H100v129h104V71z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4518"
          width="339"
          height="355"
          x="-72.5"
          y="-92.5"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4518"
            stdDeviation="31.25"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Moon5.displayName = "Moon5";
export { Moon5 };
