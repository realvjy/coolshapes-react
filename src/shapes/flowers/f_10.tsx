import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Flower10: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-10";

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
            d="M80.319 34.111C76.102 17.444 81.824 0 99.999 0c18.177 0 23.9 17.444 19.682 34.111-1.636 6.467-4.364 17.835-7.089 29.327-3.332 14.049-4.997 21.073-1.05 25.02 3.947 3.947 10.971 2.281 25.02-1.05 11.492-2.725 22.86-5.453 29.327-7.089C182.556 76.102 200 81.824 200 99.999c0 18.177-17.444 23.9-34.111 19.682-6.467-1.636-17.835-4.364-29.327-7.089-14.049-3.332-21.073-4.997-25.02-1.05-3.947 3.947-2.281 10.971 1.05 25.02 2.725 11.492 5.453 22.86 7.089 29.327C123.898 182.556 118.176 200 100 200c-18.176 0-23.898-17.444-19.681-34.111 1.636-6.467 4.364-17.835 7.089-29.327 3.332-14.049 4.997-21.073 1.05-25.02-3.947-3.947-10.971-2.281-25.02 1.05-11.492 2.725-22.86 5.453-29.327 7.089C17.444 123.898 0 118.176 0 100c0-18.176 17.444-23.898 34.111-19.681 6.467 1.636 17.835 4.364 29.327 7.089 14.049 3.332 21.073 4.997 25.02 1.05 3.947-3.947 2.281-10.971-1.05-25.02-2.725-11.492-5.453-22.86-7.089-29.327z"></path>
          <path
            fill="#fff"
            d="M50 73c12.703 0 23-10.297 23-23S62.703 27 50 27 27 37.297 27 50s10.297 23 23 23zM150 73c12.703 0 23-10.297 23-23s-10.297-23-23-23-23 10.297-23 23 10.297 23 23 23zM73 150c0 12.703-10.297 23-23 23s-23-10.297-23-23 10.297-23 23-23 23 10.297 23 23zM150 173c12.703 0 23-10.297 23-23s-10.297-23-23-23-23 10.297-23 23 10.297 23 23 23z"></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#FF6C02"
            fillOpacity="0.19"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4624)">
            <path fill="#FF3216" d="M152 84H13v105h139V84z"></path>
            <path fill="#FF58E4" d="M163-10H42v89h121v-89z"></path>
            <path fill="#FFE500" d="M204 77H100v129h104V77z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4624"
          width="316"
          height="341"
          x="-49.5"
          y="-72.5"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4624"
            stdDeviation="31.25"></feGaussianBlur>
        </filter>
        <clipPath id={`cs_clip_1_${ShapeId}`}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Flower10.displayName = "Flower10";
export { Flower10 };
