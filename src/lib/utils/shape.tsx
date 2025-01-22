import {
  CategoryComponentProps,
  ComponentDataType,
  ShapeDataProps,
  MaskShape,
  ShapeProps,
  ShapesType,
} from "../types";
import React, { forwardRef, ForwardRefExoticComponent } from "react";
import ShapeBase from "../shapeBase";
import { shapesCount, shapeTypes } from "../common";

export const createShapeComponent = (
  shapeId: string,
  shapeData: ShapeDataProps & { shape: MaskShape }
): ForwardRefExoticComponent<Partial<ShapeProps>> => {
  const Component = forwardRef<SVGSVGElement, Partial<ShapeProps>>(
    (props, ref) => {
      const shapeProps = { ...props };

      if (shapeProps.fill) {
        shapeProps.gradient = props.gradient || [];
        shapeProps.blur = props.blur || 0;
        shapeProps.gradientShapes = props.gradientShapes || null;
        shapeProps.opacity = props.opacity || 1;
      }
      return (
        <ShapeBase {...shapeData} shapeId={shapeId} {...shapeProps} ref={ref} />
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

export function getRandomShape({
  type,
  onlyId,
}: {
  type?: ShapesType;
  onlyId?: boolean;
} = {}) {
  if (onlyId == false) {
    throw Error(
      "coolshapes-react: `getRandomShape` now only returns shape data, see changelogs for more details."
    );
  }
  const shapeKeys = shapeTypes;
  const shapeType: ShapesType =
    type ||
    (shapeKeys[Math.floor(Math.random() * shapeKeys.length)] as ShapesType);

  const shapeTypeMaxCount = shapesCount[shapeType];
  const randomIndex = Math.floor(Math.random() * shapeTypeMaxCount);

  return {
    shape: shapeType,
    index: randomIndex,
    shapeId: `${shapeType}-${randomIndex}`,
  };
}
