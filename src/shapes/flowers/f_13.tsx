import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Flower13: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-13";

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
            d="M100 0C83.984 0 71 12.984 71 29v.988l-.698-.699c-11.326-11.325-29.687-11.325-41.013 0-11.325 11.325-11.325 29.687 0 41.013l.699.698H29C12.984 71 0 83.984 0 100s12.984 29 29 29h.988l-.699.698c-11.325 11.326-11.325 29.687 0 41.013 11.325 11.325 29.687 11.325 41.013 0l.698-.699V171c0 16.016 12.984 29 29 29s29-12.984 29-29v-.988l.699.699c11.325 11.325 29.686 11.325 41.012 0 11.325-11.326 11.325-29.687 0-41.012l-.699-.699H171c16.016 0 29-12.984 29-29s-12.984-29-29-29h-.988l.699-.698c11.325-11.326 11.325-29.688 0-41.013-11.326-11.325-29.687-11.325-41.012 0l-.699.699V29c0-16.016-12.984-29-29-29z"></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#FF6C02"
            fillOpacity="0.19"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4594)">
            <path fill="#18A0FB" d="M173.25 72H61v139.75h112.25V72z"></path>
            <path fill="#07FFE1" d="M100 28H-56v128h156V28z"></path>
            <path
              fill="url(#paint0_linear_748_4594)"
              d="M100 28H-56v128h156V28z"></path>
            <path fill="#FF58E4" d="M289 28H147v177h142V28z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4594"
          width="505"
          height="343.75"
          x="-136"
          y="-52"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4594"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4594"
          x1="-26.36"
          x2="18.998"
          y1="37.28"
          y2="151.253"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE500"></stop>
          <stop offset="1" stopColor="#07FFE1"></stop>
        </linearGradient>
        <clipPath id={`cs_clip_1_${ShapeId}`}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Flower13.displayName = "Flower13";
export { Flower13 };
