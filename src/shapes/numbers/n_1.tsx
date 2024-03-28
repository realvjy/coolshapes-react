import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Number1: ShapeType = forwardRef((props, ref) => {
  const shapeId = "number-1";
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
        maskUnits="userSpaceOnUse">
        <path fill="#fff" d="M0 90h90v110h90V0H90L0 90z"></path>
      </mask>
      <g mask={`url(#${maskId})`}>
        <path fill="#fff" d="M190 0H-10v200h200V0z"></path>
        <path
          fill="#FFF500"
          fillOpacity="0.44"
          d="M190 0H-10v200h200V0z"></path>
        <g filter="url(#filter0_f_880_3302)">
          <ellipse cx="96" cy="22.5" fill="#FF00D6" rx="88" ry="49.5"></ellipse>
          <ellipse
            cx="54.5"
            cy="155"
            fill="#07FFE1"
            rx="64.5"
            ry="45"></ellipse>
          <path fill="#06F" d="M208 126H90v120h118V126z"></path>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_880_3302"
          width="378"
          height="433"
          x="-90"
          y="-107"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_880_3302"
            stdDeviation="40"></feGaussianBlur>
        </filter>
      </defs>
    </ShapeBase>
  );
});

Number1.displayName = "Number1";
export { Number1 };
