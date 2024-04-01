import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Number6: ShapeType = forwardRef((props, ref) => {
  const shapeId = "number-6";
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
            d="M10 90c0-49.706 40.294-90 90-90v90h35c30.376 0 55 24.624 55 55s-24.624 55-55 55h-35c-49.706 0-90-40.294-90-90V90z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="url(#paint0_linear_880_3356)"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_880_3356)">
            <path
              fill="#0CE548"
              fillOpacity="0.35"
              d="M196 91H82v102h114V91z"></path>
            <path
              fill="#FFE500"
              fillOpacity="0.74"
              d="M100 92H15v120h85V92z"></path>
            <path fill="#FF58E4" d="M136 29H75v113h61V29z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_880_3356"
          width="291"
          height="293"
          x="-40"
          y="-26"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_880_3356"
            stdDeviation="27.5"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_880_3356"
          x1="186.5"
          x2="37"
          y1="37"
          y2="186.5"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#0E6FFF" stopOpacity="0.51"></stop>
          <stop offset="1" stopColor="#00F0FF" stopOpacity="0.59"></stop>
        </linearGradient>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>{" "}
    </ShapeBase>
  );
});

Number6.displayName = "number6";
export { Number6 };
