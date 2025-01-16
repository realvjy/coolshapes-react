import {
  CategoryComponentProps,
  ComponentDataType,
  ShapeMetadataProps,
  ShapeProps,
  ShapesType,
} from "../types";
import React, { forwardRef, ForwardRefExoticComponent } from "react";
import ShapeBase from "../shapeBase";
import { shapesCount, shapesType } from "../common";

export const createShapeComponent = (
  shapeId: string,
  shapeData: ShapeMetadataProps & { shape: string }
): ForwardRefExoticComponent<Partial<ShapeProps>> => {
  const Component = forwardRef<SVGSVGElement, Partial<ShapeProps>>(
    (props, ref) => {
      return (
        <ShapeBase {...shapeData} shapeId={shapeId} {...props} ref={ref} />
      );
    }
  );
  Component.displayName = shapeId as string;
  return Component;
};

export const getComponentWithShapeType = (
  shapeType: ShapesType,
  categoryData: ComponentDataType[]
) => {
  const Component = forwardRef<SVGSVGElement, CategoryComponentProps>(
    ({ index, ...props }, ref) => {
      const shapeData =
        categoryData[Number(index) - (shapeType == "number" ? 0 : 1)];
      return (
        <ShapeBase
          {...shapeData}
          shapeId={`${shapeType}-${index}`}
          {...props}
          ref={ref}
        />
      );
    }
  );
  Component.displayName = shapeType;
  return Component;
};

export function getRandomShape ({
  type, onlyId
}: {
  type?: ShapesType;
  onlyId?: boolean;
} = {}) {

  const shapeKeys = shapesType;
  const shapeType: ShapesType =
    type ||
    (shapeKeys[Math.floor(Math.random() * shapeKeys.length)] as ShapesType);

  const shapeTypeMaxCount = shapesCount["star"];
  const randomIndex = Math.floor(Math.random() * shapeTypeMaxCount);

  return {
    shape: shapeType,
    index: randomIndex,
    shapeId: `${shapeType}-${randomIndex}`,
  };
};
