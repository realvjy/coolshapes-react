import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Number8: ShapeType = forwardRef((props, ref) => {
  const shapeId = "number-8";
  const maskId = `cs_mask_1_${shapeId}`;
  const clipId = `cs_clip_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "alpha" }}
          width="180"
          height="200"
          x="10"
          y="0"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M190 55c0-30.376-24.624-55-55-55H65C34.624 0 10 24.624 10 55c0 18.602 9.235 35.046 23.37 45C19.234 109.954 10 126.398 10 145c0 30.376 24.624 55 55 55h70c30.376 0 55-24.624 55-55 0-18.602-9.234-35.046-23.369-45C180.766 90.046 190 73.602 190 55z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_880_3378)"
            fillOpacity="0.55"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_880_3378)">
            <path fill="#07FFE1" d="M218 145H112v70h106v-70z"></path>
            <path
              fill="#FFE500"
              fillOpacity="0.74"
              d="M143-29H58V91h85V-29z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_880_3378"
          width="285"
          height="369"
          x="-4.5"
          y="-91.5"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_880_3378"
            stdDeviation="31.25"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_880_3378"
          x1="162"
          x2="49.5"
          y1="38"
          y2="150.5"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF1F00"></stop>
          <stop offset="1" stopColor="#FF58E4"></stop>
        </linearGradient>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Number8.displayName = "Number8";
export { Number8 };
