import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Flower9: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-9";

  return (
    <ShapeBase {...props} shapeName={ShapeId} ref={ref}>
      <g clipPath={`url(#cs_clip_1_${ShapeId})`}>
        <mask
          id={`cs_mask_1_${ShapeId}`}
          style={{ maskType: "alpha" }}
          width="200"
          height="200"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M50 0C22.386 0 0 22.386 0 50s22.386 50 50 50c-27.614 0-50 22.386-50 50s22.386 50 50 50h100c27.614 0 50-22.386 50-50s-22.386-50-50-50c27.614 0 50-22.386 50-50S177.614 0 150 0H50z"></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_748_4634)"
            fillOpacity="0.55"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4634)">
            <path fill="#06F" d="M214 0H92v132.75h122V0z"></path>
            <path fill="#FF58E4" d="M121 62H0v114h121V62z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4634"
          width="354"
          height="316"
          x="-70"
          y="-70"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4634"
            stdDeviation="35"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4634"
          x1="162"
          x2="49.5"
          y1="38"
          y2="150.5"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF1F00"></stop>
          <stop offset="1" stopColor="#FF58E4"></stop>
        </linearGradient>
        <clipPath id={`cs_clip_1_${ShapeId}`}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>{" "}
    </ShapeBase>
  );
});

Flower9.displayName = "Flower9";
export { Flower9 };
