import React, { forwardRef } from "react";
import { ShapeBase, ShapeType } from "../../lib";

const Number2: ShapeType = forwardRef((props, ref) => {
  const shapeId = "number-2";
  const maskId = `cs_mask_1_${shapeId}`;

  return (
    <ShapeBase {...props} shapeName={shapeId} ref={ref}>
      <mask
        id={maskId}
        style={{ maskType: "alpha" }}
        width="180"
        height="200"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          d="M120 0c33.137 0 60 26.863 60 60v10c0 33.129-26.849 59.987-59.975 60H180v70H0v-70c0-33.125 26.844-59.98 59.965-60H0C0 31.34 31.34 0 70 0h50z"
        ></path>
      </mask>
      <g mask={`url(#${maskId})`}>
        <path fill="#fff" d="M190 0H-10v200h200V0z"></path>
        <path
          fill="url(#paint0_radial_880_3313)"
          d="M190 0H-10v200h200V0z"
        ></path>
        <path
          fill="url(#paint1_radial_880_3313)"
          d="M190 0H-10v200h200V0z"
        ></path>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_880_3313"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(116.694 66.023 84.863) scale(199.234)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF500"></stop>
          <stop offset="1" stopColor="#FF00D6" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_880_3313"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(48.452 -17.085 24.39) scale(223.143)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF00D6"></stop>
          <stop offset="0.461" stopColor="#FF7171" stopOpacity="0.84"></stop>
          <stop offset="1" stopColor="#FFF500" stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </ShapeBase>
  );
});

Number2.displayName = "Number2";
export { Number2 };
