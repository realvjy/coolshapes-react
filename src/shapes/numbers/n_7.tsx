import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Number7: ShapeType = forwardRef((props, ref) => {
  const shapeId = "number-7";
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
            d="M10 90h90v110h90V90c0-49.706-40.294-90-90-90H10v90z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#FFF500"
            fillOpacity="0.44"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_880_3367)">
            <ellipse
              cx="108.567"
              cy="90.71"
              fill="#FF00D6"
              rx="64.567"
              ry="44.696"></ellipse>
            <ellipse
              cx="100.5"
              cy="155"
              fill="#07FFE1"
              rx="39.5"
              ry="45"></ellipse>
            <path fill="#06F" d="M249 130H131v120h118V130z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_880_3367"
          width="365"
          height="363.986"
          x="-36"
          y="-33.986"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_880_3367"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Number7.displayName = "Number7";
export { Number7 };
