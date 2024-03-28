import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Number6: ShapeType = forwardRef((props, ref) => {
  const shapeId = "number-6";
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
          d="M0 90C0 40.294 40.294 0 90 0v90h35c30.376 0 55 24.624 55 55s-24.624 55-55 55H90c-49.706 0-90-40.294-90-90V90z"
        ></path>
      </mask>
      <g mask={`url(#${maskId})`}>
        <path fill="#fff" d="M190 0H-10v200h200V0z"></path>
        <path
          fill="url(#paint0_linear_880_3357)"
          d="M190 0H-10v200h200V0z"
        ></path>
        <g filter="url(#filter0_f_880_3357)">
          <path
            fill="#0CE548"
            fillOpacity="0.35"
            d="M186 91H72v102h114V91z"
          ></path>
          <path
            fill="#FFE500"
            fillOpacity="0.74"
            d="M90 92H5v120h85V92z"
          ></path>
          <path fill="#FF58E4" d="M126 29H65v113h61V29z"></path>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_880_3357"
          width="291"
          height="293"
          x="-50"
          y="-26"
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
            result="effect1_foregroundBlur_880_3357"
            stdDeviation="27.5"
          ></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_880_3357"
          x1="176.5"
          x2="27"
          y1="37"
          y2="186.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0E6FFF" stopOpacity="0.51"></stop>
          <stop offset="1" stopColor="#00F0FF" stopOpacity="0.59"></stop>
        </linearGradient>
      </defs>
    </ShapeBase>
  );
});

Number6.displayName = "number6";
export { Number6 };
