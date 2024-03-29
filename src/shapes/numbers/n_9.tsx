import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Number9: ShapeType = forwardRef((props, ref) => {
  const shapeId = "number-9";
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
          d="M180 110c0 49.706-40.294 90-90 90v-90H55C24.624 110 0 85.376 0 55S24.624 0 55 0h35c49.706 0 90 40.294 90 90v20z"
        ></path>
      </mask>
      <g mask={`url(#${maskId})`}>
        <path fill="#fff" d="M190 0H-10v200h200V0z"></path>
        <path
          fill="url(#paint0_linear_880_3390)"
          d="M190 0H-10v200h200V0z"
        ></path>
        <g filter="url(#filter0_f_880_3390)">
          <path fill="#FF37BB" d="M141 70H16v125h125V70z"></path>
          <path fill="#FF58E4" d="M174-29H53v59h121v-59z"></path>
          <path
            fill="#FFE500"
            fillOpacity="0.74"
            d="M198 40h-64v120h64V40z"
          ></path>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_880_3390"
          width="342"
          height="384"
          x="-64"
          y="-109"
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
            result="effect1_foregroundBlur_880_3390"
            stdDeviation="40"
          ></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_880_3390"
          x1="148.5"
          x2="19"
          y1="12.5"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0E6FFF"></stop>
          <stop offset="1" stopColor="#00F0FF"></stop>
        </linearGradient>
      </defs>
    </ShapeBase>
  );
});

Number9.displayName = "Number9";
export { Number9 };
