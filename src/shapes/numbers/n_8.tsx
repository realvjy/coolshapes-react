import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Number8: ShapeType = forwardRef((props, ref) => {
  const shapeId = "number-8";
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
          d="M180 55c0-30.376-24.624-55-55-55H55C24.624 0 0 24.624 0 55c0 18.602 9.234 35.046 23.37 45C9.233 109.954 0 126.398 0 145c0 30.376 24.624 55 55 55h70c30.376 0 55-24.624 55-55 0-18.602-9.234-35.046-23.369-45C170.766 90.046 180 73.602 180 55z"
        ></path>
      </mask>
      <g mask={`url(#${maskId})`}>
        <path fill="#fff" d="M190 0H-10v200h200V0z"></path>
        <path
          fill="url(#paint0_linear_880_3379)"
          fillOpacity="0.55"
          d="M190 0H-10v200h200V0z"
        ></path>
        <g filter="url(#filter0_f_880_3379)">
          <path fill="#07FFE1" d="M208 145H102v70h106v-70z"></path>
          <path
            fill="#FFE500"
            fillOpacity="0.74"
            d="M133-29H48V91h85V-29z"
          ></path>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_880_3379"
          width="285"
          height="369"
          x="-14.5"
          y="-91.5"
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
            result="effect1_foregroundBlur_880_3379"
            stdDeviation="31.25"
          ></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_880_3379"
          x1="152"
          x2="39.5"
          y1="38"
          y2="150.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF1F00"></stop>
          <stop offset="1" stopColor="#FF58E4"></stop>
        </linearGradient>
      </defs>
    </ShapeBase>
  );
});

Number8.displayName = "Number8";
export { Number8 };
