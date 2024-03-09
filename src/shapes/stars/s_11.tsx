import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Star11: ShapeType = forwardRef((props, ref) => {
  const shapeId = "star-11";
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
            d="M100 0c7.13 31.563 43.35 46.567 70.711 29.29C153.433 56.65 168.437 92.87 200 100c-31.563 7.13-46.567 43.35-29.289 70.711C143.35 153.433 107.13 168.437 100 200c-7.13-31.563-43.35-46.567-70.71-29.289C46.566 143.35 31.562 107.13 0 100c31.563-7.13 46.567-43.35 29.29-70.71C56.65 46.566 92.87 31.562 100 0z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4294)"
            fillOpacity="0.55"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4294)">
            <path fill="#18A0FB" d="M115 9H-28v131h143V9z"></path>
            <path fill="#FF58E4" d="M190 100H0v116h190V100z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4294"
          width="338"
          height="327"
          x="-88"
          y="-51"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4294"
            stdDeviation="30"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4294"
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

Star11.displayName = "Star11";
export { Star11 };
