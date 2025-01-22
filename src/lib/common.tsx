import React from "react";
import { GradientProp, MaskProps, ShapeElementType } from "./types";
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
  let gradients: GradientProp[] = [];
  let gradientShapes: ShapeElementType | ShapeElementType[] =
    props.gradientShapes || [];
  if (props.gradient && typeof props.gradient === "object") {
    if ("type" in props.gradient) {
      const { shapes, ...gradient } = props.gradient as GradientProp & {
        shapes?: ShapeElementType | ShapeElementType[];
      };
      gradients.push(gradient);
      if (shapes) {
        gradientShapes = shapes;
      }
    } else if (
      "gradient" in props.gradient &&
      Array.isArray(props.gradient.gradient)
    ) {
      gradients = props.gradient.gradient as GradientProp[];
    } else if (Array.isArray(props.gradient)) {
      gradients = props.gradient as GradientProp[];
    }
    if ("shapes" in props.gradient && props.gradient.shapes) {
      gradientShapes = props.gradient.shapes as
        | ShapeElementType
        | ShapeElementType[];
    }
  }

  return (
    <g>
      <g mask={`url(#cs_${props.shapeId}_mask)`}>
        {!props.transparent && <path fill="white" d="M200 0H0v200h200V0z" />}
        {props.fill && (
          <path
            fill={props.fill}
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
        {props.blur ? (
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
              mask={`url(#cs_${props.shapeId}_mask)`}
              style={{
                mixBlendMode: "overlay",
              }}
            />
          </g>
        )}
        <defs>
          <mask id={`cs_${props.shapeId}_mask`}>
            {typeof props.shape == "string" ? (
              <path fill="#fff" d={props.shape} />
            ) : (
              props.shape
            )}
          </mask>
          {gradients.map((gradient, _i) => {
            const { id, stops, ...gradientProps } = { ...gradient };
            const defaultProps = { gradientUnits: "userSpaceOnUse" };
            const gradientId = `cs_${props.shapeId}_gradient_${id || _i}`;

            const gradientStops = stops?.map((_stop, _i) => {
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
                  id={gradientId}
                  {...defaultProps}
                  {...gradientProps}
                  opacity={1}>
                  {gradientStops}
                </radialGradient>
              );
            } else {
              let dirCoords: {
                x1?: string | number;
                x2?: string | number;
                y1?: string | number;
                y2?: string | number;
              } = {
                x1: gradient.x1,
                x2: gradient.x2,
                y1: gradient.y1,
                y2: gradient.y2,
              };

              if (
                !(dirCoords.x1 && dirCoords.x2 && dirCoords.y1 && dirCoords.y2)
              ) {
                const angle = gradient.angle || 0;
                dirCoords = directionToBoxCoords(Number(angle));
              }

              return (
                <linearGradient
                  id={gradientId}
                  key={_i}
                  {...defaultProps}
                  {...gradientProps}
                  {...dirCoords}>
                  {gradientStops}
                </linearGradient>
              );
            }
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
    </g>
  );
};

export const shapeTypes = [
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
  ellipse: 12,
  flower: 16,
  wheel: 7,
  triangle: 14,
  rectangle: 9,
  polygon: 8,
  number: 10,
  moon: 15,
  misc: 11,
};
