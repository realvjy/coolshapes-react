import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Polygon7: ShapeType = forwardRef((props, ref) => {
  const shapeId = "polygon-7";
  const maskId = `cs_mask_1_${shapeId}`;
  const clipId = `cs_clip_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "alpha" }}
          width="182"
          height="200"
          x="9"
          y="0"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M86.449 3.601a27.296 27.296 0 0127.102 0l63.805 36.514C185.796 44.945 191 53.9 191 63.594v72.812c0 9.694-5.204 18.649-13.644 23.479l-63.805 36.514a27.3 27.3 0 01-27.102 0l-63.805-36.514C14.204 155.055 9 146.1 9 136.406V63.594c0-9.694 5.204-18.649 13.644-23.48L86.45 3.602z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#0E6FFF" d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4355)">
            <path fill="#8F5BFF" d="M209 126H-9v108h218V126z"></path>
            <ellipse
              cx="87"
              cy="57.5"
              fill="#00F0FF"
              rx="59"
              ry="34.5"></ellipse>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4355"
          width="338"
          height="331"
          x="-69"
          y="-37"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4355"
            stdDeviation="30"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>{" "}
    </ShapeBase>
  );
});

Polygon7.displayName = "Polygon7";
export { Polygon7 };
