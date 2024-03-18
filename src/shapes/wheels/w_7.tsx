import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Wheel7: ShapeType = forwardRef((props, ref) => {
  const shapeId = "wheel-7";
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <mask
        id={maskId}
        style={{ maskType: "alpha" }}
        width="200"
        height="192"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse">
        <path
          fill="#fff"
          d="M85.087 192v-80.513L9.223 136.369 0 107.717l75.86-24.881L28.98 17.7 53.114 0 100 65.14 146.886 0l24.135 17.7-46.882 65.136L200 107.717l-9.223 28.652-75.864-24.882V192H85.087z"></path>
      </mask>
      <g mask={`url(#${maskId})`}>
        <path fill="#fff" d="M200-4H0v200h200V-4z"></path>
        <path fill="#06F" d="M200-4H0v200h200V-4z"></path>
        <g filter="url(#filter0_f_844_2791)">
          <path fill="#FFE500" d="M150 52H-15v129h165V52z"></path>
          <ellipse
            cx="107.987"
            cy="142.246"
            fill="#FF58E4"
            rx="79.158"
            ry="47.123"
            transform="rotate(-33.875 107.987 142.246)"></ellipse>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_844_2791"
          width="353.782"
          height="309.216"
          x="-95"
          y="-28"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_844_2791"
            stdDeviation="40"></feGaussianBlur>
        </filter>
      </defs>
    </ShapeBase>
  );
});

Wheel7.displayName = "Wheel7";
export { Wheel7 };
