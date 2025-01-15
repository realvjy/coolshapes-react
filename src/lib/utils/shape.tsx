import { ShapeMetadataProps, SvgProps } from "../types";
import React, { forwardRef, ForwardRefExoticComponent } from "react";
import { ComponentDataType, ShapesType } from "../../shapes/types";
import ShapeBase from "../shapeBase";
import { shapesCount, shapesType } from "../common";

export const createShapeComponent = (
  shapeId: string,
  shapeData: ShapeMetadataProps & { shape: string }
): ForwardRefExoticComponent<ShapeMetadataProps> => {
  const Component = forwardRef<
    SVGSVGElement,
    SvgProps & ShapeMetadataProps & { shapeId?: string }
  >((props, ref) => {
    return <ShapeBase {...shapeData} shapeId={shapeId} {...props} ref={ref} />;
  });
  Component.displayName = shapeId as string;
  return Component;
};

export const getComponentWithShapeType = (
  shapeType: ShapesType,
  categoryData: ComponentDataType[]
) => {
  const Component = forwardRef<
    SVGSVGElement,
    SvgProps & ShapeMetadataProps & { index: number; shapeId?: string }
  >(({ index, ...props }, ref) => {
    const shapeData = categoryData[index];
    return (
      <ShapeBase
        {...shapeData}
        shapeId={`${shapeType}-${index}`}
        {...props}
        ref={ref}
      />
    );
  });
  Component.displayName = shapeType;
  return Component;
};

export const getRandomShape = ({
  type,
}: {
  type?: ShapesType;
  onlyId?: boolean;
} = {}) => {
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
