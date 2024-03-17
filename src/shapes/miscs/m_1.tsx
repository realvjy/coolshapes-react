import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Misc1: ShapeType = forwardRef((props, ref) => {
  const shapeId = "misc-1";
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
            d="M50 100c27.614 0 50-22.386 50-50 0 27.608 22.375 49.99 49.98 50-27.605.011-49.98 22.392-49.98 50 0-27.614-22.386-50-50-50S0 122.386 0 150v50h50c27.614 0 50-22.386 50-50 0 27.614 22.386 50 50 50h50v-50c0-27.608-22.375-49.989-49.98-50C177.625 99.99 200 77.608 200 50V0h-50c-27.614 0-50 22.386-50 50 0-27.614-22.386-50-50-50H0v50c0 27.614 22.386 50 50 50z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#FFF9C5"
            fillOpacity="0.44"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_5063)">
            <path
              fill="#00F0FF"
              fillOpacity="0.85"
              d="M158 22H15v108h143V22z"></path>
            <path fill="#FF58E4" d="M209 101H52v116h157V101z"></path>
            <ellipse
              cx="156"
              cy="80"
              fill="#FFE500"
              fillOpacity="0.79"
              rx="83"
              ry="57"></ellipse>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_5063"
          width="344"
          height="315"
          x="-45"
          y="-38"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_5063"
            stdDeviation="30"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Misc1.displayName = "Misc1";
export { Misc1 };
