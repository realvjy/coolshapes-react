import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Polygon7: ShapeType = forwardRef((props, ref) => {
  const shapeId = "polygon-7";
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <mask
        id={maskId}
        style={{ maskType: "alpha" }}
        width="182"
        height="200"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse">
        <path
          fill="#fff"
          d="M77.449 3.601a27.296 27.296 0 0127.102 0l63.805 36.514C176.796 44.945 182 53.9 182 63.594v72.812c0 9.694-5.204 18.649-13.644 23.479l-63.805 36.514a27.3 27.3 0 01-27.102 0l-63.805-36.514C5.204 155.055 0 146.1 0 136.406V63.594c0-9.694 5.204-18.649 13.644-23.48L77.45 3.602z"></path>
      </mask>
      <g mask={`url(#${maskId})`}>
        <path fill="#fff" d="M191 0H-9v200h200V0z"></path>
        <path fill="#0E6FFF" d="M191 0H-9v200h200V0z"></path>
        <g filter="url(#filter0_f_748_4356)">
          <path fill="#8F5BFF" d="M200 126H-18v108h218V126z"></path>
          <ellipse cx="78" cy="57.5" fill="#00F0FF" rx="59" ry="34.5"></ellipse>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4356"
          width="338"
          height="331"
          x="-78"
          y="-37"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4356"
            stdDeviation="30"></feGaussianBlur>
        </filter>
      </defs>
    </ShapeBase>
  );
});

Polygon7.displayName = "Polygon7";
export { Polygon7 };
