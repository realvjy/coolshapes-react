import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Number4: ShapeType = forwardRef((props, ref) => {
  const shapeId = "number-4";
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
          <path fill="#fff" d="M100 160H10V90l90-90h90v200h-90v-40z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#FFF500"
            fillOpacity="0.54"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_880_3334)">
            <ellipse
              cx="89.5"
              cy="30.5"
              fill="#FF00D6"
              rx="65.5"
              ry="51.5"></ellipse>
            <ellipse
              cx="26.5"
              cy="149.5"
              fill="#07FFE1"
              rx="73.5"
              ry="85.5"></ellipse>
            <path fill="#06F" d="M211 119H93v132h118V119z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_880_3334"
          width="418"
          height="432"
          x="-127"
          y="-101"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_880_3334"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Number4.displayName = "Number4";
export { Number4 };
