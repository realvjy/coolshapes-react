import React, { Fragment } from "react";
import { MaskShape, OutlineCap, OutlineJoin } from "../lib/types";

export default function Outline(props: {
  opacity?: number | string;
  shape: MaskShape;
  outline: number | string;
  outlineColor?: string;
  outlineJoin?: OutlineJoin;
  outlineCap?: OutlineCap;
}) {
  const params = {
    fill: "none",
    stroke: props.outlineColor || "#000",
    strokeWidth: props.outline,
    strokeLinejoin: props.outlineJoin || "bevel",
    strokeLinecap: props.outlineCap || "round",
    strokeOpacity: props.opacity || 1,
  };

  if (typeof props.shape == "string") {
    return <path d={props.shape} {...params} />;
  } else {
    return (
      <>
        {...React.Children.toArray(props.shape).flatMap(
          (shapeElement: any, index) => {
            let toClone = [shapeElement];
            if (shapeElement.type === Fragment) {
              const children = shapeElement.props.children;
              const toMap = Array.isArray(children) ? children : [children];
              toClone = toMap.flatMap((child: any) => {
                if (React.isValidElement(child)) {
                  return [child];
                }
                return [];
              });
            }
            return toClone.map((e, i) => {
              return React.cloneElement(e, { ...params, index: index + i });
            });
          }
        )}
      </>
    );
  }
}
