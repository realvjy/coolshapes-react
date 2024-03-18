import React from "react";

const NoiseMask = ({
  showNoise = true,
  id,
}: {
  showNoise?: boolean;
  id: string;
}) => {
  return (
    <>
      {showNoise && (
        <>
          <g style={{ mixBlendMode: "overlay" }} mask={`url(#cs_mask_1_${id})`}>
            <path
              fill="gray"
              stroke="transparent"
              d="M200 0H0v200h200V0z"
              filter={`url(#cs_noise_1_${id})`}
            />
          </g>
          <defs>
            <filter
              id={`cs_noise_1_${id}`}
              width="100%"
              height="100%"
              x="0%"
              y="0%"
              filterUnits="objectBoundingBox">
              <feTurbulence
                baseFrequency="0.6"
                numOctaves="5"
                result="out1"
                seed="4"></feTurbulence>
              <feComposite
                in="out1"
                in2="SourceGraphic"
                operator="in"
                result="out2"></feComposite>
              <feBlend
                in="SourceGraphic"
                in2="out2"
                mode="overlay"
                result="out3"></feBlend>
            </filter>
          </defs>
        </>
      )}
    </>
  );
};

export default NoiseMask;
