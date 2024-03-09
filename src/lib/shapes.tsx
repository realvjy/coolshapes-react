import React, {
  ForwardRefExoticComponent,
  forwardRef,
  useEffect,
  useState,
} from "react";
import shapes, { getRandomShape, shapeTypes } from "../shapes";
import { ShapeProps, ShapeType } from "./iconBase";

interface ShapeOptions extends BaseShapeOptions {
  type?: shapeTypes;
}

interface BaseShapeOptions extends ShapeProps {
  index?: number;
  random?: boolean;
}

const Coolshape: ForwardRefExoticComponent<ShapeOptions> = forwardRef(
  (options, ref) => {
    const { type, index, random, ...rest } = options;
    const [Shape, setShape] = useState<ShapeType | null>(null);
    useEffect(() => {
      let shape;
      if (random || !type || !index) {
        shape = getRandomShape({ type }) as ShapeType;
      } else {
        shape = shapes[type][index - 1];
      }
      setShape(shape);
    }, []);
    if (!Shape) {
      return null;
    }
    return <Shape {...rest} ref={ref} />;
  }
);
Coolshape.displayName = "Coolshape";

const getComponentWithShape = (
  shapeType: keyof typeof shapes
): ForwardRefExoticComponent<BaseShapeOptions> => {
  const Component = forwardRef<SVGSVGElement, BaseShapeOptions>(
    (props, ref) => {
      return <Coolshape {...props} type={shapeType} ref={ref} />;
    }
  );
  Component.displayName = shapeType;
  return Component;
};

const Star = getComponentWithShape("star");
const Ellipse = getComponentWithShape("ellipse");
const Flower = getComponentWithShape("flower");

export { Coolshape, Star, Flower, Ellipse };
