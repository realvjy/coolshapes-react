import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Number3: ShapeType = forwardRef((props, ref) => {
  const shapeId = "number-3";
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <mask
        id={maskId}
        style={{ maskType: "alpha" }}
        width="180"
        height="200"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          d="M0 0v70h25v60H0v70h125c30.376 0 55-24.624 55-55 0-18.602-9.234-35.046-23.369-45C170.766 90.046 180 73.602 180 55c0-30.376-24.624-55-55-55H0z"
        ></path>
      </mask>
      <g mask={`url(#${maskId})`}>
        <path fill="#fff" d="M190 0H-10v200h200V0z"></path>
        <path fill="#07FFE1" d="M190 0H-10v200h200V0z"></path>
        <path
          fill="url(#paint0_linear_880_3324)"
          d="M190 0H-10v200h200V0z"
        ></path>
        <g filter="url(#filter0_f_880_3324)">
          <ellipse
            cx="135.429"
            cy="29.977"
            fill="#FFD749"
            rx="54.993"
            ry="57"
            transform="rotate(-33.875 135.429 29.977)"
          ></ellipse>
          <ellipse cx="82" cy="214.5" fill="#06F" rx="86" ry="42.5"></ellipse>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_880_3324"
          width="335.059"
          height="423.414"
          x="-74"
          y="-96.414"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_880_3324"
            stdDeviation="35"
          ></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_880_3324"
          x1="28"
          x2="109"
          y1="14.5"
          y2="181.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE500"></stop>
          <stop offset="1" stopColor="#07FFE1"></stop>
        </linearGradient>
      </defs>
    </ShapeBase>
  );
});

Number3.displayName = "Number3";
export { Number3 };
