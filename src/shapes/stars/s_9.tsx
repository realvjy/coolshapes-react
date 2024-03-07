import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Star9: ShapeType = forwardRef((props, ref) => {
  const shapeId = "star-9";
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
            d="M199.686.315C144.773 55.57 144.877 144.877 200 200c-55.123-55.123-144.432-55.229-199.686-.315C55.227 144.432 55.123 55.123 0 0c55.123 55.123 144.432 55.23 199.686.315z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_${shapeId})"
            d="M200 0H0v200h200V0z"></path>
          <g filter={`url(#filter0_f_748_${shapeId})`}>
            <ellipse
              cx="143.777"
              cy="159.535"
              fill="#FF58E4"
              rx="91.994"
              ry="58.126"
              transform="rotate(-33.875 143.777 159.535)"></ellipse>
            <ellipse
              cx="64.482"
              cy="49.587"
              fill="#00F0FF"
              rx="69.531"
              ry="47.75"
              transform="rotate(-26.262 64.482 49.587)"></ellipse>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id={`filter0_f_748_${shapeId}`}
          width="388.137"
          height="393.095"
          x="-81.372"
          y="-83.144"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result={`effect1_foregroundBlur_748_${shapeId}`}
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <linearGradient
          id={`paint0_linear_${shapeId}`}
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

Star9.displayName = "Star9";
export { Star9 };
