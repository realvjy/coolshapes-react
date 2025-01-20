import React from "react";
import { gradientShapeType, gradientType, MaskProps } from "./types";
import { directionToBoxCoords } from "./utils";

export const Noise = ({
  shapeId,
  noiseScale = 0.3,
  seed = 4,
}: {
  shapeId: string;
  noiseScale?: number;
  seed?: number;
}) => (
  <>
    <defs>
      <filter
        id={`cs_${shapeId}_noise`}
        width="100%"
        height="100%"
        x="0%"
        y="0%"
        filterUnits="objectBoundingBox">
        <feTurbulence
          baseFrequency={noiseScale}
          numOctaves={5}
          result="out1"
          seed={seed}
        />
        <feBlend in="SourceGraphic" in2="out2" mode="overlay" result="out3" />
      </filter>
    </defs>
  </>
);

export const ShapeMask = (props: MaskProps) => {
  let gradients: gradientType[] = [];
  const gradientShapes: gradientShapeType[] = [];

  if (props.gradient && typeof props.gradient === "object") {
    if ("type" in props.gradient) {
      const { shapes, ...gradient } = props.gradient as gradientType & {
        shapes?: gradientShapeType | gradientShapeType[];
      };
      gradients.push(gradient);

      if (shapes) {
        if (Array.isArray(shapes)) {
          gradientShapes.push(...shapes);
        } else {
          gradientShapes.push(shapes);
        }
      }
    } else if (
      "gradient" in props.gradient &&
      Array.isArray(props.gradient.gradient)
    ) {
      gradients = props.gradient.gradient as gradientType[];
    } else if (Array.isArray(props.gradient)) {
      gradients = props.gradient as gradientType[];
    }
    if ("shapes" in props.gradient && props.gradient.shapes) {
      const shapes = props.gradient.shapes;
      if (Array.isArray(shapes)) {
        gradientShapes.push(...shapes);
      } else {
        gradientShapes.push(shapes as gradientShapeType);
      }
    }
  }

  return (
    <g>
      <g mask={`url(#cs_${props.shapeId}_mask)`}>
        {!props.transparent && <path fill="white" d="M200 0H0v200h200V0z" />}
        {props.shapeFill && (
          <path
            fill={props.shapeFill}
            d="M200 0H0v200h200V0z"
            fillOpacity={props.opacity || 1}
          />
        )}
        {gradients!.map((gradient, _i) => (
          <path
            key={_i}
            fill={`url(#cs_${props.shapeId}_gradient_${gradient.id || _i})`}
            fillOpacity={gradient.opacity || 1}
            d="M200 0H0v200h200V0z"
          />
        ))}
        {props.blur && Number(props.blur) > 0 ? (
          <g filter={`url(#cs_${props.shapeId}_blur)`}>{gradientShapes}</g>
        ) : (
          <>{gradientShapes}</>
        )}
        {props.noise && (
          <g>
            <path
              fill="transparent"
              stroke="transparent"
              d="M200 0H0v200h200V0z"
              filter={`url(#cs_${props.shapeId}_noise)`}
              mask={`url(#cs_${props.shapeId})_mask`}
              style={{
                mixBlendMode: "overlay",
              }}
            />
          </g>
        )}
        <defs>
          <mask id={`cs_${props.shapeId}_mask`}>
            <path fill="#fff" d={props.shape} />
          </mask>
          {gradients!.map((gradient, _i) => {
            const gradientStops = gradient.stops || [];
            const stops = gradientStops.map((_stop, _i) => {
              return (
                <stop
                  key={_i}
                  stopColor={_stop.color}
                  offset={_stop.offset}
                  stopOpacity={_stop.opacity !== undefined ? _stop.opacity : 1}
                />
              );
            });
            if (gradient.type === "radial") {
              return (
                <radialGradient
                  key={_i}
                  id={`cs_${props.shapeId}_gradient_${gradient.id || _i}`}
                  cx={gradient.cx || 0}
                  cy={gradient.cy || 0}
                  r={gradient.r || 1}
                  gradientTransform={gradient.gradientTransform}
                  gradientUnits="userSpaceOnUse">
                  {stops}
                </radialGradient>
              );
            }
            let dirCoords: {
              x1?: string | number;
              x2?: string | number;
              y1?: string | number;
              y2?: string | number;
            } = { x1: gradient.x1, x2: gradient.x2, y1: gradient.y2 };
            const { x1, x2, y1, y2 } = dirCoords;
            if (!(x1 && x2 && y1 && y2)) {
              const angle = gradient.angle || 0;
              dirCoords = directionToBoxCoords(Number(angle));
            }

            return (
              <linearGradient
                id={`cs_${props.shapeId}_gradient_${gradient.id || _i}`}
                key={_i}
                x1={dirCoords.x1}
                x2={dirCoords.x2}
                y1={dirCoords.y1}
                y2={dirCoords.y2}
                gradientUnits="userSpaceOnUse">
                {stops}
              </linearGradient>
            );
          })}
          {props.blur && (
            <filter
              id={`cs_${props.shapeId}_blur`}
              width={200}
              height={200}
              x={0}
              y={0}
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse">
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_748_4335"
                stdDeviation={props.blur}
              />
            </filter>
          )}
        </defs>
      </g>
      {props.outline && (
        <path
          fill={"transparent"}
          stroke={props.outline}
          strokeWidth={props.outlineWidth}
          strokeLinejoin={props.outlineLineJoin || "round"}
          d={props.shape}
          fillOpacity={props.opacity}
        />
      )}
    </g>
  );
};

export const shapesType = [
  "star",
  "triangle",
  "moon",
  "polygon",
  "flower",
  "rectangle",
  "ellipse",
  "wheel",
  "misc",
  "number",
] as const;

export const shapesCount = {
  star: 13,
};
