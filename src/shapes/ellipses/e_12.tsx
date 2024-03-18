import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Ellipse12: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "ellipse-12";

  return (
    <ShapeBase {...props} shapeName={ShapeId} ref={ref}>
      <g clipPath={`url(#cs_clip_1_${ShapeId})`}>
        <mask
          id={`cs_mask_1_${ShapeId}`}
          style={{ maskType: "alpha" }}
          width="200"
          height="200"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M100 150c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50zm0 50c55.228 0 100-44.772 100-100S155.228 0 100 0 0 44.772 0 100s44.772 100 100 100z"
            clipRule="evenodd"></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#FAFF02"
            fillOpacity="0.33"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_844_2811)">
            <path fill="#FFE500" d="M110 32H18v68h92V32z"></path>
            <path fill="#FF001F" d="M188-24H15v98h173v-98z"></path>
            <path fill="#18A0FB" d="M175 70H5v156h170V70z"></path>
            <path fill="#FF00D6" d="M230 51H100v103h130V51z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_844_2811"
          width="385"
          height="410"
          x="-75"
          y="-104"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_844_2811"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <clipPath id={`cs_clip_1_${ShapeId}`}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Ellipse12.displayName = "Ellipse12";
export { Ellipse12 };
