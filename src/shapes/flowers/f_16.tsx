import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Flower16: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-16";

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
            d="M92.718 92.718C85.974 81.132 76.452 64.052 72.784 53.96c-5.94-16.336-5.404-27.877-1.618-35.953C76.792 6.002 88.396 0 100 0s23.208 6.002 28.834 18.007c3.786 8.076 4.321 19.617-1.617 35.953-3.669 10.092-13.19 27.173-19.934 38.757 11.584-6.743 28.665-16.265 38.757-19.933 16.336-5.94 27.877-5.404 35.953-1.618C193.998 76.792 200 88.396 200 100s-6.002 23.208-18.007 28.834c-8.076 3.786-19.617 4.321-35.953-1.617-10.092-3.669-27.172-13.19-38.757-19.934 6.744 11.585 16.265 28.665 19.934 38.757 5.938 16.336 5.403 27.877 1.617 35.953C123.208 193.998 111.604 200 100 200s-23.208-6.002-28.834-18.007c-3.785-8.076-4.321-19.617 1.618-35.953 3.668-10.092 13.19-27.172 19.933-38.757-11.584 6.744-28.665 16.265-38.757 19.934-16.336 5.938-27.877 5.403-35.953 1.618C6.002 123.208 0 111.604 0 100s6.002-23.208 18.007-28.834c8.076-3.785 19.617-4.321 35.953 1.618 10.092 3.668 27.173 13.19 38.758 19.933z"></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#EE46D3" d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4564)">
            <path fill="#FFC700" d="M133 60H22v140h111V60z"></path>
            <path fill="#1BC47D" d="M213 100H82v93h131v-93z"></path>
            <path fill="#06F" d="M116 145H46v79h70v-79z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4564"
          width="316"
          height="289"
          x="-40.5"
          y="-2.5"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4564"
            stdDeviation="31.25"></feGaussianBlur>
        </filter>
        <clipPath id={`cs_clip_1_${ShapeId}`}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Flower16.displayName = "Flower16";
export { Flower16 };
