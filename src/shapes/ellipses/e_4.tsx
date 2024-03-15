import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Ellipse4: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "ellipse-4";

  return (
    <ShapeBase {...props} shapeName={ShapeId} ref={ref}>
      <g clipPath={`url(#cs_clip_1_${ShapeId})`}>
        <mask
          id={`cs_mask_1_${ShapeId}`}
          style={{ maskType: "alpha" }}
          width="200"
          height="201"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M149.999 50c0 27.614-22.386 50-50 50s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50zM149.999 150c0 27.615-22.386 50-50 50s-50-22.385-50-50c0-27.614 22.386-50 50-50s50 22.386 50 50z"></path>
          <path
            fill="#fff"
            d="M0 200.001a50 50 0 000-100v100zM200 200.001a49.997 49.997 0 01-50-50 49.997 49.997 0 0150-50v100zM0 100.001A50 50 0 000 0v100.001z"></path>
          <path fill="#fff" d="M200 100.001A50 50 0 11200 0v100.001z"></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#0E6FFF" d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4779)">
            <path fill="#8F5BFF" d="M211 127H-11v116h222V127z"></path>
            <ellipse
              cx="88"
              cy="23.5"
              fill="#00F0FF"
              rx="112"
              ry="45.5"></ellipse>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4779"
          width="355"
          height="385"
          x="-84"
          y="-82"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4779"
            stdDeviation="30"></feGaussianBlur>
        </filter>
        <clipPath id={`cs_clip_1_${ShapeId}`}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Ellipse4.displayName = "Ellipse4";
export { Ellipse4 };
