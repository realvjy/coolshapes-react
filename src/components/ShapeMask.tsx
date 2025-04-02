import { Gradient, MaskProps, ShapeElementTypes } from "../lib/types";
import React, { Fragment } from "react";
import { angleToBoxCoords } from "../lib";
import { resolveGradientStops } from "../lib/utils/shape";

export const ShapeMask = (props: MaskProps) => {
  let gradientProps: Gradient[] = [];
  let gradientBlur = props.blur;
  let gradientShapes: ShapeElementTypes | ShapeElementTypes[] =
    props.gradientShapes || [];

  // resolve gradient prop
  if (props.gradient && typeof props.gradient === "object") {
    if ("type" in props.gradient) {
      const { shapes, ...gradient } = props.gradient as Gradient & {
        shapes?: ShapeElementTypes | ShapeElementTypes[];
      };
      gradientProps.push(gradient);
      if (shapes) {
        gradientShapes = shapes;
      }
    } else if (
      "gradient" in props.gradient &&
      Array.isArray(props.gradient.gradient)
    ) {
      gradientProps = props.gradient.gradient as Gradient[];
    } else if (Array.isArray(props.gradient)) {
      gradientProps = props.gradient as Gradient[];
    }
    if ("shapes" in props.gradient && props.gradient.shapes) {
      gradientShapes = props.gradient.shapes as
        | ShapeElementTypes
        | ShapeElementTypes[];
    }
    if ("blur" in props.gradient && props.gradient.blur) {
      gradientBlur = props.gradient.blur;
    }
  }

  const e = React.Children.toArray(props.shape).flatMap(
    (shapeElement: any, index) => {
      let toClone = [shapeElement];
      if (shapeElement.type === Fragment) {
        const children = shapeElement.props.children;
        toClone = Array.isArray(children) ? children : [children];
      }
      return toClone.map((e, i) => {
        return React.cloneElement(e, { fill: "none", index: index + i });
      });
    }
  );

  return (
    <g>
      <g mask={`url(#cs_${props.shapeId}_mask)`}>
        {!props.transparent && <path fill="white" d="M200 0H0v200h200V0z" />}
        {props.fill && (
          <path
            fill={props.fill}
            d="M200 0H0v200h200V0z"
            fillOpacity={props.fillOpacity != undefined ? props.fillOpacity : 1}
          />
        )}
        {gradientProps!.map((gradient, _i) => (
          <path
            key={_i}
            fill={`url(#cs_${props.shapeId}_gradient_${gradient.id || _i})`}
            fillOpacity={gradient.opacity != undefined ? gradient.opacity : 1}
            d="M200 0H0v200h200V0z"
          />
        ))}
        {gradientBlur ? (
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
          {gradientProps.map((gradient, _i) => {
            const { id, stops, ...gradientProps } = { ...gradient };
            const defaultProps = { gradientUnits: "userSpaceOnUse" };
            const gradientId = `cs_${props.shapeId}_gradient_${id || _i}`;

            const gradientStops = resolveGradientStops(stops || []).map(
              (_stop, _i) => {
                return (
                  <stop
                    key={_i}
                    stopColor={_stop.color}
                    offset={_stop.offset}
                    stopOpacity={
                      _stop.opacity !== undefined ? _stop.opacity : 1
                    }
                  />
                );
              }
            );

            if ((gradient as any).type === "radial") {
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
                x1: (gradient as any).x1,
                x2: (gradient as any).x2,
                y1: (gradient as any).y1,
                y2: (gradient as any).y2,
              };

              if (
                !(dirCoords.x1 && dirCoords.x2 && dirCoords.y1 && dirCoords.y2)
              ) {
                const angle = gradient.angle || 0;
                dirCoords = angleToBoxCoords(Number(angle));
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
          {gradientBlur && (
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
                stdDeviation={gradientBlur}
              />
            </filter>
          )}
        </defs>
      </g>
    </g>
  );
};
