import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Ellipse9: ShapeType = forwardRef((props, ref) => {
  const ShapeId = "ellipse-9";

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
            d="M199.98 102H.02a100.017 100.017 0 003.393 24h193.174a100.028 100.028 0 003.393-24zM195.422 130H4.578a99.448 99.448 0 008.8 20h173.244a99.45 99.45 0 008.8-20zM184.181 154H15.819a100.474 100.474 0 0012.767 16h142.828a100.431 100.431 0 0012.767-16zM167.262 174H32.738a100.267 100.267 0 0019.724 14h95.076a100.289 100.289 0 0019.724-14zM139.257 192H60.743c12.052 5.15 25.322 8 39.257 8 13.935 0 27.205-2.85 39.257-8zM199.98 98H.02a99.753 99.753 0 015.553-31h188.854a99.723 99.723 0 015.553 31zM192.932 63C178.223 26.087 142.158 0 100 0S21.777 26.087 7.068 63h185.864z"></path>
        </mask>
        <g mask={`url(#cs_mask_1_${ShapeId})`}>
          <path fill="#fff" d="M200 0H0v200h200V0z"></path>
          <path
            fill="#FAFF02"
            fillOpacity="0.33"
            d="M200 0H0v200h200V0z"></path>
          <g filter="url(#filter0_f_748_4741)">
            <ellipse
              cx="42.046"
              cy="157.679"
              fill="#FFC700"
              rx="73.46"
              ry="65.777"
              transform="rotate(-33.875 42.046 157.679)"></ellipse>
            <path fill="#FFE500" d="M110 32H18v68h92V32z"></path>
            <path fill="#FF001F" d="M133 0H17v98h116V0z"></path>
            <path fill="#18A0FB" d="M176 73H50v156h126V73z"></path>
            <path fill="#FF00D6" d="M213 44H83v101h130V44z"></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_748_4741"
          width="402.127"
          height="389"
          x="-109.127"
          y="-80"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_748_4741"
            stdDeviation="40"></feGaussianBlur>
        </filter>
        <clipPath id={`cs_clip_1_${ShapeId}`}>
          <path fill="#fff" d="M0 0H200V200H0z"></path>
        </clipPath>
      </defs>
    </ShapeBase>
  );
});

Ellipse9.displayName = "Ellipse9";
export { Ellipse9 };
