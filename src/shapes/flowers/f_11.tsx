import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Flower11: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-11";

  return (
    <ShapeBase {...props} shapeName={ShapeId} ref={ref}>
      <g clipPath={`url(#cs_clip_1_${ShapeId})`}>
        <mask
          id={`cs_mask_1_${ShapeId}`}
          style={{ maskType: "alpha" }}
          width="180"
          height="200"
          x="10"
          y="0"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M80.255 32.5C76.024 17.5 81.765 0 100 0s23.976 17.5 19.745 32.5c-2.98 10.564-10.857 34.77-15.255 48.16-.81 2.468.826 5.064 3.076 6.371 2.249 1.306 5.248 1.362 6.985-.57 9.435-10.49 26.533-29.399 34.223-37.255 10.917-11.153 28.992-14.947 38.11.794 9.117 15.74-3.217 29.447-18.365 33.294-10.669 2.71-35.64 8.014-49.474 10.913-2.548.534-3.996 3.198-3.996 5.793s1.448 5.259 3.996 5.793c13.834 2.899 38.805 8.203 49.474 10.913 15.148 3.847 27.483 17.553 18.365 33.294-9.118 15.741-27.193 11.947-38.11.794-7.69-7.856-24.788-26.765-34.223-37.256-1.737-1.931-4.736-1.875-6.985-.569-2.25 1.307-3.886 3.903-3.076 6.37 4.398 13.392 12.275 37.597 15.255 48.161 4.231 15-1.51 32.5-19.745 32.5s-23.976-17.5-19.745-32.5c2.98-10.564 10.857-34.769 15.255-48.161.81-2.467-.826-5.063-3.077-6.37-2.248-1.306-5.247-1.362-6.984.569-9.435 10.491-26.533 29.4-34.223 37.256-10.917 11.153-28.992 14.947-38.11-.794-9.117-15.741 3.217-29.447 18.365-33.294 10.67-2.71 35.64-8.014 49.474-10.913 2.548-.534 3.996-3.198 3.996-5.793s-1.448-5.259-3.996-5.793c-13.834-2.9-38.805-8.203-49.474-10.913C16.333 79.447 3.998 65.741 13.116 50c9.117-15.74 27.193-11.947 38.11-.794 7.69 7.856 24.788 26.765 34.223 37.256 1.737 1.931 4.736 1.875 6.984.57 2.25-1.308 3.887-3.904 3.077-6.371C91.112 67.269 83.235 43.064 80.255 32.5z"></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#F2371F"
            fillOpacity="0.181"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4615)">
            <path fill="#FFE500" d="M120.25 56h-105v119h105V56z"></path>
            <path fill="#FF28DD" d="M223.5 0H100.25v140.875H223.5V0z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4615"
          width="333.25"
          height="300"
          x="-47.25"
          y="-62.5"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4615"
            stdDeviation="31.25"></feGaussianBlur>
        </filter>
        <clipPath id={`cs_clip_1_${ShapeId}`}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Flower11.displayName = "Flower11";
export { Flower11 };
