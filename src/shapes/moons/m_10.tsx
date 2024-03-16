import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Moon10: ShapeType = forwardRef((props, ref) => {
  const shapeId = "moon-10";
  const clipId = `cs_clip_1_${shapeId}`;
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <g clipPath={`url(#${clipId})`}>
        <mask
          id={maskId}
          style={{ maskType: "alpha" }}
          width="192"
          height="200"
          x="4"
          y="0"
          maskUnits="userSpaceOnUse">
          <path
            fill="#fff"
            d="M130.084 13.766a47.102 47.102 0 0113.46 28.497c10.254-16.377 12.528-24.928 12.528-24.928 10.034 7.327 16.762 18.36 18.702 30.672a47.201 47.201 0 01-5.778 31.005c17.875-7.192 24.715-12.767 24.715-12.767a47.213 47.213 0 01-2.808 35.862 46.865 46.865 0 01-22.809 21.67c18.668 4.741 27.462 4.272 27.462 4.272-3.833 11.855-12.195 21.694-23.246 27.353a46.56 46.56 0 01-31.127 4.059c12.33 14.862 19.719 19.678 19.719 19.678a46.593 46.593 0 01-34.805 8.397 46.697 46.697 0 01-27.556-15.104c1.283 19.307 4.444 27.568 4.444 27.568a46.65 46.65 0 01-33.069-13.766 47.099 47.099 0 01-13.46-28.497c-10.254 16.378-12.528 24.928-12.528 24.928-10.034-7.327-16.761-18.36-18.702-30.671a47.198 47.198 0 015.778-31.005c-17.875 7.192-24.715 12.766-24.715 12.766a47.212 47.212 0 012.808-35.861 46.865 46.865 0 0122.809-21.671c-18.668-4.74-27.462-4.271-27.462-4.271C8.277 60.097 16.64 50.257 27.69 44.598a46.56 46.56 0 0131.127-4.059c-12.33-14.862-19.719-19.677-19.719-19.677a46.588 46.588 0 0134.805-8.398 46.704 46.704 0 0127.556 15.104C100.176 8.26 97.015 0 97.015 0a46.65 46.65 0 0133.069 13.766z"></path>
        </mask>
        <g mask={`url(#${maskId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#FF6C02"
            fillOpacity="0.19"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4469)">
            <path fill="#FF58E4" d="M112-30H-10v130h122V-30z"></path>
            <ellipse
              cx="109.241"
              cy="121.795"
              fill="#FF00D6"
              rx="45.403"
              ry="55.426"
              transform="rotate(-26.262 109.241 121.795)"></ellipse>
            <path fill="#FFE500" d="M218 36H114v129h104V36z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4469"
          width="353"
          height="330.42"
          x="-72.5"
          y="-92.5"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4469"
            stdDeviation="31.25"></feGaussianBlur>
        </filter>
        <clipPath id={clipId}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Moon10.displayName = "Moon10";
export { Moon10 };
