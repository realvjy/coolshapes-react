import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Number4: ShapeType = forwardRef((props, ref) => {
  const shapeId = "number-4";
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
        <path fill="#fff" d="M90 160H0V90L90 0h90v200H90v-40z"></path>
      </mask>
      <g mask={`url(#${maskId})`}>
        <path fill="#fff" d="M190 0H-10v200h200V0z"></path>
        <path
          fill="#FFF500"
          fillOpacity="0.54"
          d="M190 0H-10v200h200V0z"
        ></path>
        <g filter="url(#filter0_f_880_3335)">
          <ellipse
            cx="79.5"
            cy="30.5"
            fill="#FF00D6"
            rx="65.5"
            ry="51.5"
          ></ellipse>
          <ellipse
            cx="16.5"
            cy="149.5"
            fill="#07FFE1"
            rx="73.5"
            ry="85.5"
          ></ellipse>
          <path fill="#06F" d="M201 119H83v132h118V119z"></path>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_880_3335"
          width="418"
          height="432"
          x="-137"
          y="-101"
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
            result="effect1_foregroundBlur_880_3335"
            stdDeviation="40"
          ></feGaussianBlur>
        </filter>
      </defs>
    </ShapeBase>
  );
});

Number4.displayName = "Number4";
export { Number4 };
