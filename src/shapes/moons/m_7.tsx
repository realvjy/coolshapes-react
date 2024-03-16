import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Moon7: ShapeType = forwardRef((props, ref) => {
  const shapeId = "moon-7";
  const clipId = `cs_clip_1_${shapeId}`;
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "alpha" }}
          width="200"
          height="200"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M184.171 100c3.063 7.523 4.431 15.882 3.912 24.546-.953 15.898-8.183 31.523-20.098 43.439-11.916 11.915-27.541 19.145-43.439 20.098-8.664.519-17.023-.849-24.546-3.912L184.171 100zM100 15.829c-7.523-3.063-15.882-4.431-24.546-3.912-15.898.953-31.523 8.183-43.438 20.099C20.1 43.93 12.87 59.556 11.917 75.454c-.52 8.664.849 17.023 3.912 24.546L100 15.829z"></path>
          <path
            fill="#fff"
            d="M61.152 2.88C55.902.717 50.079-.267 44.049.061 32.985.664 22.135 5.637 13.886 13.886 5.637 22.136.664 32.986.062 44.05c-.328 6.03.656 11.854 2.817 17.103L61.152 2.879zM138.848 197.121c5.249 2.161 11.073 3.145 17.103 2.817 11.064-.602 21.914-5.575 30.163-13.824 8.249-8.249 13.222-19.099 13.824-30.163.328-6.03-.656-11.854-2.817-17.103l-58.273 58.273zM197.121 61.152c2.161-5.25 3.145-11.073 2.817-17.103-.602-11.064-5.575-21.914-13.824-30.163C177.865 5.637 167.015.664 155.951.062c-6.03-.328-11.854.656-17.103 2.817l58.273 58.273zM2.88 138.848C.717 144.097-.267 149.921.061 155.951c.602 11.064 5.575 21.914 13.824 30.163 8.25 8.249 19.1 13.222 30.163 13.824 6.03.328 11.854-.656 17.103-2.817L2.879 138.848z"></path>
          <path
            fill="#fff"
            d="M100 184.171c-7.523 3.063-15.882 4.431-24.546 3.912-15.898-.953-31.523-8.183-43.438-20.098-11.916-11.916-19.146-27.541-20.099-43.439-.52-8.664.849-17.023 3.912-24.546L100 184.171zM184.171 100c3.063-7.523 4.431-15.882 3.912-24.546-.953-15.898-8.183-31.523-20.098-43.438-11.916-11.916-27.541-19.146-43.439-20.099-8.664-.52-17.023.849-24.546 3.912L184.171 100z"></path>
          <path
            fill="#fff"
            d="M142.086 57.914c23.243 23.244 23.243 60.928 0 84.172-23.244 23.243-60.928 23.243-84.172 0-23.243-23.244-23.243-60.928 0-84.172 23.244-23.243 60.928-23.243 84.172 0z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#FF6C02"
            fillOpacity="0.19"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4498)">
            <ellipse
              cx="30.742"
              cy="164.545"
              fill="#FFC700"
              rx="79.5"
              ry="64.116"
              transform="rotate(-33.875 30.742 164.545)"></ellipse>
            <path
              fill="url(#paint0_linear_748_4498)"
              d="M224 0H66v108h158V0z"></path>
            <path fill="#FF37BB" d="M256 122H122v121h134V122z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4498"
          width="460.331"
          height="403"
          x="-124.331"
          y="-80"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4498"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_748_4498"
          x1="191.215"
          x2="124.877"
          y1="6.75"
          y2="118.812"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#0E6FFF"></stop>
          <stop offset="1" stopColor="#00F0FF"></stop>
        </linearGradient>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Moon7.displayName = "Moon7";
export { Moon7 };
