import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Flower4: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "flower-4";

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
            d="M171.219 80.917C189.016 84.94 200 91.155 200 100c0 8.845-10.984 15.061-28.781 19.083 13.403 12.382 19.807 23.257 15.385 30.917-4.423 7.66-17.043 7.551-34.468 2.135 5.416 17.425 5.525 30.045-2.135 34.468-7.66 4.422-18.536-1.983-30.918-15.386C115.061 189.016 108.845 200 100 200c-8.845 0-15.06-10.984-19.083-28.781-12.381 13.402-23.256 19.806-30.916 15.384-7.66-4.423-7.551-17.043-2.135-34.468C30.44 157.551 17.82 157.66 13.398 150c-4.422-7.66 1.982-18.535 15.385-30.917C10.984 115.061 0 108.845 0 100c0-8.845 10.984-15.061 28.783-19.083C15.38 68.535 8.976 57.66 13.398 50c4.423-7.66 17.043-7.551 34.468-2.135C42.45 30.44 42.34 17.82 50 13.397c7.66-4.422 18.535 1.982 30.916 15.384C84.94 10.984 91.155 0 100 0c8.845 0 15.061 10.984 19.083 28.783 12.382-13.404 23.258-19.808 30.918-15.386 7.66 4.423 7.551 17.043 2.135 34.468 17.425-5.416 30.045-5.525 34.468 2.135 4.422 7.66-1.982 18.535-15.385 30.917z"></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#000" d="M200 0H0v200h200V0z"></path>
          <path fill="#EE46D3" d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4680)">
            <path fill="#1BC47D" d="M212.5 5H91v142.125h121.5V5z"></path>
            <path fill="#F2371F" d="M127 19H21v92h106V19z"></path>
            <path fill="#F2371F" d="M171.375 82H71v125.5h100.375V82z"></path>
            <path fill="#FFC700" d="M200 78H81v90h119V78z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4680"
          width="316.5"
          height="327.5"
          x="-41.5"
          y="-57.5"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4680"
            stdDeviation="31.25"></feGaussianBlur>
        </filter>
        <clipPath id={`url(#cs_clip_1_${ShapeId})`}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Flower4.displayName = "Flower4";
export { Flower4 };
