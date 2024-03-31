import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Number5: ShapeType = forwardRef((props, ref) => {
  const shapeId = "number-5";
  const maskId = `cs_mask_1_${shapeId}`;
  const clipId = `cs_clip_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "alpha" }}
          width="180"
          height="200"
          x="10"
          y="0"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M130 200c33.137 0 60-26.863 60-60v-10c0-33.129-26.849-59.987-59.975-60H190V0H10v70c0 33.125 26.844 59.981 59.965 60H10c0 38.66 31.34 70 70 70h50z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path fill="#0E6FFF" d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_880_3345)">
            <path fill="#00F0FF" d="M195-58H0v92h195v-92z"></path>
            <path fill="#1400FF" d="M194 158H24v56h170v-56z"></path>
            <path fill="#FF58E4" d="M190-14H69v124h121V-14z"></path>
            <ellipse
              cx="157.5"
              cy="140.5"
              fill="#FFE500"
              fillOpacity="0.74"
              rx="50.5"
              ry="34.5"></ellipse>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_880_3345"
          width="333"
          height="397"
          x="-62.5"
          y="-120.5"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_880_3345"
            stdDeviation="31.25"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Number5.displayName = "Number5";
export { Number5 };
