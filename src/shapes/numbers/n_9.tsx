import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Number9: ShapeType = forwardRef((props, ref) => {
  const shapeId = "number-9";
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
            d="M190 110c0 49.706-40.294 90-90 90v-90H65c-30.376 0-55-24.624-55-55S34.624 0 65 0h35c49.706 0 90 40.294 90 90v20z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_880_3389)"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_880_3389)">
            <path fill="#FF37BB" d="M151 70H26v125h125V70z"></path>
            <path fill="#FF58E4" d="M184-29H63v59h121v-59z"></path>
            <path
              fill="#FFE500"
              fillOpacity="0.74"
              d="M208 40h-64v120h64V40z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_880_3389"
          width="342"
          height="384"
          x="-54"
          y="-109"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_880_3389"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_880_3389"
          x1="158.5"
          x2="29"
          y1="12.5"
          y2="200"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#0E6FFF"></stop>
          <stop offset="1" stopColor="#00F0FF"></stop>
        </linearGradient>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Number9.displayName = "Number9";
export { Number9 };
